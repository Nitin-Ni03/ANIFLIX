# ANIFLIX Frontend: Tailwind CSS Reference Guide

This reference guide documents **every unique Tailwind CSS class and modifier state** utilized in the ANIFLIX frontend codebase. Classes are sorted alphabetically, followed by responsive breakpoints and state modifier documentation.

---

## Tailwind CSS Classes Reference (A–Z)

### Symbol / Numeric Classes

- **`-mr-2`** (`margin-right: -0.5rem` / `-8px`)
  - **Use Case:** Applied to the mobile menu hamburger button in the navigation header to offset it slightly to the right, aligning the icon boundaries flush with the page container boundaries.

---

### A

- **`absolute`** (`position: absolute`)
  - **Use Case:** Positions elements absolutely relative to their nearest positioned ancestor. Used for image gradient masks, hover details overlays, FAQ panel indicator positions, and modal popups.
- **`active:bg-orange-700`** (CSS `:active` state background color)
  - **Use Case:** Darkens primary buttons when active (being clicked or touched) to provide immediate tactile feedback.
- **`active:scale-[0.98]`** (CSS `:active` state transform scale)
  - **Use Case:** Shrinks action buttons slightly upon clicking to mimic a physical button press.
- **`aspect-[21/9]`** (`aspect-ratio: 21 / 9`)
  - **Use Case:** Applied to the widescreen highlight banner on the About page to maintain cinematic proportions across different screen widths.
- **`aspect-[3/4]`** (`aspect-ratio: 3 / 4`)
  - **Use Case:** Applied to anime poster thumbnail cards to ensure they are rendered in standard portrait proportions.

---

### B

- **`backdrop-blur-md`** (`backdrop-filter: blur(12px)`)
  - **Use Case:** Applied to the fixed Navigation Bar background to create a translucent glass backdrop effect over scrolling page content.
- **`bg-cover`** (`background-size: cover`)
  - **Use Case:** Scales background banner images to cover their container boundaries completely without stretching.
- **`bg-emerald-500/15`** (`rgba(16, 185, 129, 0.15)` background fill)
  - **Use Case:** Fills the backing box for successful verification messages with a soft green color.
- **`bg-gradient-to-r`** (`linear-gradient(to right, ...)`)
  - **Use Case:** Creates a horizontal linear color gradient fade.
- **`bg-gradient-to-t`** (`linear-gradient(to top, ...)`)
  - **Use Case:** Creates a vertical gradient overlay fading upwards on card posters to improve the readability of overlaid title texts.
- **`bg-orange-500`** (`background-color: #f97316`)
  - **Use Case:** Brand primary color used on primary Call-to-Action (CTA) buttons.
- **`bg-orange-500/10`** (`rgba(249, 115, 22, 0.1)` background fill)
  - **Use Case:** Creates a subtle branded background behind category badges and SVG feature icons.
- **`bg-orange-500/5`** (`rgba(249, 115, 22, 0.05)` background fill)
  - **Use Case:** Soft background highlight for active mobile menu items.
- **`bg-orange-600/20`** (`rgba(234, 88, 12, 0.2)` background fill)
  - **Use Case:** Backing highlight for streaming status tags.
- **`bg-red-500/15`** (`rgba(239, 68, 68, 0.15)` background fill)
  - **Use Case:** Fills the background of validation error alerts.
- **`bg-slate-900`** (`background-color: #0f172a`)
  - **Use Case:** Primary card, dialog panel, text input, and accordion panel background color.
- **`bg-slate-900/40`** (`rgba(15, 23, 42, 0.4)` background fill)
  - **Use Case:** Semi-transparent panels for structural list details.
- **`bg-slate-900/60`** (`rgba(15, 23, 42, 0.6)` background fill)
  - **Use Case:** Soft transparent panel backdrop for the login/register card frame.
- **`bg-slate-900/80`** (`rgba(15, 23, 42, 0.8)` background fill)
  - **Use Case:** Backing color for input fields to keep them readable over background banners.
