# Slide Generation Guide: LLM-Based Workflow

Complete guide for generating Expanso presentation slides using Large Language Models (Claude, GPT-4, etc.).

## Prerequisites

Before generating slides, **ALWAYS** read:
1. `LLM_EVERGREEN_PROMPT.md` - Brand guidelines, messaging rules, visual design system
2. `README.md` - Project overview and structure
3. Current `index.html` - Understand existing slide patterns

## Core Principles

### 1. **10/20/30 Rule** (Non-Negotiable)
- **10 slides maximum** - Each slide = one key concept
- **20 minutes maximum** - Deliverable content in 20 min or less
- **30pt font minimum** - All body text 30pt+, headlines 60-96pt

### 2. **One Concept Per Slide**
Never combine multiple ideas. If you're tempted to add "and also...", make it a separate slide.

### 3. **Visual Over Verbal**
Use diagrams, metrics, and whitespace instead of paragraphs of text.

## Slide Generation Workflow

### Step 1: Define Your Slide Objective

Ask yourself:
- **What is the ONE concept this slide communicates?**
- **What should the audience remember after 5 seconds?**
- **Does this fit into our 10-slide deck structure?**

### Step 2: Choose a Slide Type

See "Slide Type Templates" section below for patterns.

### Step 3: Create the Prompt for Your LLM

**Template Prompt:**

```
Generate a reveal.js HTML slide for the Expanso presentation deck following these requirements:

SLIDE OBJECTIVE:
[One sentence describing the slide's purpose]

SLIDE TYPE:
[Choose: Title, Problem, Solution, Benefit/Proof, or CTA]

CONTENT REQUIREMENTS:
- Headline: [Your headline text]
- Key metric or visual: [The focal point]
- Supporting points: [2-3 bullet points or brief text]

DESIGN REQUIREMENTS:
- Follow 10/20/30 rule: All body text 30pt+, headlines 60-96pt
- Navy blue gradient background (#0A1628 → #1A2332)
- 60%+ whitespace
- One clear focal point
- Use Inter font family
- High contrast (white/light gray text on dark background)

BRAND MESSAGING:
- Use "at the source" or "where data lives" (NOT "upstream")
- Include specific metrics: 50-70% reduction, $1.77M savings, etc.
- Active verbs: Cut, Filter, Deploy, Control
- Name platforms: Snowflake, Databricks, Splunk, Datadog

OUTPUT:
Provide the HTML <section> element with inline classes and styling, ready to paste into index.html.
```

### Step 4: Review and Refine

Check the generated HTML against:
- [ ] Font sizes (nothing under 30pt for body text)
- [ ] Whitespace (60%+ empty space)
- [ ] Messaging (uses approved language)
- [ ] Metrics (specific numbers, not vague claims)
- [ ] Focal point (one clear element that draws attention)

### Step 5: Insert and Test

1. Open `index.html`
2. Paste the `<section>` element inside `<div class="slides">`
3. Save and view at http://localhost:3030
4. Refine CSS in `css/theme/expanso.css` if needed

## Slide Type Templates

### 1. Title Slide

**Purpose**: Establish brand and core value proposition
**Focal Point**: Main tagline or positioning statement
**Font Sizes**: Tagline 72-96pt, Pillars 42pt, Footer 24pt

**Example Prompt:**
```
Create a reveal.js title slide for Expanso with:
- Company logo placeholder (top-left, 80px from edges)
- Main tagline: "Data Control at the Source" (96pt, white, centered, 380px from top)
  IMPORTANT: DO NOT use "Upstream" - use "at the source" or "where data lives"
- Electric cyan divider (120px × 2px, centered below tagline)
- Value pillars: "Cut costs by 50-70%. Deploy AI-ready data. Scale without complexity." (42pt, light gray #D4D9E0, centered)
- Footer section (120px height, darker navy #0D1622)
- Contact info: "David Aronchick, CEO" (24pt) and "aronchick@expanso.io" (21pt)
- Background: Navy gradient 135deg, #0A1628 → #0F1E2E → #1A2332
- Subtle noise texture overlay (3% opacity)
- data-slide-number="Slide 1"
```

