# Sales offer configuration

The three full offer sections live in `src/routes/index.tsx`; scoped styles are in `src/styles.css`.

## Checkout destinations

Configure the public HTTPS checkout URLs in the hosting environment, then rebuild:

- `VITE_CHECKOUT_AMERICANO`: individual American football, USD 6.50.
- `VITE_CHECKOUT_CAMPO`: individual association football, USD 6.50.
- `VITE_CHECKOUT_COMBO`: both methods, USD 10.50.

The existing page had no checkout URLs. Until supplied, purchase buttons remain disabled with a short availability message. Do not use credentials or API tokens in VITE variables. Verify that each checkout charges the corresponding price.

## Testimonials

Each offer has a typed `reviews` list, empty by default because no testimonial text, names or roles were supplied. Add up to three authorized entries `{ name, role, quote, photo? }`. The section is rendered between the value stack and guarantee; without a photo, a circular neutral avatar is used. Empty sections are hidden, so no invented endorsements are published. Athlete images are presentation images, not testimonials.

## Images

- 2026-09-09 18.48.30, 18.48.41 and 18.48.50: association football.
- 2026-09-27 21.12.42, 21.13.28 and 21.13.38: American football.

All six originals are imported by Vite from the repository root and bundled. The combo combines the action photo from each sport.

## Pricing

Module reference totals: USD 104.60 (American), USD 49.80 (association), USD 154.40 (combo). These are labeled illustrative reference values, not prior sale prices. Two individual purchases total USD 13.00; the combo saves USD 2.50. The greater-than-90-percent statement refers only to the illustrative USD 154.40 reference total. The combo FAQ correctly describes both complete methods, without claiming extra content beyond them.