- **`bg-slate-900/90`** (`rgba(15, 23, 42, 0.9)` background fill)
  - **Use Case:** Card fallback details container background.
- **`bg-slate-900/95`** (`rgba(15, 23, 42, 0.95)` background fill)
  - **Use Case:** Overlay screen backdrop for registration status success popups.
- **`bg-slate-950`** (`background-color: #020617`)
  - **Use Case:** The main background color of the application.
- **`bg-slate-950/40`** (`rgba(2, 6, 23, 0.4)` background fill)
  - **Use Case:** Applied over background images to darken them and improve text contrast.
- **`bg-slate-950/50`** (`rgba(2, 6, 23, 0.5)` background fill)
  - **Use Case:** Used on alternating layouts to visually separate sections.
- **`bg-slate-950/80`** (`rgba(2, 6, 23, 0.8)` background fill)
  - **Use Case:** Base color of navigation header panels.
- **`block`** (`display: block`)
  - **Use Case:** Forces elements to stack vertically and fill horizontal space.
- **`border`** (`border-width: 1px`)
  - **Use Case:** Draws standard border borders around input fields and content cards.
- **`border-b`** (`border-bottom-width: 1px`)
  - **Use Case:** Draws a divider line at the bottom of navigation bars and layout sections.
- **`border-b-2`** (`border-bottom-width: 2px`)
  - **Use Case:** Underline indicator thickness for active navigation tabs on desktop.
- **`border-emerald-500/30`** (`border-color: rgba(16, 185, 129, 0.3)`)
  - **Use Case:** Border outline for warning/success frames.
- **`border-l-4`** (`border-left-width: 4px`)
  - **Use Case:** Side border color indicator for active mobile navbar tabs.
- **`border-orange-500`** (`border-color: #f97316`)
  - **Use Case:** Primary focus border color for active fields.
- **`border-orange-500/10`** (`border-color: rgba(249, 115, 22, 0.1)`)
  - **Use Case:** Soft border highlights on homepage badges.
- **`border-orange-500/30`** (`border-color: rgba(249, 115, 22, 0.3)`)
  - **Use Case:** Soft border highlights on banner tags.
- **`border-red-500/30`** (`border-color: rgba(239, 68, 68, 0.3)`)
  - **Use Case:** Highlight border color around verification error panels.
- **`border-slate-700`** (`border-color: #334155`)
  - **Use Case:** Default gray border for user input text fields.
- **`border-slate-800`** (`border-color: #1e293b`)
  - **Use Case:** Subtle border dividers for panels and modules.
- **`border-slate-800/40`** (`border-color: rgba(30, 41, 59, 0.4)`)
  - **Use Case:** Soft border highlights on card containers.
- **`border-slate-800/60`** (`border-color: rgba(30, 41, 59, 0.6)`)
  - **Use Case:** Soft borders for grid showcase columns.
- **`border-slate-800/80`** (`border-color: rgba(30, 41, 59, 0.8)`)
  - **Use Case:** Frame borders around accordion items.
- **`border-slate-900`** (`border-color: #0f172a`)
  - **Use Case:** Section divider borders.
- **`border-t`** (`border-top-width: 1px`)
  - **Use Case:** Border line at the top of structural blocks (like footer or expanded accordion answers).
- **`border-transparent`** (`border-color: transparent`)
  - **Use Case:** Applied to inactive tabs to reserve spacing and prevent layouts from jumping when toggling focus.

---

### C

- **`cursor-pointer`** (`cursor: pointer`)
  - **Use Case:** Instructs the browser to render a pointer cursor when mouse-hovering over interactive cards, tabs, and details panels.

---

### D

- **`duration-300`** (`transition-duration: 300ms`)
  - **Use Case:** Transition duration for state transitions (hover highlights, opacity transitions).
- **`duration-500`** (`transition-duration: 500ms`)
  - **Use Case:** Slower transition duration for animations like image zooming.

---

### E

- **`ease-in-out`** (`transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`)
  - **Use Case:** Standard timing curve for responsive animations (starts fast, slows down gradually).

---

### F