### 2. Problem Slide

**Purpose**: Establish pain point with provocative statement
**Focal Point**: Large metric or statistic proving the problem
**Font Sizes**: Headline 60-72pt, Metric 96-144pt (cyan), Bullets 30pt

**Example Prompt:**
```
Create a problem slide about runaway cloud costs with:
- Headline: "The $10M Data Tax: Why Your Cloud Bills Keep Growing" (60pt, white)
- Large metric: "40% YoY" (120pt, electric cyan #00D9FF, centered focal point)
- Context text: "Average growth in cloud data spend" (36pt, light gray, below metric)
- 3 supporting bullets (30pt each):
  * "60-70% of data in Snowflake never queried"
  * "Data teams spend 40% of time firefighting pipelines"
  * "Centralization creates data gravity—expensive to move, slow to query"
- Simple icon or diagram (optional)
- data-slide-number="Slide 2"
- Navy gradient background with 65%+ whitespace
```

### 3. Solution Slide

**Purpose**: Show how Expanso solves the problem
**Focal Point**: Simple diagram showing spatial positioning
**Font Sizes**: Headline 60-72pt, Diagram labels 30pt, Benefits 30pt

**Example Prompt:**
```
Create a solution slide showing "Process Data Where It Lives" with:
- Headline: "Control Data at the Source" (60pt, white, top)
- Simple 3-box flow diagram (centered):
  * Box 1: "Data Sources" (edges, on-prem)
  * Arrow with "EXPANSO" label (highlighted in cyan)
  * Box 2: "Cloud Platforms" (Snowflake, Databricks, Splunk)
- Arrow annotation: "50-70% less data" (cyan accent)
- 3 key benefits below (30pt each, brief):
  * "Filter noise before expensive ingestion"
  * "Transform data where it lives"
  * "Enforce governance at the edge"
- data-slide-number="Slide 3"
- Generous whitespace (70%+)
```

### 4. Benefit/Proof Slide

**Purpose**: Validate claim with customer proof point
**Focal Point**: Large metric as proof
**Font Sizes**: Benefit headline 60-72pt, Metric 120-144pt (cyan), Context 30-36pt

**Example Prompt:**
```
Create a proof slide for cost reduction with:
- Benefit headline: "Cut Cloud Costs in Half" (72pt, white)
- Large metric: "58%" (144pt, electric cyan #00D9FF, bold 700)
- Context: "Combined reduction across Snowflake + Datadog" (36pt, light gray)
- Customer context box (subtle border, 30% opacity):
  * "Fortune 500 Retail Company"
  * "$1.77M annual savings"
  * "Deployed in 3 weeks"
- 2-3 implementation details (30pt, brief bullets)
- data-slide-number="Slide 4"
- Clean, minimal design with 60%+ whitespace
```

### 5. Call to Action (CTA) Slide

**Purpose**: Clear next step for audience
**Focal Point**: CTA text or contact method
**Font Sizes**: CTA headline 60-72pt, Contact 42-48pt (cyan), Details 30pt

**Example Prompt:**
```
Create a CTA slide with:
- Headline: "Let's Talk About Your Data Costs" (72pt, white, centered)
- CTA: "Schedule a Free Cost Assessment" (48pt, cyan #00D9FF, centered)
- Contact method: "aronchick@expanso.io" (42pt, cyan, centered)
- Optional tagline: "See exactly where Expanso can save you money" (30pt, light gray)
- Footer: "Expanso: Upstream Data Control" (24pt, dim gray, bottom)
- data-slide-number="Slide 5"
- Maximum whitespace (75%+), very clean
```

## CSS Class Reference

Common classes available in `css/theme/expanso.css`:

### Layout Classes
- `.expanso-title-slide` - Brand-compliant title slide with navy gradient
- `.problem-slide` - Problem statement layout
- `.solution-slide` - Solution explanation layout

### Typography Classes
- `.primary-tagline` - 96pt, semi-bold, white, centered
- `.hero-headline` - 72pt, bold, white
- `.hero-emphasis` - Inline emphasis (cyan accent)
- `.hero-subheadline` - 32pt+, light gray
- `.value-pillars` - 42pt, supporting text

