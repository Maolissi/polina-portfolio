# Polina Veltcheva Portfolio — Starter Site

A responsive static portfolio built with HTML, CSS and vanilla JavaScript. No database, build step or server-side code is required.

## Files
- `index.html` — homepage and project gallery
- `styles.css` — visual system and responsive layout
- `script.js` — language switcher, filters and mobile navigation
- `case-study.html`, `case-study.css`, `case-study.js` — reusable project detail page
- `assets/images/` — place your final project images here

## Preview locally
Open `index.html` in a browser. For testing language persistence and clean navigation, you can also use a local static server, but it is not required for the basic preview.

## Upload to hosting
1. Download and unzip the project.
2. Open your hosting control panel or connect via SFTP/FTP.
3. Upload the contents of this folder to the website document root (often `public_html/` or `www/`). Do not upload the ZIP as the only site file.
4. Visit your domain and check desktop and mobile layouts.
5. Ensure HTTPS is enabled in the hosting control panel.

## Before publishing — important edits
1. Replace the illustrative geometric project visuals in `index.html` with your actual work, or add `<img>` elements pointing to files inside `assets/images/`.
2. The six projects and case study descriptions are placeholders/concepts. Do not present them as commissioned client work unless they are real. Mark speculative pieces as `Concept Project`.
3. Replace `hello@yourdomain.com` with your actual public contact email.
4. Replace the social links currently pointing to `#contact` with your actual Instagram, Pinterest, Telegram and Behance URLs.
5. Update the About text, service list and metadata to match your real offering.
6. The interface language switcher translates the homepage UI. Case-study templates currently use English copy; add localized case text if you want each project page fully translated.
7. Fonts load from Google Fonts when internet access is available; system fallbacks are defined.

## Adding a project
1. Duplicate one `<article class="project-card" ...>` block in `index.html` and update its title, category, colour/art treatment and `href`.
2. Add a new entry to the `cases` object in `case-study.js` using a unique ID.
3. Link the card to `case-study.html?id=your-id`.
4. To use an image, add it to `assets/images/` and use an `<img src="assets/images/your-image.webp" alt="Clear description">` inside the project image area. Keep images optimised (WebP or AVIF preferred).
5. If adding new text that must translate, add its key to each language object in `script.js` and use `data-i18n="yourKey"` in the HTML.

## Design tokens
Main colours are declared at the top of `styles.css` as CSS variables: `--blue`, `--orange`, `--pink`, `--green`, `--clay`, `--paper` and `--ink`.

## Contact form
The CTA currently uses `mailto:` and is not a server-backed form. A real form would require a form service or a small backend endpoint.


## Portfolio artwork update
The project cards now use optimized WebP concept visuals in `assets/images/`. These are portfolio concept/mockup visuals, not verified client work. Check product specs and remove any unverified efficacy, performance, fabric, or warranty claims before commercial use.
