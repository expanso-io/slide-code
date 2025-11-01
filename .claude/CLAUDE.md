# CLAUDE.md

Project instructions for Claude Code when working with the Expanso Presentation repository.

## Project Overview

This is a professional presentation deck for Expanso, built with reveal.js. The presentation communicates how Expanso provides "upstream data control" to cut cloud costs by 50-70% through filtering, transforming, and governing data **at the source** (not after ingestion).

**Key Principle**: This project follows Guy Kawasaki's **10/20/30 rule** - 10 slides maximum, 20 minute delivery, 30pt font minimum.

## Repository Structure

```
/
├── README.md                      # Start here - project overview
├── LLM_EVERGREEN_PROMPT.md        # Brand guidelines (READ FIRST for any slide work)
├── SLIDE_GENERATION_GUIDE.md      # How to generate slides via LLM
├── SLIDE_CHECKLIST.md             # Systematic slide audit checklist
├── index.html                     # Main presentation (reveal.js)
├── css/theme/expanso.css          # Custom Expanso theme
├── js/reveal-init.js              # Reveal.js configuration
├── public/                        # Assets (logos, icons)
├── archive/                       # Legacy files (Figma JSON, Slidev, old docs)
└── .claude/CLAUDE.md              # This file
```

### Before Editing ANY Slide

**ALWAYS** read `LLM_EVERGREEN_PROMPT.md` which contains:
- 10/20/30 presentation rule (non-negotiable)
- Expanso brand voice & messaging rules
  - Use "at the source" or "where data lives" (NEVER "upstream")
  - Active verbs: Cut, Filter, Deploy, Control
  - Specific metrics: 50-70%, $1.77M, 58% (not vague "significant")
- Visual design system (navy gradients, Inter font, 60%+ whitespace)
- Color palette, typography hierarchy, layout principles

### Creating New Slides

1. **Review** `SLIDE_GENERATION_GUIDE.md` for templates and patterns
2. **Choose** a slide type: Title, Problem, Solution, Benefit/Proof, or CTA
3. **Generate** HTML `<section>` element with proper structure
4. **Insert** into `index.html` between other `<section>` elements
5. **Test** at http://localhost:3030 (run `npm run dev`)
6. **Verify** against `SLIDE_CHECKLIST.md`

### Quality Standards (Non-Negotiable)

Every slide MUST:
- [ ] Adhere to 10/20/30 rule (30pt minimum font for body text)
- [ ] Have ONE clear concept/message
- [ ] Use approved language ("at the source", not "upstream")
- [ ] Include specific metrics (50-70%, $1.77M, not "significant")
- [ ] Maintain 60%+ whitespace
- [ ] Meet WCAG AAA contrast (7:1 minimum)
- [ ] Be readable from 20+ feet away

## Brand Messaging Rules

### ✅ DO:
- Lead with measurable outcomes: "50-70% reduction", "$1.77M annual savings"
- Use active verbs: "Cut costs", "Filter data", "Deploy in 3 weeks"
- Say "at the source" or "where data lives"
- Name platforms: Snowflake, Databricks, Splunk, Datadog

### ❌ DON'T:
- Use "upstream" (too technical)
- Say vague things: "significant savings", "best-in-class"
- Use passive voice: "costs are reduced" → use "Cut costs by 58%"

## Design System Quick Reference

**Colors:**
- Background: Navy (#0A1628) → Charcoal (#1A2332)
- Headlines: White (#FFFFFF)
- Body: Light gray (#D4D9E0)
- Accent: Cyan (#00D9FF) - use sparingly

**Typography:**
- Font: Inter
- Headlines: 72-96pt, Semi-bold (600)
- Body: 30-36pt, Regular (400)
- Metrics: 96-144pt, Bold (700), Cyan

**Layout:**
- 16:9 (1920×1080)
- 80px margins
- 60%+ whitespace

## Common Tasks

### Start Development Server
```bash
npm run dev
```

### Add New Slide
1. Read `LLM_EVERGREEN_PROMPT.md`
2. Use `SLIDE_GENERATION_GUIDE.md`
3. Insert into `index.html`
4. Verify with `SLIDE_CHECKLIST.md`

---

**Last Updated**: October 28, 2024