- **`fixed`** (`position: fixed`)
  - **Use Case:** Fixes layout containers (e.g. navigation header bar) to the top of the screen during scrolling.
- **`flex`** (`display: flex`)
  - **Use Case:** Enables flexbox layout for child elements positioning.
- **`flex-col`** (`flex-direction: column`)
  - **Use Case:** Arranges children elements vertically inside a flexbox grid container.
- **`flex-grow`** (`flex-grow: 1`)
  - **Use Case:** Allows containers (like `<main>`) to expand and fill leftover viewport height, keeping footer components bottom-aligned.
- **`flex-shrink-0`** (`flex-shrink: 0`)
  - **Use Case:** Prevents important structural components (like brand logos and navigation chevrons) from shrinking on small viewport widths.
- **`focus:border-orange-500`** (CSS `:focus` border color)
  - **Use Case:** Displays an orange border ring when the user selects or types inside text field elements.
- **`focus:outline-none`** (CSS `:focus` outline reset)
  - **Use Case:** Hides default browser focus rings to allow custom ring styling.
- **`focus:ring-2`** (CSS `:focus` outline drop shadow ring)
  - **Use Case:** Adds a drop shadow ring around focused inputs to improve contrast.
- **`focus:ring-orange-500/30`** (CSS `:focus` outline color)
  - **Use Case:** Displays a soft branded orange halo around focused inputs.
- **`font-bold`** (`font-weight: 700`)
  - **Use Case:** Emphasizes section subheadings and card details.
- **`font-extrabold`** (`font-weight: 800`)
  - **Use Case:** Styled font weight for main page titles and brand tags.
- **`font-medium`** (`font-weight: 500`)
  - **Use Case:** Applied to descriptive text blocks and badges for clean readability.
- **`font-sans`** (default system sans-serif family stack)
  - **Use Case:** Sets clean sans-serif typography throughout the app.
- **`font-semibold`** (`font-weight: 600`)
  - **Use Case:** Text formatting for subheadings, buttons, and navigation bar tabs.
- **`from-orange-600/30`** (gradient starting color)
  - **Use Case:** Sets starting colors for horizontal layout highlights.
- **`from-slate-950`** (gradient starting color)
  - **Use Case:** Solid base starting shade for dark layout fades.

---

### G

- **`gap-0.5`** (`gap: 0.125rem` / `2px`)
  - **Use Case:** Separation distance between card score badges and metadata values.
- **`gap-10`** (`gap: 2.5rem` / `40px`)
  - **Use Case:** Horizontal and vertical separation space inside footer columns grids.
- **`gap-2`** (`gap: 0.5rem` / `8px`)
  - **Use Case:** Distance between badge elements.
- **`gap-3`** (`gap: 0.75rem` / `12px`)
  - **Use Case:** Spaces elements in horizontal forms.
- **`gap-4`** (`gap: 1rem` / `16px`)
  - **Use Case:** Spaces elements inside content card columns.
- **`gap-8`** (`gap: 2rem` / `32px`)
  - **Use Case:** Standard separation distance inside page layout grids.
- **`grid`** (`display: grid`)
  - **Use Case:** Grid layout engine for row and column alignment.
- **`grid-cols-1`** (`grid-template-columns: repeat(1, minmax(0, 1fr))`)
  - **Use Case:** Base column grid for mobile viewports.
- **`grid-cols-2`** (`grid-template-columns: repeat(2, minmax(0, 1fr))`)
  - **Use Case:** Column layout for tablet grids and footer content sheets.
- **`group`** (Tailwind CSS parent listener class)
  - **Use Case:** Placed on container cards to allow children elements (like overlay text and image properties) to animate when the parent is hovered.
- **`group-hover:hidden`** (Conditional hover display reset)
  - **Use Case:** Hides static info labels when the user hovers over an anime card.
- **`group-hover:opacity-100`** (Conditional hover opacity change)
  - **Use Case:** Fades in rating information overlays when hovering cards.
- **`group-hover:scale-105`** (Conditional hover transformation scale)
  - **Use Case:** Slightly scales image posters on hover to create a zoom effect.

