# Expanso Presentation Deck

Professional presentation system for Expanso's "Upstream Data Control" platform, built with reveal.js and optimized for LLM-based slide generation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3030 to view the presentation.

## 📁 Project Structure

```
/
├── README.md                      # You are here
├── LLM_EVERGREEN_PROMPT.md        # Brand guidelines & design rules (READ THIS FIRST)
├── SLIDE_GENERATION_GUIDE.md      # How to generate slides via LLM
├── SLIDE_CHECKLIST.md             # Systematic slide rework checklist
├── index.html                     # Main presentation file
├── package.json                   # Dependencies
├── css/theme/expanso.css          # Custom Expanso theme
├── js/reveal-init.js              # Reveal.js configuration
├── public/                        # Assets (logos, icons)
├── archive/                       # Legacy files (see archive/README.md)
└── .claude/CLAUDE.md              # Claude Code project configuration
```

## 📋 Key Documents

### 1. **LLM_EVERGREEN_PROMPT.md** (MUST READ)
Permanent brand guidelines and design rules including:
- 10/20/30 presentation rule (10 slides max, 20 min delivery, 30pt+ fonts)
- Expanso brand voice & messaging ("at the source", not "upstream")
- Visual design system (colors, typography, layout)
- Target audience pain points
- Key metrics library (50-70% reduction, $1.77M savings, etc.)

### 2. **SLIDE_GENERATION_GUIDE.md**
Step-by-step guide for generating slides with LLMs:
- How to prompt Claude/GPT for new slides
- Reveal.js HTML structure reference
- CSS class reference
- Common slide patterns
- Quality checklist

### 3. **SLIDE_CHECKLIST.md**
Systematic checklist for reworking existing slides:
- Content audit (messaging, metrics, voice)
- Design audit (fonts, whitespace, hierarchy)
- Brand compliance check
- Accessibility verification

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (#0A1628) → Charcoal (#1A2332)
- **Accent**: Electric Cyan (#00D9FF)
- **Text**: White (#FFFFFF), Light Gray (#D4D9E0), Medium Gray (#B8BFC7)

### Typography
- **Font**: Inter (modern sans-serif)
- **Headlines**: 72-96pt, Semi-bold (600)
- **Subheadlines**: 42-60pt, Medium (500)
- **Body**: 30-36pt minimum, Regular (400)
- **RULE**: No text under 30pt (10/20/30 rule)

### Layout
- **Format**: 16:9 (1920px × 1080px)
- **Margins**: 80px from all edges
- **Whitespace**: Minimum 60% per slide
- **Focal Points**: One clear focal point per slide

## 🎯 Current Presentation Structure

The main deck (`index.html`) currently contains:

### Main Deck (5 slides)
1. **Title Slide**: "Upstream Data Control" with value pillars
2. **Problem Slide**: "$10M Data Tax" - why cloud bills keep growing
3. **How It Works**: 3-step process
4. **Customer Results**: 68% cost reduction case study
5. **Contact/CTA**: Schedule cost assessment

### Appendix (3 variations)
- **Slide 2a**: Empathy-driven problem statement
- **Slide 1a**: Bold claim variation (typography-driven)
- **Slide 1b**: Visual metaphor variation (graphic-rich)

## 🛠️ Workflow

### Adding a New Slide

1. **Review brand guidelines**: Read `LLM_EVERGREEN_PROMPT.md`
2. **Use LLM to generate**: Follow `SLIDE_GENERATION_GUIDE.md`
3. **Paste HTML into `index.html`**: Add new `<section>` element
4. **Test locally**: `npm run dev` and verify
5. **Check against checklist**: Use `SLIDE_CHECKLIST.md`

### Editing Existing Slides

1. **Edit `index.html`**: Modify the `<section>` for your slide
2. **Edit `css/theme/expanso.css`**: Modify styling if needed
3. **Live reload**: Changes appear instantly via live-server
4. **Verify compliance**: Check fonts, whitespace, messaging

## 📦 Dependencies

- **reveal.js** v5.2.1 - HTML presentation framework
- **live-server** v1.2.2 - Development server with hot reload
- **Inter font** - Loaded via Google Fonts

## 🎤 Keyboard Shortcuts

- `→` / `Space` - Next slide
- `←` - Previous slide
- `F` - Fullscreen
- `S` - Speaker notes
- `ESC` - Slide overview
- `?` - Show help

## 📝 Brand Messaging Rules

### ✅ DO:
- Lead with measurable outcomes: "50-70% reduction", "$1.77M savings"
- Use active verbs: "Cut", "Filter", "Deploy", "Control"
- Say "at the source" or "where data lives"
- Name specific platforms: "Snowflake", "Databricks", "Splunk", "Datadog"
- Show before/after contrast

### ❌ DON'T:
- Use "upstream" (too technical, requires explanation)
- Say vague things like "significant savings" or "best-in-class"
- Use passive voice for key benefits
- Create villain narratives about competitors
- Promise perfection

## 🔍 Quality Standards

Every slide must:
- [ ] Adhere to 10/20/30 rule (10 slides max, 20 min, 30pt+ fonts)
- [ ] Have one clear concept/message
- [ ] Use approved spatial language ("at the source")
- [ ] Include specific metrics (50-70%, $1.77M, etc.)
- [ ] Maintain 60%+ whitespace
- [ ] Meet WCAG AAA contrast standards (7:1 minimum)
- [ ] Be readable from 20+ feet away

## 📚 Additional Resources

- **Original Content**: See `archive/original-content/` for raw slide specifications
- **Legacy Files**: See `archive/` for historical project files
- **Reveal.js Docs**: https://revealjs.com/
- **10/20/30 Rule**: Guy Kawasaki's presentation principle

## 🤝 Contributing

When adding new slides or content:
1. Always check `LLM_EVERGREEN_PROMPT.md` first
2. Follow the established HTML/CSS patterns in `index.html`
3. Test on localhost before committing
4. Verify against `SLIDE_CHECKLIST.md`

## 📧 Contact

**David Aronchick**, CEO
aronchick@expanso.io
www.expanso.io

---

**Last Updated**: October 28, 2024
**Framework**: reveal.js v5.2.1
**Design System**: Expanso Brand Guidelines v1.0
