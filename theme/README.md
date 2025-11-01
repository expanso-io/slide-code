# Expanso Theme for Slidev

A modern, professional presentation theme for Expanso based on the company's design system.

## Features

- **Dark gradient background** (Navy to Charcoal)
- **Typography optimized** for readability with Inter font
- **Custom layouts**: cover, center, default, two-cols
- **Design system colors**: Cyan accents, proper text hierarchy
- **Responsive spacing** with 80px safe margins
- **Follows 10/20/30 rule**: Large fonts (30pt+ body text)

## Installation

This is a local theme. To use it in a Slidev presentation:

```yaml
---
theme: ./theme
---
```

## Usage

### Frontmatter

```yaml
---
theme: ./theme
title: 'Your Presentation Title'
highlighter: shiki
transition: slide-left
mdc: true
---
```

### Layouts

#### Cover Layout (Title Slide)
```markdown
---
layout: cover
---

# Your Title Here
```

#### Center Layout
```markdown
---
layout: center
---

# Centered Content
```

#### Default Layout
```markdown
---
layout: default
---

# Left-aligned Content
```

#### Two Columns Layout
```markdown
---
layout: two-cols
---

Left column content

::right::

Right column content
```

## Custom Classes

### Typography
- `.headline` - 60pt, bold, white
- `.tagline` - 84pt, semi-bold, centered
- `.pillar-text` - 36pt, centered
- `.body-text` - 32pt, light gray
- `.metric-large` - 120pt, bold with cyan numbers

### Colors
- `.text-white` - Pure white
- `.text-violet` - Primary violet accent (violet-500)
- `.text-violet-strong` - Strong violet (violet-700)
- `.text-success` - Success green
- `.text-error` - Error red
- `.text-warning` - Warning orange
- `.text-info` - Info cyan

### Layout
- `.text-center` - Center align
- `.text-left` - Left align
- `.grid`, `.grid-cols-2`, `.grid-cols-3` - Grid layouts
- `.flex`, `.flex-col` - Flexbox
- `.gap-8`, `.gap-12`, `.gap-16` - Gap spacing

### Boxes
- `.box` - Standard box with border
- `.box-violet` - Violet accented box (primary brand)
- `.box-cyan` - Alternative violet box
- `.box-success` - Success state box
- `.box-error` - Error state box
- `.box-warning` - Warning state box
- `.box-info` - Info state box

### Positioning
- `.abs-tl` - Absolute top-left
- `.abs-tr` - Absolute top-right
- `.abs-bl` - Absolute bottom-left
- `.abs-br` - Absolute bottom-right

## Design System

Based on the official Expanso Design System.

### Colors
- **Primary (Violet-700)**: `#6823CD` - Primary brand color
- **Primary Hover (Violet-800)**: `#501E99` - Hover states
- **Primary Light (Violet-500)**: `#9259ED` - Accents on dark backgrounds
- **Background Dark (Grey-900)**: `#000000` - Slide backgrounds
- **Text on Dark**: `#FFFFFF` (headings), `#FCFCFC` (body)
- **Success (Green-500)**: `#59E248`
- **Error (Red-500)**: `#FF7244`
- **Warning (Orange-500)**: `#FF953F`
- **Info (Cyan-500)**: `#00BBB4`

### Typography
- Font: Inter
- Headline: 60-96pt
- Body: 32pt minimum
- Footer: 22pt

### Spacing
- Safe margins: 80px
- Content margins: 120px

## Example

See `example.md` for a complete presentation example.

## Development

To test the theme:

```bash
cd theme
slidev example.md
```

## License

Proprietary - Expanso, Inc.