---

### H

- **`h-12`** (`height: 3rem` / `48px`)
  - **Use Case:** Height constraint for feature badges and icons.
- **`h-16`** (`height: 4rem` / `64px`)
  - **Use Case:** Height limit for the navigation bar.
- **`h-5`** (`height: 1.25rem` / `20px`)
  - **Use Case:** Restricts sizes for minor vector icons.
- **`h-6`** (`height: 1.5rem` / `24px`)
  - **Use Case:** Height constraint for header navigation bars and panels.
- **`h-[90vh]`** (`height: 90vh` / 90% of screen height)
  - **Use Case:** Widescreen height constraint for main hero background cards.
- **`h-full`** (`height: 100%`)
  - **Use Case:** Forces images and gradients to completely fill their parent cards.
- **`hidden`** (`display: none`)
  - **Use Case:** Hides elements (like desktop menus on mobile screens).
- **`hover:-translate-y-1.5`** (CSS hover translation shift)
  - **Use Case:** Moves anime posters slightly upwards on hover to create a floating hover animation.
- **`hover:bg-orange-600`** (CSS hover background color)
  - **Use Case:** Fades button orange background fills to a darker orange on hover.
- **`hover:bg-slate-800/50`** (CSS hover background opacity)
  - **Use Case:** Highlights accordion headers with a soft backing on hover.
- **`hover:border-orange-500/40`** (CSS hover border outline color)
  - **Use Case:** Highlights card border frames on hover.
- **`hover:border-slate-700`** (CSS hover border color)
  - **Use Case:** Highlights page link borders on hover.
- **`hover:border-slate-800`** (CSS hover border color)
  - **Use Case:** Highlights feature container outlines on hover.
- **`hover:shadow-orange-500/20`** (CSS hover drop shadow)
  - **Use Case:** Adds a subtle orange glow behind active buttons on hover.
- **`hover:text-orange-500`** (CSS hover text color)
  - **Use Case:** Changes link text to brand orange on hover.
- **`hover:text-white`** (CSS hover text color)
  - **Use Case:** Brightens gray text links to white on hover.
- **`hover:underline`** (CSS hover text decoration)
  - **Use Case:** Underlines text links on hover.

---

### I

- **`inline-block`** (`display: inline-block`)
  - **Use Case:** Keeps elements inline with text flows while allowing standard width/height and padding properties.
- **`inline-flex`** (`display: inline-flex`)
  - **Use Case:** Inline block containing flexbox properties, useful for centering icon badges.
- **`inset-0`** (`top: 0; right: 0; bottom: 0; left: 0;`)
  - **Use Case:** Aligns overlay layers to parent edges.
- **`items-center`** (`align-items: center`)
  - **Use Case:** Centers child elements vertically along the cross-axis.

---

### J

- **`justify-between`** (`justify-content: space-between`)
  - **Use Case:** Distributes child items along the main axis with space between them (e.g. left logo, right desktop links).
- **`justify-center`** (`justify-content: center`)
  - **Use Case:** Centers child elements horizontally along the main axis.
- **`justify-end`** (`justify-content: flex-end`)
  - **Use Case:** Aligns details and text properties to the right edge.

---

### L

- **`leading-relaxed`** (`line-height: 1.625`)
  - **Use Case:** Adjusts paragraphs spacing to prevent text crowding and improve legibility.
- **`leading-tight`** (`line-height: 1.25`)
  - **Use Case:** Prevents multi-line header text blocks from overlapping.
- **`left-0`** (`left: 0`)
  - **Use Case:** Aligns absolutely-positioned overlay panels to the left edge.
- **`line-clamp-1`** (`display: -webkit-box; -webkit-line-clamp: 1; ...`)
  - **Use Case:** Restricts title lines to one line with trailing ellipses to keep card sizes uniform.

---

### M

- **`max-h-0`** (`max-height: 0px`)
  - **Use Case:** Collapses FAQ accordion blocks out of view.
- **`max-h-60`** (`max-height: 15rem` / `240px`)
  - **Use Case:** Sets accordion limits, enabling smooth CSS height transitions when expanding.
