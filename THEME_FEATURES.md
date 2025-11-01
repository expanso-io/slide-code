# Expanso Slidev Theme - Feature Guide

**Version 1.0** - Complete integration of BaizeAI advanced features with Expanso Design System

---

## 🎨 New Features Integrated

### 1. **Animated Glow Background System**

Procedural polygon-based glow effects that smoothly transition between slides.

**Frontmatter Properties:**

```yaml
---
glow: bottom-right          # Distribution position
glowOpacity: 0.3           # Opacity level (default: 0.4)
glowHue: 0                 # Hue rotation in degrees (default: 0)
glowSeed: default          # Seed for stable randomization
---
```

**Available Positions:**
- `full` - Entire slide (default)
- `top`, `bottom`, `left`, `right` - Edge distributions
- `top-left`, `top-right`, `bottom-left`, `bottom-right` - Corner distributions
- `center` - Centered glow
- `topmost` - Very top edge

**Example:**
```md
---
layout: default
glow: bottom-right
glowOpacity: 0.3
---

# Your Slide Title
Content with violet glow in bottom-right corner
```

**Colors Used:**
- Primary: `#501E99` → `#6823CD` (violet-800 to violet-700)
- Secondary: `#6823CD` → `#9259ED` (violet-700 to violet-500)
- Accent: `#883FFD` → `#B087F1` (violet-600 to violet-400)

All colors are official Expanso Design System violet palette.

---

### 2. **Advanced V-Click Animations**

Enhanced click animations with smooth transitions and visual effects.

**Animation Classes:**

```html
<!-- Scale up animation -->
<div v-click class="click-scale">
  Scales up when revealed
</div>

<!-- Slide up from below -->
<div v-click class="click-slide-up">
  Slides up with fade-in
</div>

<!-- Slide in from left -->
<div v-click class="click-slide-left">
  Enters from the left
</div>

<!-- Slide in from right -->
<div v-click class="click-slide-right">
  Enters from the right
</div>
```

**Default Behavior:**
All v-click elements now include:
- 500ms smooth opacity transition
- Subtle 3px blur when hidden
- Smooth easing for professional feel

---

### 3. **Custom Slide Transitions**

Enhanced fade-out transition with blur effect between slides.

**Features:**
- Fade-out: 60% of transition duration with blur
- Fade-in: 80% of transition duration, delayed for smoothness
- 5px blur at transition boundaries

**Usage:**
Automatically applied to all slides. No configuration needed.

---

### 4. **Glassmorphism Card Components**

Modern frosted-glass effect cards with backdrop blur.

**New Classes:**

```html
<!-- Generic glass card -->
<div class="card-glass">
  Frosted glass effect
</div>

<!-- Violet-branded glass -->
<div class="card-glass-violet">
  Expanso violet branding
</div>

<!-- Blue-branded glass -->
<div class="card-glass-blue">
  Bacalhau blue branding
</div>
```

**Enhanced Existing Classes:**

The following classes now include `backdrop-filter: blur(10px)`:
- `.box`
- `.box-violet`
- `.box-cyan`
- `.slidev-code`

---

### 5. **Icon System Integration**

6 comprehensive icon collections available via UnoCSS.

**Icon Collections:**
- **Carbon** - IBM Carbon Design icons (`i-carbon-*`)
- **Logos** - Brand/company logos (`i-logos-*`)
- **DevIcon** - Developer technology icons (`i-devicon-*`)
- **Simple Icons** - Popular brand icons (`i-simple-icons-*`)
- **Phosphor** - Modern UI icons (`i-ph-*`)
- **Remix Icon** - Open source icon set (`i-ri-*`)

**Usage:**

```html
<!-- Carbon cloud icon -->
<div class="i-carbon-cloud" />

<!-- Python logo -->
<div class="i-logos-python" />

<!-- TypeScript DevIcon -->
<div class="i-devicon-typescript" />

<!-- GitHub Simple Icon -->
<div class="i-simple-icons-github" />
```

**Scale:** Icons are scaled 1.2x by default for better visibility in presentations.

**Browse Icons:**
- Carbon: https://icones.js.org/collection/carbon
- Logos: https://icones.js.org/collection/logos
- DevIcon: https://icones.js.org/collection/devicon
- Simple Icons: https://icones.js.org/collection/simple-icons
- Phosphor: https://icones.js.org/collection/ph
- Remix: https://icones.js.org/collection/ri

---

### 6. **GitHub Pages Deployment**

Automated static site generation and deployment.

**Build Scripts:**

```bash
# Standard build
npm run build

# Build for GitHub Pages (with base path)
npm run build:gh

# Export to PDF
npm run export:pdf

# Export to PNG images
npm run export:png
```

**GitHub Actions Workflow:**

Automatic deployment on push to `main` or `master`:
- File: `.github/workflows/deploy.yml`
- Triggers: Push to main/master or manual dispatch
- Output: Static site deployed to GitHub Pages

