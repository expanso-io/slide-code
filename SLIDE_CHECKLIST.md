# Slide Rework Checklist

Systematic checklist for auditing and improving existing slides against Expanso brand guidelines.

## How to Use This Checklist

For each slide in your presentation:
1. Open the slide in `index.html`
2. View it locally at http://localhost:3030
3. Go through all sections below
4. Mark items as ✅ (pass) or ❌ (needs fixing)
5. Fix all ❌ items before moving to the next slide
6. Document any decisions in slide's `<aside class="notes">`

## Slide Identification

**Slide Number**: _____
**Slide Type**: ☐ Title ☐ Problem ☐ Solution ☐ Benefit/Proof ☐ CTA ☐ Other
**Target Audience**: ☐ CFO/FinOps ☐ Data Engineers ☐ CDO/VP Data ☐ CTO/Executives
**Status**: ☐ Needs Major Rework ☐ Needs Minor Fixes ☐ Brand Compliant

---

## Part 1: Structural Compliance (10/20/30 Rule)

### 10 Slides Maximum
- [ ] This slide is part of a deck with ≤10 main slides (excluding appendix)
- [ ] If this is an appendix slide, it's clearly labeled as such
- [ ] This slide contains ONE concept only (not multiple ideas combined)

### 20 Minutes Maximum
- [ ] This slide can be delivered in 2-3 minutes or less
- [ ] Speaker notes are concise (not a script)
- [ ] Content is focused enough for quick comprehension

### 30 Point Font Minimum
- [ ] **Headline**: ≥60pt (should be 60-96pt)
- [ ] **Subheadline**: ≥42pt
- [ ] **Body text**: ≥30pt (critical - no exceptions)
- [ ] **Metrics/Numbers**: ≥96pt (ideally 120-144pt)
- [ ] **Footer/Attribution**: ≥18pt (minimum acceptable)

**Font Size Audit**:
- Headline actual size: _____pt
- Body text minimum size: _____pt
- Metric size (if applicable): _____pt
- Any text under 30pt? ☐ Yes ☐ No (if yes, remove or enlarge)

---

## Part 2: Content & Messaging

### Core Message
- [ ] The slide communicates ONE clear idea
- [ ] I can describe this slide's purpose in one sentence
- [ ] The focal point is obvious within 3 seconds

**One-Sentence Purpose**: _________________________________

### Brand Language Compliance
- [ ] Uses "at the source" OR "where data lives" (NOT "upstream")
- [ ] Uses "filter, transform, govern" (NOT vague "process" or "manage")
- [ ] No use of "upstream" in slide content
- [ ] Uses spatial positioning language correctly

### Active Voice & Verbs
- [ ] Uses strong active verbs: Cut, Filter, Deploy, Control, Accelerate, Enable
- [ ] Avoids passive voice for key benefits (e.g., "Cut costs" not "Costs are reduced")
- [ ] Verbs are imperative and action-oriented

### Metrics & Specificity
- [ ] Uses specific numbers: "50-70%", "$1.77M", "58%", "16×" (NOT "significant" or "dramatic")
- [ ] Every claim is backed by a metric or proof point
- [ ] Metrics are from approved library (see LLM_EVERGREEN_PROMPT.md)
- [ ] No vague value propositions: "innovative", "best-in-class", "revolutionary"

**Metrics Used**: _________________________________

### Platform References
- [ ] Names specific platforms: Snowflake, Databricks, Splunk, Datadog (NOT generic "analytics tools")
- [ ] Positions platforms as complementary (not as villains)
- [ ] Uses platform names in context of integration/compatibility

### Proof Points
- [ ] If making a claim, includes proof (customer quote, case study, metric)
- [ ] Customer references are real and specific (e.g., "Fortune 500 Financial Services")
- [ ] ROI or time-to-value is mentioned if relevant

---

## Part 3: Visual Design

### Layout & Whitespace
- [ ] ≥60% whitespace (slide should feel "empty")
- [ ] 80px margins maintained from all edges
- [ ] Content is not crammed or cluttered
- [ ] Generous spacing between elements (40px+ gaps)

**Estimated Whitespace**: _____%