- **`max-w-2xl`** (`max-width: 42rem` / `672px`)
  - **Use Case:** Prevents line-wrapping issues on section subheads.
- **`max-w-4xl`** (`max-width: 56rem` / `896px`)
  - **Use Case:** Keeps information widgets readable.
- **`max-w-7xl`** (`max-width: 80rem` / `1280px`)
  - **Use Case:** Restricts layout containers to a standard widescreen desktop width.
- **`max-w-[280px]`** (`max-width: 280px`)
  - **Use Case:** Keeps legal notice lines clean on the login screen.
- **`max-w-lg`** (`max-width: 32rem` / `512px`)
  - **Use Case:** Restricts text panels on About pages.
- **`max-w-md`** (`max-width: 28rem` / `448px`)
  - **Use Case:** Keeps form card modules aligned.
- **`max-w-sm`** (`max-width: 24rem` / `384px`)
  - **Use Case:** Wraps descriptions in footer fields cleanly.
- **`max-w-xl`** (`max-width: 36rem` / `576px`)
  - **Use Case:** Restricts input rows on signup pages.
- **`max-w-xs`** (`max-width: 20rem` / `320px`)
  - **Use Case:** Controls warning card dimensions.
- **`mb-10`** (`margin-bottom: 2.5rem` / `40px`)
  - **Use Case:** Spaces headings away from lists.
- **`mb-12`** (`margin-bottom: 3rem` / `48px`)
  - **Use Case:** Separates structural blocks.
- **`mb-2`** (`margin-bottom: 0.5rem` / `8px`)
  - **Use Case:** Spaces label highlights from titles.
- **`mb-4`** (`margin-bottom: 1rem` / `16px`)
  - **Use Case:** Spaces element rows.
- **`min-h-screen`** (`min-height: 100vh`)
  - **Use Case:** Expands background panels to fill at least the full height of the viewport.
- **`mt-0.5`** (`margin-top: 0.125rem` / `2px`)
  - **Use Case:** Micro-spaces layout fields.
- **`mt-1`** (`margin-top: 0.25rem` / `4px`)
  - **Use Case:** Spaces descriptions underneath titles.
- **`mt-4`** (`margin-top: 1rem` / `16px`)
  - **Use Case:** Separates form inputs from CTA buttons.
- **`mt-6`** (`margin-top: 1.5rem` / `24px`)
  - **Use Case:** Spaces primary fields from social widgets.
- **`mx-auto`** (`margin-left: auto; margin-right: auto;`)
  - **Use Case:** Centers block elements horizontally.

---

### O

- **`object-cover`** (`object-fit: cover`)
  - **Use Case:** Fits image fields within defined spaces while preserving aspect ratios.
- **`opacity-0`** (`opacity: 0`)
  - **Use Case:** Hides absolute detail lists on cards until the user hovers over them.
- **`outline-none`** (`outline: 2px solid transparent; outline-offset: 2px;`)
  - **Use Case:** Resets default browser outline glows for input elements.
- **`overflow-hidden`** (`overflow: hidden`)
  - **Use Case:** Prevents images from bleeding past card borders and keeps rounded corners clean.

---

### P

- **`p-2`** (`padding: 0.5rem` / `8px`)
  - **Use Case:** Spaces mobile hamburger buttons.
- **`p-3`** (`padding: 0.75rem` / `12px`)
  - **Use Case:** Spaces internal contents on cards.
- **`p-3.5`** (`padding: 0.875rem` / `14px`)
  - **Use Case:** Spaces error display text boxes.
- **`p-6`** (`padding: 1.5rem` / `24px`)
  - **Use Case:** Spaces card containers.
- **`p-8`** (`padding: 2rem` / `32px`)
  - **Use Case:** Spaces login card containers.
- **`pb-12`** (`padding-bottom: 3rem` / `48px`)
  - **Use Case:** Structural spacing.
- **`pb-16`** (`padding-bottom: 4rem` / `64px`)
  - **Use Case:** Bottom padding for scrollable views.
