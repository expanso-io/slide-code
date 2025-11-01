# Slidev Theme Updates - Official Design System

The Expanso Slidev theme has been updated to match the official Expanso Design System.

## What Changed

### 1. **Colors** ✅
- **Replaced custom colors with official palette**
  - Primary: Violet-700 `#6823CD` (was: Custom cyan)
  - Accent: Violet-500 `#9259ED` for visibility on dark backgrounds
  - Background: Grey-900 `#000000` (pure black)
  - Text on dark: White `#FFFFFF` and Grey-50 `#FCFCFC`

### 2. **Typography** ✅
- **Maintained 10/20/30 rule** (30pt+ minimum for body text)
- Updated font weights to match design system
- Proper line heights (1.1 for display, 1.6 for body)

### 3. **Components** ✅
- **Boxes**: `.box-violet`, `.box-success`, `.box-error`, `.box-warning`, `.box-info`
- **Buttons**: `.btn-primary`, `.btn-secondary` with proper focus states
- **Cards**: Standard 8px border-radius per design system

### 4. **Semantic Colors** ✅
- Success: Green-500 `#59E248`
- Error: Red-500 `#FF7244`
- Warning: Orange-500 `#FF953F`
- Info: Cyan-500 `#00BBB4`

### 5. **Spacing** ✅
- Updated to 4px base scale (scaled up for presentations)
- Proper safe margins: 80px
- Content spacing: 48px, 64px, 80px, 120px

## File Changes

### Created
- `.expanso-design-system.md` - Local reference of official design system

### Updated
- `theme/styles/index.css` - Complete color and typography overhaul
- `theme/layouts/*.vue` - Background colors updated to black
- `theme/setup/unocss.ts` - Color palette updated
- `theme/README.md` - Documentation updated
- `sli-dev/slides-new.md` - Example slides updated with violet

## Color Mapping

### Old → New
- `cyan` (#00D9FF) → `violet` (#9259ED) for primary accent
- `navy` gradient → `black` (#000000) for backgrounds
- Custom grays → Official grey scale (#727272, #9F9F9F, etc.)

## Usage

### Text Colors
```html
<div class="text-violet">Violet accent</div>
<div class="text-violet-strong">Strong violet</div>
<div class="text-success">Success message</div>
<div class="text-error">Error message</div>
```

### Boxes
```html
<div class="box-violet">Primary branded box</div>
<div class="box-success">Success state box</div>
<div class="box-error">Error state box</div>
```

### Buttons
```html
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>
```

## Design System Rules Applied

1. ✅ **Violet must appear in all Expanso designs** - Used as primary accent
2. ✅ **Minimum 30pt body text** - Maintained for readability
3. ✅ **Proper contrast ratios** - All colors meet WCAG AA standards on dark
4. ✅ **Consistent spacing** - 4px base scale throughout
5. ✅ **Focus indicators** - 3px violet outline on interactive elements

## Testing

Server starts successfully:
```bash
cd sli-dev
npm run dev -- slides-new.md
```

Access at: http://localhost:3031/

## Next Steps

1. Update any existing presentations to use new color classes
2. Replace `.text-cyan` with `.text-violet` throughout
3. Update box components from `.box-cyan` to `.box-violet`
4. Review and update custom slide content for brand consistency

## Design System Reference

Full design system available in: `.expanso-design-system.md`

Key colors to remember:
- **Primary**: `#6823CD` (violet-700)
- **Accent**: `#9259ED` (violet-500) 
- **Background**: `#000000` (grey-900)
- **Text**: `#FFFFFF` and `#FCFCFC`
