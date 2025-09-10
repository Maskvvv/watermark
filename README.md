# Watermark

一个纯前端（本地浏览器端）给图片添加水印的小工具：不上传、快且安全，支持移动端使用，界面清爽好看。
<img width="381" height="820" alt="image" src="https://github.com/user-attachments/assets/f8a370cf-a48b-44df-a966-917d9e55cb9d" />

## 功能特性
- 纯前端 Canvas 处理：图片不会上传到服务器，保障隐私
- 文字水印：自定义文案、字体大小、颜色与透明度
- 水印框：可调节水印区域宽高
- 图片操作：旋转、保存导出
- 现代化 UI：卡片化布局、按钮动效
- 移动端适配：小屏友好，自动纵向排布

## 技术栈
- React 16 + DVA
- roadhog 开发与构建
- Canvas 图片处理
- dxc-flex / dxc-input / dxc-upload 组件

## 目录结构
```
.
├── public/              # HTML 模板
├── src/
│   ├── routes/          # 页面与主功能（Main）
│   ├── utils/           # 工具方法（含 Canvas2Image）
│   ├── index.js         # 入口
│   └── index.css        # 全局样式
├── .webpackrc.js        # roadhog/webpack 配置
├── .babelrc             # Babel 配置
├── package.json
└── README.md
```

## 环境要求
- Node.js 14 或 16（推荐 16 LTS）
- npm 或 yarn

如果你使用 Node 17+，可能会遇到 OpenSSL 相关报错，可通过设置环境变量临时解决（见下方“本地启动”）。

## 快速开始
```bash
# 安装依赖
npm install

# 本地启动（默认 http://localhost:8000/ ）
# Node 14/16：
npm start

# Node 17+：
# Windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
# macOS/Linux
export NODE_OPTIONS=--openssl-legacy-provider && npm start

# 生产构建
npm run build   # 输出目录：dist/

# 代码检查
npm run lint
```

如需更换开发端口（默认 8000）：
```bash
# Windows PowerShell
$env:PORT=8080; npm start
# macOS/Linux
export PORT=8080 && npm start
```

## 使用说明
1. 进入首页后，点击“选择文件”上传本地图片（不会上传到服务器）
2. 在“水印文案”输入你想添加的文字
3. 调整颜色与透明度（ColorPicker + Alpha），设置字体大小与水印框宽高
4. 如需旋转图片，点击“旋转”；满意后点击“保存”导出图片

小贴士：移动端也可以使用，界面会自动调整为上下布局。

## 隐私与安全
- 全流程纯前端处理，不上传任何图片或个人信息
- 已移除第三方统计/广告脚本，避免不必要的外部请求

## 常见问题（FAQ）与排查
- Duplicate plugin/preset detected（Babel 重复插件）
  - 确保 @babel/plugin-proposal-pipeline-operator 只保留一处配置（建议在 .webpackrc.js 的 extraBabelPlugins 中配置一次）
- OpenSSL 报错（Node 17+）
  - 设置环境变量：NODE_OPTIONS=--openssl-legacy-provider（见上方“本地启动”）
- 端口占用
  - 使用 PORT 环境变量更换端口，例如 8080

## 浏览器支持
- 现代桌面浏览器（Chrome/Edge/Firefox 新版本）
- 移动端浏览器（iOS Safari 12+、Android Chrome 等）

## 贡献与反馈
欢迎提交 Issue/PR 帮助我们改进。如果你有 UI/性能/功能上的建议，欢迎提出～

---
Made with ❤️ 纯前端水印工具。
