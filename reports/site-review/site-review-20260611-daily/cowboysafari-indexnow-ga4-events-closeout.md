# cowboysafari IndexNow + GA4 自定义事件补齐报告

**Task ID:** t_944134cb  
**Site:** cowboysafari.online  
**Date:** 2026-06-11  
**Assignee:** mojie  

---

## 1. IndexNow Key 文件

### 生成与部署
- **Key:** `20294ea3adc54f10867ff8d04584e019`
- **文件路径:**
  - `public/indexnow.txt`
  - `public/20294ea3adc54f10867ff8d04584e019.txt`
- **内容:** 纯 key 字符串（32 字符）

### 验证
- 本地 dev smoke (`npm run dev` + curl):
  - `GET http://localhost:3456/indexnow.txt` → `200 OK`, body = key
  - `GET http://localhost:3456/20294ea3adc54f10867ff8d04584e019.txt` → `200 OK`
- 生产部署状态: `main` 已 push，CI/CD 自动部署中（Cloudflare Pages 集成）

### IndexNow API 提交
```bash
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "host": "cowboysafari.online",
    "key": "20294ea3adc54f10867ff8d04584e019",
    "keyLocation": "https://cowboysafari.online/20294ea3adc54f10867ff8d04584e019.txt",
    "urlList": [
      "https://cowboysafari.online/",
      "https://cowboysafari.online/guides",
      "https://cowboysafari.online/support",
      "https://cowboysafari.online/sitemap.xml"
    ]
  }'
```
- **响应:** `HTTP 202 Accepted`
- **说明:** URL 已加入搜索引擎处理队列

---

## 2. GA4 自定义事件补齐

### 新增事件名与触发点

| 事件名 | 触发位置 | 触发条件 | 备注 |
|---|---|---|---|
| `iframe_play_success` | hero-play-panel.tsx | iframe `onLoad` | 游戏 iframe 加载成功时触发 |
| `fullscreen` | hero-play-panel.tsx | 点击全屏按钮成功进入全屏时 | 包含 game 参数 |
| `share` | hero-play-panel.tsx | 点击 share 按钮成功时 | method: native / clipboard |
| `outbound_app_store` | hero-play-panel.tsx | 点击 Android/iOS 下载卡片时 | 包含 platform, destination |
| `support_email` | site-header.tsx | 顶部 Contact 邮箱链接 | 不与普通 click 混淆 |
| `support_email` | site-footer.tsx | 页脚邮箱链接 | 不与普通 click 混淆 |
| `support_email` | hero-play-panel.tsx | Email Support 按钮 | 不与普通 click 混淆 |
| `support_email` | hero-play-panel.tsx | Info Pill Contact 链接 | 不与普通 click 混淆 |
| `support_email` | hero-play-panel.tsx | 底部 support copy 邮箱链接 | 不与普通 click 混淆 |
| `support_email` | app/support/page.tsx | Email-first support / Compose Email / Need live help / Downtime rituals | 共 4 处 |
| `support_email` | app/guides/page.tsx | Feedback copy 邮箱链接 | 不与普通 click 混淆 |

### 技术实现
- **新增函数:** `trackGA4Event(eventName, properties)` 专门用于 GA4 自定义事件，不向 Plausible 发送，避免埋点噪声。
- **类型安全:** `eventName` 为联合字面量，限制为 `iframe_play_success | fullscreen | share | support_email | outbound_app_store`。
- **组件抽象:** 新增 `TrackedEmailLink` client component，使 support/guides 页面保持 server component 以确保 SEO metadata 渲染不受影响。

### Build 验证
- `npm run build` 通过，无 TypeScript / lint 错误。
- 静态 chunk grep 确认事件名 `iframe_play_success`, `fullscreen`, `share`, `outbound_app_store`, `support_email` 均已打包进入生产 bundle。

---

## 3. 代码变更

```
新增:
  public/indexnow.txt
  public/20294ea3adc54f10867ff8d04584e019.txt
  components/tracked-email-link.tsx

修改:
  lib/analytics.ts          (+trackGA4Event)
  components/hero-play-panel.tsx
  components/site-header.tsx
  components/site-footer.tsx
  app/support/page.tsx
  app/guides/page.tsx
```

---

## 4. 下一步

1. **生产 smoke:** 等待 Cloudflare Pages 自动部署完成后，验证 `https://cowboysafari.online/indexnow.txt` 返回 200。
2. **GA4 DebugView:** 打开 GA4 DebugView 或浏览器 DevTools Network 面板，交互以下元素确认事件触发：
   - 滚动到 iframe 区域等待加载 → 查 `iframe_play_success`
   - 点击全屏按钮 → 查 `fullscreen`
   - 点击 share 按钮 → 查 `share`
   - 点击任意 mailto 链接 → 查 `support_email`
   - 点击下载卡片 → 查 `outbound_app_store`
3. **墨析复核:** 24h 后检查 GA4 Realtime 报告确认事件流量。
