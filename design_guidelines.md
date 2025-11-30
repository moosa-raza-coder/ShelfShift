# Design Guidelines: Wholesale Shelf Corps - Full Service Funding Solution

## Design Approach
**Reference-Based Strategy:** Drawing inspiration from premium financial services (Stripe, Brex, Ramp) combined with high-converting SaaS landing pages (Webflow, Framer). This creates trust, authority, and conversion optimization for a $5K+ premium offering.

## Core Design Principles
1. **Trust & Authority First:** Every design element reinforces credibility and professionalism
2. **Conversion-Optimized:** Clear visual hierarchy guiding users to "Schedule Strategy Call" CTA
3. **Premium Positioning:** Sophisticated aesthetics matching the high-ticket price point
4. **Urgency & Exclusivity:** Strategic scarcity indicators and social proof placement

## Typography System
**Primary Font:** Inter (via Google Fonts CDN) - clean, professional, excellent for financial services
**Secondary Font:** Space Grotesk (via Google Fonts CDN) - for headlines and emphasis

**Hierarchy:**
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold, Space Grotesk
- H2 (Section Headers): text-4xl md:text-5xl, font-bold, Space Grotesk
- H3 (Subsections): text-2xl md:text-3xl, font-semibold, Inter
- Body: text-base md:text-lg, Inter, leading-relaxed
- Small Text: text-sm, Inter
- CTA Buttons: text-lg font-semibold, Inter

## Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mb-12, py-20)

**Container Strategy:**
- Max-width sections: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Full-width sections for visual impact with inner containers
- Content areas: max-w-4xl for optimal readability

**Vertical Rhythm:**
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: space-y-8 to space-y-12
- Card/element gaps: gap-6 md:gap-8

## Component Library

### Navigation
- Fixed top bar with contact info (text-sm, subtle background)
- Sticky main navigation below with logo left, links center, "Schedule Call" CTA right
- Hamburger menu on mobile with slide-out drawer

### Hero Section (Section 1)
- Two-column layout (60/40 split on desktop, stacked mobile)
- Left: Headline, subheadline, 4 quick benefit bullets with checkmark icons, primary CTA, small trust text
- Right: VSL card with thumbnail, play button overlay, blurred background for "Watch Now" button
- Quick Info Box beneath with 3 numbered items
- Background: subtle gradient or minimal geometric pattern

### Trust Logos (Section 2)
- Single row, 6 logos, grayscale with opacity-60, hover:opacity-100 transition
- Centered alignment with even spacing

### Process Steps (Section 3)
- Three large numbered cards in grid (grid-cols-1 md:grid-cols-3)
- Each card: large number badge, heading, icon, description, subtle hover lift effect
- Connecting lines/arrows between cards on desktop

### Comparison Tables (Section 5)
- Side-by-side two-column comparison
- Left column (negative): muted background, X icons
- Right column (positive): accent background (subtle), checkmark icons
- Clear visual distinction between "bad" and "good"

### Value Stack (Section 6)
- Checklist layout with large checkmark icons
- Two columns on desktop (grid-cols-1 md:grid-cols-2)
- Each item: icon + text in card format
- Emphasis on "everything included" completeness

### Testimonials (Section 11)
- Three-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Star rating display, quote text, attribution
- Cards with subtle shadow and border

### Funding Calculator (Interactive)
- Modal/popup design with dark overlay
- Three input sliders: Corp Age, Credit Score, Number of Combos
- Live calculation display with animated number counter
- Email capture form to reveal/download results
- Visual: gauge or progress indicator showing funding potential

### Proposal Generator (Admin Tool)
- Multi-step form with progress indicator
- Left sidebar: form inputs (corp selection, tier options, discounts, deadlines)
- Right preview: live proposal preview updating as inputs change
- Toggle between HTML preview and PDF download
- Three-tier comparison table (Basic/Mid/Premium) with pricing

### Footer
- Three-column layout with ample spacing
- Column 1: Logo, tagline
- Column 2: Navigation links
- Column 3: Legal links, contact info
- Bottom bar: Copyright, social icons

## Interactive Elements

### Primary CTA Buttons
- Large, prominent with "Schedule Strategy Call" text
- Pill-shaped (rounded-full) or slightly rounded (rounded-lg)
- When on images/hero: backdrop-blur-lg bg-white/20 border border-white/30
- Standalone: solid background with strong contrast
- Hover: slight scale lift (scale-105) and brightness increase

### Secondary Buttons
- Outlined style with border
- Hover: filled background transition

### Exit-Intent Popup
- Triggered on exit behavior or after 30s
- Presents calculator or video option
- Dismissible with X but returns on next exit attempt

### Icons
Use Heroicons (via CDN) throughout:
- Checkmarks for benefits
- X marks for negatives  
- Phone, email, location for contact
- Play button for video
- Calculator icon for funding calculator

## Images

**Large Hero Image:** Yes - place a professional business handshake or modern office setting as background for hero section with overlay gradient for text readability

**Additional Images:**
- Testimonial section: Headshots for each testimonial (circular crop)
- "Who We Help" section: Icons or illustrations for each business type
- Trust/credibility section: Professional business imagery (office, handshakes, documents)
- Calculator popup: Background image suggesting financial growth (charts, upward trends)

**Image Treatment:** All images should have subtle overlay gradients when text appears on them, ensuring text remains readable

## Conversion Optimization Elements

### Scarcity Indicators
- Red/orange accent badge: "Only 4 Premium Aged Corporations Available This Week"
- Countdown timer for limited offers
- "X spots remaining" on calendar booking

### Trust Signals
- Large numbers/stats in dedicated section (Section 10)
- Five-star ratings throughout
- Bank/lender logos prominently displayed
- "Trusted by X entrepreneurs" social proof

### Visual Hierarchy for CTAs
- Primary CTA appears 5-7 times throughout page
- Size progression: Largest in hero, consistent throughout, final urgency CTA before footer
- Always paired with supporting microcopy explaining next step

## Responsive Behavior
- Hero: Stacked on mobile, side-by-side on tablet+
- All multi-column grids: Single column mobile, 2-col tablet, 3-col desktop
- Navigation: Hamburger menu on mobile
- Calculator: Full-screen modal on mobile, centered modal on desktop
- Font sizes scale down appropriately on mobile (text-4xl becomes text-3xl, etc.)

This design creates a premium, trustworthy, conversion-focused experience that matches the high-ticket nature of the offering while maintaining clarity and usability.