### Visual Element Classes
- `.flow-row` - Horizontal flow diagram container
- `.flow-box` - Box in flow diagram
- `.flow-expanso` - Highlighted Expanso box (cyan background)
- `.savings-callout` - Metric callout box
- `.metric-card` - Customer results card

### Footer Classes
- `.title-footer` - Footer section (120px height, darker navy)
- `.contact-name` - 24pt name text
- `.contact-email` - 21pt email text

## Common Patterns

### Pattern 1: Centered Metric with Context

```html
<section data-slide-number="Slide X">
  <h1>Benefit Headline Here</h1>

  <div style="text-align: center; margin: 120px 0;">
    <div style="font-size: 144px; font-weight: 800; color: #00D9FF; line-height: 1; margin-bottom: 24px;">
      50-70%
    </div>
    <p style="font-size: 36px; color: #D4D9E0; margin: 0;">
      Data Volume Reduction
    </p>
  </div>

  <aside class="notes">
    [Speaker notes here]
  </aside>
</section>
```

### Pattern 2: Simple Flow Diagram

```html
<section data-slide-number="Slide X">
  <h1>Flow Diagram Headline</h1>

  <div style="display: flex; align-items: center; justify-content: center; gap: 48px; margin-top: 80px;">
    <div style="background: #151B23; border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 40px; min-width: 280px; text-align: center;">
      <div style="font-size: 30px; font-weight: 600; color: #FFFFFF;">Box 1</div>
    </div>

    <div style="font-size: 56px; color: rgba(255,255,255,0.3);">→</div>

    <div style="background: #00A9E0; border-radius: 12px; padding: 44px; min-width: 300px; text-align: center; box-shadow: 0 8px 32px rgba(0,169,224,0.4);">
      <div style="font-size: 42px; font-weight: 800; color: #0A0E14;">EXPANSO</div>
    </div>

    <div style="font-size: 56px; color: rgba(255,255,255,0.3);">→</div>

    <div style="background: #151B23; border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 40px; min-width: 280px; text-align: center;">
      <div style="font-size: 30px; font-weight: 600; color: #FFFFFF;">Box 2</div>
    </div>
  </div>

  <aside class="notes">
    [Speaker notes here]
  </aside>
</section>
```

### Pattern 3: Bullet List with Large Fonts

```html
<section data-slide-number="Slide X">
  <h1 style="font-size: 60px; margin-bottom: 80px;">Key Points Headline</h1>

  <ul style="font-size: 32px; line-height: 1.6; color: #D4D9E0; list-style: none; padding: 0;">
    <li style="margin-bottom: 40px;">
      ✓ First key point in brief format
    </li>
    <li style="margin-bottom: 40px;">
      ✓ Second key point equally brief
    </li>
    <li style="margin-bottom: 40px;">
      ✓ Third key point, maximum
    </li>
  </ul>

  <aside class="notes">
    [Speaker notes here]
  </aside>
</section>
```

## Quality Checklist

Before finalizing your generated slide, verify:

### Content Compliance
- [ ] Uses "at the source" or "where data lives" (NOT "upstream")
- [ ] Includes specific metrics (50-70%, $1.77M, 58%, etc.)
- [ ] Active verbs used (Cut, Filter, Deploy, Control)
- [ ] Platform names mentioned (Snowflake, Databricks, Splunk, Datadog)
- [ ] One clear concept per slide
- [ ] Speaker notes included in `<aside class="notes">`