**Setup Steps:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. Site will be available at `https://username.github.io/repo-name/`

---

## 📐 Layout Updates

All layouts now include the GlowBackground component:

- **default.vue** - Standard layout with glow
- **center.vue** - Centered content with glow
- **cover.vue** - Cover/title slide with glow
- **two-cols.vue** - Two-column layout with glow

Each layout has `position: relative` to properly position the glow effect.

---

## 🎯 Complete Feature Matrix

| Feature | Status | File Location |
|---------|--------|---------------|
| Glow Background System | ✅ | `theme/components/GlowBackground.vue` |
| Layout Integration | ✅ | `theme/layouts/*.vue` |
| V-Click Animations | ✅ | `theme/styles/index.css` (lines 790-880) |
| Fade-Out Transitions | ✅ | `theme/styles/index.css` (lines 803-820) |
| Glassmorphism Cards | ✅ | `theme/styles/index.css` (lines 826-862) |
| Enhanced Box Components | ✅ | `theme/styles/index.css` (lines 363-379) |
| Icon System | ✅ | `theme/setup/unocss.ts` |
| GitHub Pages Config | ✅ | `.github/workflows/deploy.yml` |
| Build Scripts | ✅ | `sli-dev/package.json` |

---

## 🎨 Design System Compliance

All new features maintain **strict compliance** with Expanso Design System:

**Colors:**
- ✅ Violet `#6823CD` as primary (no cyan)
- ✅ Pure black `#000000` backgrounds
- ✅ WCAG AA contrast ratios maintained
- ✅ Complete 110+ color palette available

**Typography:**
- ✅ 30pt+ minimum body text (10/20/30 rule)
- ✅ Inter font family
- ✅ Presentation-scaled sizes (72pt H1, 60pt H2, etc.)

**Accessibility:**
- ✅ Proper focus states
- ✅ Semantic HTML
- ✅ aria-hidden on decorative elements

---

## 📦 Dependencies Added

**sli-dev/package.json:**
```json
{
  "dependencies": {
    "seedrandom": "^3.0.5",
    "@types/seedrandom": "^3.0.8"
  },
  "devDependencies": {
    "@iconify-json/carbon": "^1.x",
    "@iconify-json/logos": "^1.x",
    "@iconify-json/devicon": "^1.x",
    "@iconify-json/simple-icons": "^1.x",
    "@iconify-json/ph": "^1.x",
    "@iconify-json/ri": "^1.x",
    "@unocss/preset-icons": "^0.x"
  }
}
```

**theme/package.json:**
```json
{
  "dependencies": {
    "seedrandom": "^3.0.5"
  },
  "devDependencies": {
    "@types/seedrandom": "^3.0.8"
  }
}
```

---

## 🚀 Quick Start

**1. Start Development Server:**
```bash
cd sli-dev
npm run dev -- slides-demo.md
```

**2. View Demo Slides:**
- Main: http://localhost:3030/
- Presenter: http://localhost:3030/presenter/
- Overview: http://localhost:3030/overview/

**3. Test Glow Backgrounds:**
Navigate through `slides-demo.md` to see different glow positions.

**4. Test Animations:**
Use arrow keys or spacebar to trigger v-click animations.

**5. Build for Production:**
```bash
npm run build:gh
```

---

## 📝 Example Slide

```md
---
layout: default
glow: bottom-right
glowOpacity: 0.3
---

# Feature Showcase

<div v-click class="click-scale">

## Animated Reveal
This scales up when clicked

</div>

<div class="grid grid-cols-2 gap-12 mt-16">

<div class="card-glass-violet">

### Violet Glass Card
With backdrop blur effect

</div>

<div class="box">

### Standard Box
Now with glassmorphism

- Icon support: <div class="i-carbon-check-mark inline-block" />
- Smooth transitions
- Expanso branding

</div>

</div>
```

---

## 🔧 Troubleshooting

**Glow not appearing?**
- Ensure frontmatter includes `glow:` property
- Check glowOpacity is > 0
- Verify layout has `position: relative`

**Icons not rendering?**
- Check icon name is correct (use icones.js.org)
- Ensure package is installed (`@iconify-json/*`)
- Verify UnoCSS config includes presetIcons

**Animations not smooth?**
- Clear browser cache
- Check CSS transitions are enabled
- Verify v-click class is applied

**Build errors?**
- Run `npm install` in both `/sli-dev` and `/theme`
- Check Node.js version >= 18
- Clear `node_modules` and reinstall

---

## 📚 Additional Resources

- **Design System**: `.expanso-design-system-complete.md`
- **Color Reference**: `.expanso-design-system.md`
- **Integration Guide**: `DESIGN_SYSTEM_INTEGRATION.md`
- **Demo Slides**: `sli-dev/slides-demo.md`
- **Slidev Docs**: https://sli.dev/

---

**Theme Version:** 1.0  
**Last Updated:** November 1, 2025  
**Maintainer:** Expanso Design Team