### Background
- [ ] Navy blue diagonal gradient (#0A1628 → #0F1E2E → #1A2332, 135deg)
- [ ] Subtle noise texture (3% opacity) OR clean gradient
- [ ] No busy patterns or competing background elements
- [ ] Background is consistent with rest of deck

### Focal Point
- [ ] ONE clear focal point (not multiple competing elements)
- [ ] Focal point uses size, color, or position for emphasis
- [ ] Typically: large metric, headline, or diagram

**Focal Point**: _________________________________

### Color Usage
- [ ] Text colors from approved palette:
  - Headlines: Pure white (#FFFFFF)
  - Body: Light gray (#D4D9E0)
  - Secondary: Medium gray (#B8BFC7)
  - Accent: Electric cyan (#00D9FF) - used sparingly
- [ ] Accent color (cyan) used only for metrics, CTAs, or key emphasis
- [ ] No unapproved colors used

### Typography
- [ ] Font family: Inter (modern sans-serif)
- [ ] Font weights: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)
- [ ] Proper hierarchy: headlines larger than body text
- [ ] Line height appropriate: 1.1-1.2 for headlines, 1.4-1.6 for body
- [ ] Letter spacing: -1% to -2% for large headlines

### Alignment & Structure
- [ ] Centered alignment for hero content (taglines, key metrics)
- [ ] Left-aligned for body text and bullet lists (easier to read)
- [ ] Consistent alignment throughout slide (not randomly mixed)
- [ ] Elements aligned to grid or visual structure

---

## Part 4: Content Density

### Text Amount
- [ ] Headline is 1-2 lines maximum
- [ ] Body text is 3-5 short bullet points maximum OR 1-2 sentences
- [ ] No paragraphs of text (detail goes in speaker notes)
- [ ] Every word justifies its presence

**Word Count (excluding headline)**: _____
**Ideal**: <50 words on slide

### Bullet Points
- [ ] Maximum 3-5 bullets
- [ ] Each bullet is brief (one line preferred, two lines maximum)
- [ ] Bullets use parallel structure (all start with verbs, or all nouns, etc.)
- [ ] No sub-bullets (if needed, split into separate slide)

### Numbers & Metrics
- [ ] If slide has a metric, it's sized ≥96pt (ideally 120-144pt)
- [ ] Metric is in electric cyan (#00D9FF) for emphasis
- [ ] Context provided below metric (what does this number mean?)

---

## Part 5: Visual Elements

### Diagrams & Graphics
- [ ] Diagram is simple enough to understand in 3 seconds
- [ ] Maximum 3-5 boxes/nodes in diagram
- [ ] Lines are 2-4px width for clarity
- [ ] Labels are ≥30pt font size
- [ ] Diagram uses approved colors (white, cyan, light gray)
- [ ] Diagram supports message (not purely decorative)

### Icons & Imagery
- [ ] Icons are minimal and geometric (not detailed illustrations)
- [ ] No stock photography or generic clip art
- [ ] Icons use consistent style throughout deck
- [ ] If using logos: grayscale or muted color, equal sizing

### Data Visualizations
- [ ] Charts are simple: bar, line, or comparison (not complex)
- [ ] Limited to 3-5 data points per chart
- [ ] Labels are large and readable (30pt minimum)
- [ ] Key insight highlighted with cyan accent
- [ ] Chart has clear takeaway (not just "data")

---

## Part 6: Accessibility & Usability

### Contrast
- [ ] All text meets WCAG AAA standards (7:1 contrast minimum)
- [ ] White (#FFFFFF) on Navy (#0A1628) = 15.8:1 ✓
- [ ] Light gray (#D4D9E0) on Navy = 12.2:1 ✓
- [ ] No low-contrast text that's hard to read

### Readability
- [ ] Slide is readable from 20+ feet away
- [ ] Font sizes are large enough for back of room
- [ ] No thin font weights that disappear on screen
- [ ] High contrast maintained throughout

### Cognitive Load
- [ ] Slide doesn't overwhelm (low cognitive load)
- [ ] Information is chunked into digestible pieces
- [ ] Visual hierarchy guides eye naturally (top to bottom, or focal point outward)
- [ ] No unnecessary elements competing for attention

---

## Part 7: Speaker Support

### Speaker Notes
- [ ] Slide has speaker notes in `<aside class="notes">`
- [ ] Notes include talking points and context
- [ ] Notes mention transitions to next slide
- [ ] Notes identify which persona this slide targets
- [ ] Notes include timing guidance if needed

### Delivery Guidance
- [ ] Notes indicate where to pause for effect
- [ ] Notes pre-empt likely questions and provide answers
- [ ] Notes suggest emphasis ("Stress the '$1.77M' figure")
- [ ] Notes explain why this slide matters to audience

---

## Part 8: Technical Quality

### HTML Structure
- [ ] Valid HTML5 (properly closed tags)
- [ ] `<section>` element with `data-slide-number` attribute
- [ ] No JavaScript errors in console
- [ ] Slide renders correctly in reveal.js

### CSS & Styling
- [ ] Uses approved CSS classes from `expanso.css` when possible
- [ ] Inline styles are minimal and intentional
- [ ] Styles don't conflict with theme
- [ ] Responsive (works at different screen sizes)

### Performance
- [ ] No large unoptimized images (if using images)
- [ ] No external dependencies that slow loading
- [ ] Slide transitions work smoothly

---

## Part 9: Context & Positioning

### Deck Flow
- [ ] This slide logically follows the previous slide
- [ ] This slide sets up the next slide
- [ ] Transition between slides is smooth (notes mention it)
- [ ] Slide order makes narrative sense

### Audience Targeting
- [ ] Slide addresses a specific pain point for target audience
- [ ] Language and framing appropriate for audience sophistication
- [ ] Proof points resonate with audience (e.g., CFOs care about cost, engineers care about velocity)

**Primary Audience**: _________________________________
**Pain Point Addressed**: _________________________________

---

## Part 10: Final Checklist

### Pre-Approval Verification
- [ ] Slide adheres to 10/20/30 rule
- [ ] All fonts ≥30pt for body text
- [ ] ≥60% whitespace maintained
- [ ] One clear concept per slide
- [ ] Approved brand language used
- [ ] Specific metrics included
- [ ] High contrast (WCAG AAA compliant)
- [ ] Readable from 20+ feet away
- [ ] Speaker notes included
- [ ] Technically sound (valid HTML, renders correctly)

### Decision Log
Use this space to document any decisions or trade-offs:

**Changes Made**: _________________________________

**Rationale**: _________________________________

**Approved By**: _________________________________

**Date**: _________________________________

---

## Scoring System (Optional)

Rate each section:
- **Part 1 (Structural)**: ___/10
- **Part 2 (Content)**: ___/10
- **Part 3 (Visual Design)**: ___/10
- **Part 4 (Content Density)**: ___/10
- **Part 5 (Visual Elements)**: ___/10
- **Part 6 (Accessibility)**: ___/10
- **Part 7 (Speaker Support)**: ___/10
- **Part 8 (Technical)**: ___/10
- **Part 9 (Context)**: ___/10
- **Part 10 (Final)**: ___/10

**Total Score**: ___/100

**Threshold for Approval**: ≥85/100

---

## Common Issues & Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| Font too small | Increase to 30pt minimum; remove text if needed |
| Too much text | Move detail to speaker notes; keep key point only |
| No clear focal point | Enlarge one element to 2× size of others |
| Low whitespace | Remove 50% of elements; increase margins |
| Vague metric | Replace "significant" with specific "58%" |
| Uses "upstream" | Change to "at the source" or "where data lives" |
| Passive voice | Rewrite: "Costs are reduced" → "Cut costs by 58%" |
| Multiple concepts | Split into 2+ slides |
| Cluttered diagram | Remove boxes until ≤5 elements remain |
| Low contrast text | Use white (#FFFFFF) or light gray (#D4D9E0) only |

---

## Next Steps After Checklist

1. **If ≥85/100**: Mark slide as approved, move to next
2. **If 70-84/100**: Make quick fixes, re-score
3. **If <70/100**: Consider regenerating slide from scratch using SLIDE_GENERATION_GUIDE.md

**Slide Status**: ☐ Approved ☐ Needs Fixes ☐ Needs Regeneration

---

**Last Updated**: October 28, 2024
**Version**: 1.0
**Maintained By**: David Aronchick (aronchick@expanso.io)