### Design Compliance
- [ ] All body text 30pt or larger
- [ ] Headlines 60-96pt
- [ ] Navy gradient background (#0A1628 → #1A2332)
- [ ] High contrast text (white/light gray on dark)
- [ ] 60%+ whitespace maintained
- [ ] One clear focal point
- [ ] Inter font family used

### Technical Requirements
- [ ] Valid HTML5 (properly closed tags)
- [ ] `data-slide-number` attribute included
- [ ] No inline styles that override theme (unless intentional)
- [ ] Responsive (works at different screen sizes)

## Advanced Tips

### Tip 1: Iterative Refinement

Generate a first draft, then refine with follow-up prompts:
```
"Make the headline larger (72pt instead of 60pt)"
"Increase whitespace between elements by 50%"
"Change the metric color to electric cyan (#00D9FF)"
"Simplify the diagram - remove the middle box"
```

### Tip 2: Leverage Existing Slides

Reference existing slides in `index.html` when prompting:
```
"Create a slide similar to Slide 2 (Problem slide) but focused on
pipeline reliability instead of costs. Keep the same layout and
styling but change the headline and metrics."
```

### Tip 3: Create Variations

Generate multiple versions for A/B testing:
```
"Generate 3 variations of this slide:
1. Typography-focused (large numbers, minimal text)
2. Diagram-focused (visual flow, less text)
3. Empathy-focused (problem statement, emotional appeal)"
```

### Tip 4: Use Speaker Notes Effectively

Include detailed context in speaker notes:
```html
<aside class="notes">
  This slide addresses the CFO/FinOps persona directly. Key talking points:

  - Emphasize the $1.77M figure - this is annual savings, not one-time
  - Pause after the "58%" metric to let it land
  - If asked about implementation time: "3 weeks from shadow mode to production"
  - Transition: "And this isn't just about cost. Let's talk about velocity..."
</aside>
```

## Common Mistakes to Avoid

### ❌ Mistake 1: Too Much Text
**Problem**: Paragraphs of body text, small fonts
**Solution**: Use speaker notes for detail. Slide shows key point only.

### ❌ Mistake 2: Vague Metrics
**Problem**: "Significant cost reduction" or "Better performance"
**Solution**: Always use specific numbers: "58% reduction" or "16× faster queries"

### ❌ Mistake 3: Multiple Concepts
**Problem**: "Cost reduction AND better security AND faster deployment"
**Solution**: Split into 3 separate slides, one concept each

### ❌ Mistake 4: Competing Focal Points
**Problem**: Large metric + large diagram + large headline all fighting for attention
**Solution**: One focal point. Everything else supports it.

### ❌ Mistake 5: Insufficient Whitespace
**Problem**: Cramming too many elements, <40% whitespace
**Solution**: Remove elements until slide feels "empty". 60%+ whitespace.

## Example Complete Prompt

Here's a complete prompt you can adapt:

```
Generate a reveal.js HTML slide for the Expanso presentation deck.

SLIDE OBJECTIVE:
Show how Expanso reduces cloud storage costs through intelligent data filtering at the edge.

SLIDE TYPE:
Benefit/Proof slide

CONTENT:
- Headline: "Slash Storage Costs at the Source"
- Primary metric: "88%" (this is the focal point - make it huge and cyan)
- Context: "Reduction in cloud egress costs"
- Customer proof: "Fortune 500 Financial Services"
- 3 brief implementation points:
  * "Filter irrelevant data before cloud ingestion"
  * "Keep high-value data local for instant access"
  * "Sync only AI-ready datasets to cloud platforms"

DESIGN REQUIREMENTS (CRITICAL):
- 10/20/30 rule compliance: headline 72pt, metric 144pt, bullets 30pt minimum
- Navy blue diagonal gradient background: 135deg, #0A1628 → #0F1E2E → #1A2332
- 65%+ whitespace - should feel empty and spacious
- One focal point: the "88%" metric in electric cyan (#00D9FF)
- Inter font family throughout
- High contrast: white (#FFFFFF) and light gray (#D4D9E0) text on dark
- data-slide-number="Slide 4"

BRAND MESSAGING (CRITICAL):
- Use "at the source" in content (NOT "upstream")
- Active voice: "Slash", "Filter", "Keep", "Sync"
- Specific metric: "88%" not "significantly" or "dramatically"
- Name competitor platforms if relevant: Snowflake, AWS, Azure

OUTPUT FORMAT:
Provide ONLY the HTML <section> element with inline styling, ready to paste
directly into index.html between other <section> elements. Include speaker
notes in <aside class="notes"> with talking points and transitions.
```

## Target Audience Personas

When generating slides, consider your primary audience and adjust messaging:

### CFO/FinOps Persona
**Pain Points**: Runaway platform costs consuming 30-40% of data budget
**Focus On**:
- Cost savings metrics: 50-70% reduction, $1.77M savings, 58% cost reduction
- ROI and payback period: 2.5 months to full ROI
- Annual savings figures

**Example Prompt Addition**:
```
AUDIENCE: CFO/FinOps leaders
PAIN POINT: Snowflake/Splunk bills growing 40% YoY with no revenue growth
FOCUS: Lead with dollar savings ($1.77M) and percentage reduction (58%)
```

### Data Engineers Persona
**Pain Points**: Pipeline instability, firefighting, brittle connectors
**Focus On**:
- Operational relief: "Zero pipeline failures in production"
- Time savings: "50% reduction in data onboarding time"
- Technical implementation: "Deploy in 3 weeks"

**Example Prompt Addition**:
```
AUDIENCE: Data Engineering teams
PAIN POINT: Spending 40% of time firefighting pipelines
FOCUS: Operational stability, deployment speed, reduced toil
```

### CDO/VP Data Persona
**Pain Points**: Compliance gaps, data lineage, audit burden
**Focus On**:
- Governance: "Enforce policies at the edge"
- Data quality: "16× faster queries from cleaner data"
- Strategic value: AI-ready data

**Example Prompt Addition**:
```
AUDIENCE: Chief Data Officers
PAIN POINT: Compliance gaps, lack of data lineage
FOCUS: Governance, data quality, strategic positioning
```

### CTO/Executive Persona
**Pain Points**: Team scaling, AI/ML blockers, risk
**Focus On**:
- Time to value: "3 weeks shadow mode to production"
- Risk reduction: "No changes to existing pipelines"
- Business impact: "Enable AI initiatives"

**Example Prompt Addition**:
```
AUDIENCE: CTO/Executive leadership
PAIN POINT: Cannot scale teams fast enough, AI initiatives blocked
FOCUS: Strategic value, risk mitigation, business enablement
```

## Context-Specific Guidance

### For Investor/Board Decks
- Lead with outcomes and traction metrics
- Minimize technical detail
- Focus on market opportunity
- Use outcome-driven three-pillar framework
- **Suggested positioning**: "Filter Data at the Source"

**Prompt Modifier**:
```
CONTEXT: Investor pitch deck
STYLE: High-level, outcome-focused
AVOID: Technical implementation details
EMPHASIZE: Market opportunity, traction (customers, revenue), competitive positioning
```

### For Technical/Customer Decks
- Lead with problem and spatial positioning
- Show architecture diagrams
- Include technical proof points
- Use "Process Data Where It Lives" positioning
- Explain implementation details

**Prompt Modifier**:
```
CONTEXT: Technical customer presentation
STYLE: Architecture-focused, implementation details
INCLUDE: Diagrams, integration points, deployment process
EMPHASIZE: How it works, technical benefits, compatibility
```

### For Sales Presentations
- Lead with customer pain point
- Include customer logos and testimonials
- Focus on ROI and time-to-value
- Use three-pillar framework to address multiple buyers
- Show before/after contrast

**Prompt Modifier**:
```
CONTEXT: Sales presentation
STYLE: Customer-focused, ROI-driven
INCLUDE: Customer proof points, case studies, ROI calculations
EMPHASIZE: Pain → Solution → Proof → CTA
```

### For Conference Talks
- Lead with provocative problem statement
- Use contrarian or attention-grabbing voice
- Include more visuals, less text
- Consider bold positioning like "Stop Moving Garbage Data"
- Make it memorable and shareable

**Prompt Modifier**:
```
CONTEXT: Conference keynote (20-minute slot)
STYLE: Provocative, visual-heavy, memorable
INCLUDE: Bold statements, visual metaphors, audience participation
EMPHASIZE: One big idea that's shareable and memorable
```

## Complete Metrics Library

Use these EXACT metrics from approved customer case studies:

### Cost Reduction
- **50-70%** data volume reduction
- **$1.77M** annual savings (Fortune 500 retail)
- **58%** cost reduction (combined Snowflake + Datadog)
- **88%** reduction in cloud egress costs
- **Storage**: $83/TB centralized → $35/TB distributed

### Performance & Velocity
- **16×** faster queries (due to cleaner data)
- **50%** reduction in data onboarding time
- **<30 seconds** to propagate updates across 10,000+ nodes
- **Zero** pipeline failures in production environments

### Time to Value
- **3 weeks** deployment time (shadow mode → production)
- **2.5 months** payback period (full ROI realized)

### Scale
- **10,000+** nodes managed
- **Petabyte-scale** data volumes

**NEVER say**: "significant savings", "dramatic improvement", "substantial reduction"
**ALWAYS use**: Specific numbers with context

## Advanced Prompt Engineering

### Multi-Persona Slide Prompt

If creating a slide that must work for multiple audiences:

```
Generate a slide that addresses BOTH CFO and Engineering personas:

PRIMARY AUDIENCE: CFO/FinOps (60% weight)
SECONDARY AUDIENCE: Data Engineers (40% weight)

HEADLINE: Lead with cost savings (CFO focus)
METRICS:
  - Primary: $1.77M annual savings (large, 144pt, cyan)
  - Secondary: Zero pipeline failures (smaller, 36pt, below)

STRUCTURE:
  - Top half: CFO value (cost reduction)
  - Bottom half: Engineering value (operational stability)

AVOID: Making it feel like two separate slides
ENSURE: Single cohesive message with layered benefits
```

### Variation Generation

Generate multiple options for A/B testing:

```
Generate THREE variations of the same slide concept:

SLIDE CONCEPT: Expanso reduces cloud costs

VARIATION A: Typography-Driven
  - Massive "50-70%" number (144pt, cyan)
  - Minimal supporting text
  - 75%+ whitespace
  - Bold, confident aesthetic

VARIATION B: Diagram-Driven
  - Visual flow: 100% data → Expanso filter → 30-50% data
  - Medium-sized metrics integrated into flow
  - 65% whitespace
  - Educational, explanatory aesthetic

VARIATION C: Proof-Driven
  - Customer logo + testimonial quote
  - "58%" metric with company context
  - Before/after cost comparison
  - 60% whitespace
  - Credible, evidence-based aesthetic

For each variation, provide complete HTML <section> element.
```

## Brand Voice & Messaging Checklist

Before finalizing any slide, verify against these rules:

### ✅ ALWAYS Do:
- [ ] Lead with measurable outcomes (specific percentages, dollar amounts)
- [ ] Use active imperative verbs (Cut, Filter, Deploy, Control, Accelerate, Enable)
- [ ] Say "at the source" or "where data lives" (spatial positioning)
- [ ] Name specific platforms (Snowflake, Databricks, Splunk, Datadog)
- [ ] Show before/after contrast
- [ ] Provide proof immediately after claims
- [ ] Use sentence fragments for emphasis ("High-value data only. Faster queries.")

### ❌ NEVER Do:
- [ ] Use "upstream" (too technical, requires explanation)
- [ ] Use vague claims ("innovative", "best-in-class", "revolutionary", "next-generation")
- [ ] Bury metrics ("significant cost reduction" → use "58% reduction")
- [ ] Use passive voice for benefits ("costs are reduced" → "Cut costs by 58%")
- [ ] Use jargon without context (if you must use "data gravity", define it immediately)
- [ ] Create villain narratives (don't attack Snowflake—position as complementary)
- [ ] Promise perfection (focus on dramatic improvement, not utopian outcomes)

## Resources

- **Brand Guidelines**: `LLM_EVERGREEN_PROMPT.md`
- **Reveal.js Docs**: https://revealjs.com/
- **10/20/30 Rule**: https://guykawasaki.com/the_102030_rule/
- **Inter Font**: https://fonts.google.com/specimen/Inter

---

**Last Updated**: October 28, 2024
**Maintained By**: David Aronchick (aronchick@expanso.io)
