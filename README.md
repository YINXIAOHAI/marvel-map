# Marvel Map 

> 全球山峰、湖泊与风景名胜交互地图 | Interactive map of the world's famous mountains, lakes, and scenic sites

[**在线预览 Live Demo**](https://yinxiaohai.github.io/marvel-map/)

---

## 中文简介

**Marvel Map** 是一个纯前端静态网页项目，在卫星影像底图上标注全球 **375+** 处知名山峰、湖泊与风景名胜，提供**多维评分**、**上榜理由**、**中国境内可见性**与**看山观测点**等信息。

### 功能特色
- **三大分类 TAB**：山峰 · 湖泊 · 名胜（自然风景 / 人类文明）
- **独立评分体系**
  - 山峰：知名度 30% · 高度 22% · 好看 15% · 攀登难度 15% · 意义 18%
  - 湖泊：景色 40% · 面积/储量 20% · 意义 20% · 评价 10% · 可接近 10%
  - 自然风景：极致景观 40% · 独特稀缺 25% · 生态田园 10% · 可达 10% · 口碑 15%
  - 人类文明：历史文化 35% · 艺术建筑 25% · 世界影响 20% · 体验 10% · 口碑 10%
- **多维排序**：点击侧栏按不同维度重新排名
- **图例筛选**：点击图例可筛选自然风景 / 人类文明等类型
- **中国可见性**：标注是否可在中国境内看到，并给出观测点、观景台、道路
- **看山地图**：观景台 / 山口 / 公路 / 村落 / 景区分色标注
- **高清底图**：Esri 卫星影像，可缩放至 18 级（键盘 1/2/3 切换影像/地形/街道）

### 技术栈
- 纯静态 HTML / CSS / JavaScript
- [Leaflet](https://leafletjs.com/) 开源地图库（本地 `vendor/`，无需 CDN）
- Esri World Imagery 在线瓦片

### 目录结构
```
marvel-map/
├── index.html          # 主页面
├── vendor/             # Leaflet 库
├── assets/peaks/       # 山峰 / 湖泊 / 名胜配图
└── README.md
```

### 本地运行
```bash
# 任选其一
python -m http.server 8000
# 或直接用浏览器打开 index.html
```

### 部署
将本仓库开启 **GitHub Pages**（Settings → Pages → main / root）即可。

---

## English Introduction

**Marvel Map** is a pure static front-end project that marks **375+** famous mountains, lakes, and scenic spots worldwide on satellite imagery. It provides **multi-dimensional ratings**, **why it made the list**, **visibility from China**, and **viewpoint guides**.

### Features
- **Three tabs**: Mountains · Lakes · Scenic (Nature / Civilization)
- **Independent scoring systems** (see weights above)
- **Sort by any dimension** from the sidebar
- **Legend filters** (Nature / Civilization, etc.)
- **China visibility** + viewing platforms, mountain passes, roads
- **Viewpoint layer** color-coded by type (platform / pass / road / village / scenic area)
- **HD basemap**: Esri World Imagery, zoom up to level 18 (keys 1/2/3 switch layers)

### Tech Stack
- Pure HTML / CSS / JavaScript
- [Leaflet](https://leafletjs.com/) (bundled locally in `vendor/`)
- Esri World Imagery tiles (online)

### Run locally
```bash
python -m http.server 8000
# then open http://127.0.0.1:8000
```

### Deploy
Enable **GitHub Pages** in Settings → Pages → Deploy from a branch → `main` / `/root`.

---

## Scoring

| Leaderboard | Weights |
|---|---|
| **Mountains** | Fame 30 · Height 22 · Beauty 15 · Climbing difficulty 15 · Significance 18 |
| **Lakes** | Scenery 40 · Size / volume 20 · Significance 20 · Reviews 10 · Accessibility 10 |
| **Nature** | Extreme landscape 40 · Uniqueness 25 · Eco & pastoral 10 · Accessibility 10 · Reviews 15 |
| **Civilization** | History & culture 35 · Art & architecture 25 · Global influence 20 · Experience 10 · Reviews 10 |

> Leaderboards are independent. Nature and civilization are scored separately.

Scores are 0–100; the total is a weighted sum. Mountain "Height" is mapped from elevation (~5000 m → 0, 8848.86 m → 100).

---

## 免责声明 · Disclaimer

数据整理自公开地理与旅游资料，评分仅供横向比较参考，出行前请核对路况与景区规定。  
Data compiled from public geographic/travel sources. Ratings are for comparison only. Verify road and site regulations before traveling.

---

## License

MIT

⭐ 若本项目对你有帮助，欢迎 Star！  
If you find this project useful, please give it a ⭐ star!
