# ADPENCE LLC — Main Corporate Digital Home

> **AI. Software. Opportunity.**  
> The official corporate web platform for Adpence LLC and its portfolio of technology ventures.

---

## 🌐 The Adpence Venture Ecosystem

- **VideoPost AI** ([videopostai.com](https://videopostai.com)): AI-powered video creation & creator automation.
- **FootPawa** ([footpawa.com](https://footpawa.com)): AI sports technology, computer-vision analytics & scouting passports.
- **in2SOC** ([in2soc.com](https://in2soc.com)): Cybersecurity learning environment & AI-assisted SOC simulation.
- **Intelligenfy** ([intelligenfy.com](https://intelligenfy.com)): Quantitative financial market intelligence & algorithmic signals.
- **BuildAnyShop** ([buildanyshop.com](https://buildanyshop.com)): AI-powered conversational storefront and global commerce builder.
- **Adpence App** ([adpence.app](https://adpence.app)): Influencer marketing and creator audience monetization platform.
- **Adpence AI / Future Labs**: Next-generation autonomous agents & venture incubation pipeline.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Obsidian Dark Design System + Glassmorphism
- **Icons**: Lucide Icons + Custom Vector Brand Marks
- **Graphics**: HTML5 Interactive Canvas AI Network & Topological Telemetry Nexus
- **Deployment**: Cloudflare Pages / Static Edge CDN (`adpence.com`)

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static production export (outputs to ./out)
npm run build
```

---

## ⛅ Cloudflare Deployment (`adpence.com`)

### Option A: Cloudflare Pages (GitHub Integration - Recommended)
1. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select repository: `brightak47/adpence` (branch: `main`).
3. Set the build settings:
   - **Framework preset**: `Next.js (Static Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. In the Pages project settings, go to **Custom domains** and add:
   - `adpence.com`
   - `www.adpence.com`

### Option B: Cloudflare CLI (Wrangler)
```bash
# Authenticate wrangler
npx wrangler login

# Deploy static assets directly to Cloudflare
npx wrangler pages deploy out --project-name adpence
```

---

© 2026 Adpence LLC. All rights reserved.