- **`pb-2`** (`padding-bottom: 0.5rem` / `8px`)
  - **Use Case:** Spaces layouts.
- **`pb-4`** (`padding-bottom: 1rem` / `16px`)
  - **Use Case:** Bottom padding for mobile navbar items.
- **`pb-8`** (`padding-bottom: 2rem` / `32px`)
  - **Use Case:** Spaces bottom elements.
- **`pl-3`** (`padding-left: 0.75rem` / `12px`)
  - **Use Case:** Offsets left alignment points.
- **`placeholder-slate-400`** (`color: #94a3b8` inside placeholders)
  - **Use Case:** Muted color for email/password placeholder fields.
- **`placeholder-slate-500`** (`color: #64748b` inside placeholders)
  - **Use Case:** Standard gray color for placeholders.
- **`pr-4`** (`padding-right: 1rem` / `16px`)
  - **Use Case:** Offsets right boundaries.
- **`pt-1`** (`padding-top: 0.25rem` / `4px`)
  - **Use Case:** Offsets vertical lines.
- **`pt-12`** (`padding-top: 3rem` / `48px`)
  - **Use Case:** Top spacing.
- **`pt-16`** (`padding-top: 4rem` / `64px`)
  - **Use Case:** Offsets elements below the fixed header bar.
- **`pt-2`** (`padding-top: 0.5rem` / `8px`)
  - **Use Case:** Offsets elements.
- **`pt-28`** (`padding-top: 7rem` / `112px`)
  - **Use Case:** Structural offset on content pages to start layout paths below the fixed header.
- **`pt-4`** (`padding-top: 1rem` / `16px`)
  - **Use Case:** Top spacing.
- **`pt-8`** (`padding-top: 2rem` / `32px`)
  - **Use Case:** Top spacing.
- **`px-1`** (`padding-left/right: 0.25rem` / `4px`)
  - **Use Case:** Horizontal padding.
- **`px-3`** (`padding-left/right: 0.75rem` / `12px`)
  - **Use Case:** Horizontal padding.
- **`px-4`** (`padding-left/right: 1rem` / `16px`)
  - **Use Case:** Base horizontal alignment padding for mobile views.
- **`px-5`** (`padding-left/right: 1.25rem` / `20px`)
  - **Use Case:** Standard horizontal spacing.
- **`px-6`** (`padding-left/right: 1.5rem` / `24px`)
  - **Use Case:** Standard horizontal spacing.
- **`px-8`** (`padding-left/right: 2rem` / `32px`)
  - **Use Case:** Horizontal padding for buttons.
- **`py-1`** (`padding-top/bottom: 0.25rem` / `4px`)
  - **Use Case:** Vertical spacing.
- **`py-1.5`** (`padding-top/bottom: 0.375rem` / `6px`)
  - **Use Case:** Vertical padding for badge tags.
- **`py-16`** (`padding-top/bottom: 4rem` / `64px`)
  - **Use Case:** Large structural padding.
- **`py-2`** (`padding-top/bottom: 0.5rem` / `8px`)
  - **Use Case:** Vertical spacing.
- **`py-2.5`** (`padding-top/bottom: 0.625rem` / `10px`)
  - **Use Case:** Vertical spacing.
- **`py-3`** (`padding-top/bottom: 0.75rem` / `12px`)
  - **Use Case:** Vertical spacing.
- **`py-3.5`** (`padding-top/bottom: 0.875rem` / `14px`)
  - **Use Case:** Vertical spacing.
- **`py-4`** (`padding-top/bottom: 1rem` / `16px`)
  - **Use Case:** Vertical spacing.
- **`py-5`** (`padding-top/bottom: 1.25rem` / `20px`)
  - **Use Case:** Vertical spacing.

---

### R

- **`relative`** (`position: relative`)
  - **Use Case:** Anchors child elements styled with absolute positioning (e.g. badge overlays).
- **`resize-none`** (`resize: none`)
  - **Use Case:** Prevents manual resize behaviors on textareas to keep grid structures aligned.
