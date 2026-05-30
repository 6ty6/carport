# AW Canopies and Carports

Static marketing site for AW Canopies and Carports, a Ghana-based business that designs and fabricates custom canopies and carports.

The project is a plain HTML, CSS, and JavaScript codebase with no framework, no build step, and no backend. It is designed to run directly in a browser or through a simple static server such as Live Server.

## What The Site Does

- Presents the business, services, and contact details
- Shows a browsable catalog of canopy and carport configurations
- Lets users filter products by capacity, roof style, cover type, material, search text, and vehicle type
- Opens a detail modal for each product with images, specs, dimensions, and a WhatsApp quote link
- Provides a separate gallery page with photo/video work samples and a lightbox viewer
- Routes most calls to action through WhatsApp for quick quoting

## Website Features

The homepage and supporting pages include:

- Hero section with a strong lead message and CTA buttons
- Quick feature highlights for premium steel fabrication, on-site builds, and vehicle capacity
- Product browser with search, capacity pills, roof-style visuals, cover filters, and vehicle selector
- 4+ vehicle enquiry flow that sends a custom WhatsApp message
- Material showcase with descriptions, tags, and WhatsApp inquiry links
- About section with service pillars and trusted client logos
- Contact section with location, phone, and WhatsApp CTA
- Footer with navigation, social links, and business contact details
- Gallery page with category tabs for photos and videos
- Lightbox and modal interactions with keyboard and swipe support

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- gallery.html
|-- gallery.css
|-- gallery.js
|-- images/
|-- videos/
|-- .vscode/
`-- README.md
```

### Main Pages

- `index.html`: main landing page and product browser
- `gallery.html`: portfolio page with image and video masonry grid

### Shared Assets

- `images/`: product photos, logo, hero images, client logos, and project shots
- `videos/`: project clips and thumbnails for the gallery page

### Editor Setup

- `.vscode/settings.json` sets Live Server to port `5501`

## Architecture

This site is split into two independent front-end experiences:

### 1. Main Sales Experience

Files:

- `index.html`
- `style.css`
- `script.js`

Responsibilities:

- Header and navigation
- Hero section
- Filterable product catalog
- Materials section
- About section
- Contact CTA
- Footer
- Product detail modal

### 2. Gallery Experience

Files:

- `gallery.html`
- `gallery.css`
- `gallery.js`

Responsibilities:

- Hero banner for the gallery page
- Category filters
- Masonry-style gallery grid
- Photo/video lightbox
- Mobile nav behavior

## Data Model

The site is driven by hardcoded arrays in JavaScript.

### Product Catalog

`script.js` contains `CARPORTS`, an array of product objects.

Each product usually includes:

- `id`
- `size`
- `name`
- `capacity`
- `capLabel`
- `roof`
- `cover`
- `material`
- `shortDesc`
- `fullDesc`
- `specs`
- `dims`
- `img`
- `images`
- `carTypes`
- `skuCode`
- `tags`

The product cards, filters, and modal all read from this array.

### Gallery

`gallery.js` contains `GALLERY`, an array of gallery items.

Each item usually includes:

- `id`
- `type` (`photo` or `video`)
- `cat`
- `src`
- `thumb`
- `caption`
- `tags`

The gallery page uses this array to render the grid and the lightbox.

## Key Behaviors

### Main Page

- Filter chips and checkboxes update the visible product cards
- Search is debounced before re-rendering
- Clicking a card or its buttons opens a modal
- The modal supports:
  - thumbnail navigation
  - left/right arrow keys
  - escape to close
  - swipe navigation on mobile
- Product quote buttons generate WhatsApp messages dynamically

### Gallery Page

- Category buttons filter photos and videos
- Clicking an item opens the lightbox
- The lightbox supports:
  - previous/next controls
  - arrow keys
  - escape to close
  - swipe navigation on mobile

## Running Locally

You can open `index.html` directly in a browser, but the recommended workflow is a local static server.

### Recommended

- Use VS Code Live Server
- Open `index.html`
- The repo is configured to use port `5501`

### Manual

- Open `index.html` in a browser
- Open `gallery.html` for the portfolio page

## Content Editing Guide

If you need to update the site, these are the main places to edit:

- Product cards and product modal data: `script.js`
- Main site layout/content: `index.html`
- Main site styling: `style.css`
- Gallery items: `gallery.js`
- Gallery page markup: `gallery.html`
- Gallery styling: `gallery.css`

## Notes For Future Devs

- This project is intentionally static, so changes are mostly content and layout updates.
- Keep HTML IDs in sync with the JavaScript selectors.
- If you add or remove product fields in `script.js`, make sure the modal and filters still match.
- If you add gallery items, include a `caption` so the overlay and lightbox labels stay meaningful.
- Most outbound contact paths are WhatsApp links, so update the phone number in one place before shipping if it changes.

## Asset Counts

At the time of writing, the repo includes:

- 41 image assets
- 8 video/thumb assets

## License

No license file is currently included. Add one if the project needs explicit reuse terms.
