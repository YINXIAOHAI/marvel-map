/* Marvel Map Service Worker
 * ---------------------------------------------------------------
 * 策略：
 *   - 静态资源（JS/CSS/图片）→ Cache First。assets/peaks/ 足足 129MB 且不变，
 *     这是本项目最大的重复下载开销，必须缓存。
 *   - HTML（index.html）→ Network First，失败才回落缓存。
 *     这样改了页面用户立刻能看到，不会被旧版卡住。
 *   - BUMP 常量：每次发版改这个数字，旧缓存会自动作废。
 */
var BUMP = "v2";
var STATIC_CACHE = "marvel-static-" + BUMP;
var PAGE_CACHE = "marvel-pages-" + BUMP;
var KEEP = [STATIC_CACHE, PAGE_CACHE];

// 安装时只预热“首屏必需”的小文件；图片按需缓存，避免一次写盘几百 MB
var PRELOAD = [
  "./",
  "./index.html",
  "./data.js",
  "./vendor/leaflet.js",
  "./vendor/leaflet.css"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(STATIC_CACHE).then(function (c) { return c.addAll(PRELOAD); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () { return self.skipWaiting(); })  // 预热失败不阻塞安装
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (KEEP.indexOf(k) === -1) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // Esri 瓦片不走缓存

  // HTML：网络优先，失败回落
  if (req.mode === "navigate" || (req.headers.get("accept") || "").indexOf("text/html") !== -1) {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(PAGE_CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (r) {
          return r || caches.match("./index.html");
        });
      })
    );
    return;
  }

  // 静态资源：缓存优先，未命中则请求并写入缓存
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(STATIC_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
