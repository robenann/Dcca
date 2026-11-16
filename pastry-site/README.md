# Maison Miel — Pastry Restaurant Website

A static, responsive website for a pâtisserie & café. No build step: open `index.html` in a browser.

## Sections
- Hero with call-to-action
- Our Story
- Tabbed menu (Viennoiserie, Tarts & Pastries, Cakes, Café) with vegan/gluten-free tags
- Weekly specials
- Rotating testimonials
- Hours & location (highlights today and shows open/closed live)
- Order-ahead form (validation, 72-hour rule for custom cakes)
- Newsletter signup in the footer

## Customize
- **Name, address, phone, hours:** edit `index.html` (and the `hours` object in `script.js`).
- **Colors & fonts:** CSS variables at the top of `styles.css`.
- **Photos:** illustrations are pure CSS; swap `.tile`, `.card-art` backgrounds for `url(...)` images.
- **Forms:** front-end only. Point the order form at a service like Formspree or your own backend to receive requests.

## Preview locally
```bash
cd pastry-site && python3 -m http.server 8000
```