- **`rotate-45`** (`transform: rotate(45deg)`)
  - **Use Case:** Rotates FAQ indicator symbols from `+` (plus) to `x` (close shape) when active.
- **`rounded`** (`border-radius: 0.25rem` / `4px`)
  - **Use Case:** Rounds small badge pill edges.
- **`rounded-2xl`** (`border-radius: 1rem` / `16px`)
  - **Use Case:** Rounds outer borders of layout lists and panels.
- **`rounded-3xl`** (`border-radius: 1.5rem` / `24px`)
  - **Use Case:** Rounds main form card components.
- **`rounded-full`** (`border-radius: 9999px`)
  - **Use Case:** Creates badges, buttons, and round icon layouts.
- **`rounded-xl`** (`border-radius: 0.75rem` / `12px`)
  - **Use Case:** Rounds input tags and poster cards.

---

### S

- **`shadow-2xl`** (`box-shadow: large deep drop shadow`)
  - **Use Case:** Gives dialog cards a premium floating overlay visual style.
- **`shadow-lg`** (`box-shadow: medium drop shadow`)
  - **Use Case:** Adds standard depth below primary action buttons.
- **`shadow-md`** (`box-shadow: subtle card shadow`)
  - **Use Case:** Adds subtle depth below card items.
- **`space-x-6`** (`margin-left: 1.5rem` / `24px` on sibling children)
  - **Use Case:** Spacing between inline horizontal text elements.
- **`space-y-1`** (`margin-top: 0.25rem` / `4px` on sibling children)
  - **Use Case:** Spaces elements vertically.
- **`space-y-12`** (`margin-top: 3rem` / `48px` on sibling children)
  - **Use Case:** Spaces structural layout modules vertically.
- **`space-y-2`** (`margin-top: 0.5rem` / `8px` on sibling children)
  - **Use Case:** Spaces detail rows vertically.
- **`space-y-3`** (`margin-top: 0.75rem` / `12px` on sibling children)
  - **Use Case:** Spaces details columns.
- **`space-y-4`** (`margin-top: 1rem` / `16px` on sibling children)
  - **Use Case:** Spaces form elements vertically.
- **`space-y-6`** (`margin-top: 1.5rem` / `24px` on sibling children)
  - **Use Case:** Spaces form modules.
- **`sr-only`** (Screen Reader Only accessibility block)
  - **Use Case:** Hides elements visually but leaves them readable for screen readers.

---

### T

- **`text-2xl`** (`font-size: 1.5rem` / `24px`)
  - **Use Case:** Font size for titles.
- **`text-3xl`** (`font-size: 1.875rem` / `30px`)
  - **Use Case:** Font size for section headings.
- **`text-4xl`** (`font-size: 2.25rem` / `36px`)
  - **Use Case:** Font size for main section headlines.
- **`text-[10px]`** (`font-size: 10px`)
  - **Use Case:** Font size for sub-instructions inside cards.
- **`text-[11px]`** (`font-size: 11px`)
  - **Use Case:** Font size for thumbnail card details.
- **`text-[9px]`** (`font-size: 9px`)
  - **Use Case:** Font size for rating numbers.
- **`text-base`** (`font-size: 1rem` / `16px`)
  - **Use Case:** Standard readable paragraph font size.
- **`text-center`** (`text-align: center`)
  - **Use Case:** Centers text.
- **`text-emerald-400`** (`color: #34d399`)
  - **Use Case:** Text color for successful login messages.
- **`text-left`** (`text-align: left`)
  - **Use Case:** Left-aligns accordion headers.
- **`text-lg`** (`font-size: 1.125rem` / `18px`)
  - **Use Case:** Font size for introductions.
- **`text-orange-400`** (`color: #fb923c`)
  - **Use Case:** Text color for category badges.
- **`text-orange-500`** (`color: #f97316`)
  - **Use Case:** Text color for active icons and titles.
- **`text-red-400`** (`color: #f87171`)
  - **Use Case:** Text color for validation warnings.
- **`text-slate-200`** (`color: #e2e8f0`)
  - **Use Case:** High-contrast text color for sub-subheads.
- **`text-slate-300`** (`color: #cbd5e1`)
  - **Use Case:** Text color for readable body paragraphs.
- **`text-slate-400`** (`color: #94a3b8`)
  - **Use Case:** Text color for labels.
- **`text-slate-500`** (`color: #64748b`)
  - **Use Case:** Text color for copyright labels.
- **`text-sm`** (`font-size: 0.875rem` / `14px`)
  - **Use Case:** Font size for paragraphs.
- **`text-white`** (`color: #ffffff`)
  - **Use Case:** Bright white color for maximum title text contrast.
- **`text-xl`** (`font-size: 1.25rem` / `20px`)
  - **Use Case:** Font size for logos.
- **`text-xs`** (`font-size: 0.75rem` / `12px`)
  - **Use Case:** Font size for labels and tags.
- **`to-slate-950/90`** (gradient end color)
  - **Use Case:** Dark end color for gradient overlays.
- **`to-transparent`** (gradient end color)
  - **Use Case:** Fades gradients out completely.
- **`top-0`** (`top: 0`)
  - **Use Case:** Pins overlay headers to the top.
- **`tracking-tight`** (`letter-spacing: -0.025em`)
  - **Use Case:** Professional kerning configuration for heading texts.
- **`tracking-wider`** (`letter-spacing: 0.05em`)
  - **Use Case:** Spreads letters slightly on tags/categories.
- **`transition-all`** (CSS property transitions)
  - **Use Case:** Fades size, layout, and position changes smoothly.
- **`transition-colors`** (CSS color transitions)
  - **Use Case:** Animates text and background color changes (e.g. on active items).
- **`transition-opacity`** (CSS opacity transitions)
  - **Use Case:** Animates fades (e.g. active overlay lists).
- **`transition-transform`** (CSS transform transitions)
  - **Use Case:** Animates hover movement offsets.
- **`truncate`** (`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`)
  - **Use Case:** Clamps single-line titles with ellipses if too long.

---

### U

- **`uppercase`** (`text-transform: uppercase`)
  - **Use Case:** Renders text in uppercase (e.g. genres and category tags).

---

### V

- **`via-slate-950/20`** (gradient mid color)
  - **Use Case:** Mid-point blend configuration for poster gradient shades.

---

### W

- **`w-12`** (`width: 3rem` / `48px`)
  - **Use Case:** Horizontal dimension configuration for category circles.
- **`w-5`** (`width: 1.25rem` / `20px`)
  - **Use Case:** Horizontal dimension for search icons.
- **`w-6`** (`width: 1.5rem` / `24px`)
  - **Use Case:** Horizontal dimension for hamburger menu layouts.
- **`w-full`** (`width: 100%`)
  - **Use Case:** Forces components to stretch across their container columns.
- **`whitespace-nowrap`** (`white-space: nowrap`)
  - **Use Case:** Keeps category tags from splitting into multiple lines.

---

### Z

- **`z-0`** (`z-index: 0`)
  - **Use Case:** Lower layer configuration.
- **`z-10`** (`z-index: 10`)
  - **Use Case:** Mid-layer layout ordering.
- **`z-50`** (`z-index: 50`)
  - **Use Case:** Keeps fixed elements (like navigation bars) floating on top of all other elements.

---

## Responsive Breakpoint Modifiers

These prefixes apply layout rules only above specific screen widths:

- **`sm:`** (Minimum screen width `640px` — Mobile Landscape / Tablet vertical)
  - _Examples:_ `sm:text-3xl`, `sm:grid-cols-3`
- **`md:`** (Minimum screen width `768px` — Tablet Landscape)
  - _Examples:_ `md:flex`, `md:grid-cols-3`
- **`lg:`** (Minimum screen width `1024px` — Large Tablet / Desktop)
  - _Examples:_ `lg:px-8`, `lg:grid-cols-5`
- **`xl:`** (Minimum screen width `1280px` — Standard Desktop / Widescreen)
  - _Examples:_ `xl:grid-cols-9`
