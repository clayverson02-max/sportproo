# SportPro sales funnel

The funnel is split into four destinations:

- `/` is the selection page with the three sport choices.
- `/futbol-americano` is the complete American football sales page.
- `/futbol-de-campo` is the complete association football sales page.
- `/los-dos-deportes` is the highlighted combo sales page.

The combo stays visually prominent in the selection cards, header links, individual page upsell, pricing card and CTA. The pages use the six repository images in their corresponding sport sections.

## Checkout destinations

Configure the public HTTPS checkout URLs in the hosting environment, then rebuild:

- `VITE_CHECKOUT_AMERICANO`: individual American football, USD 6.50.
- `VITE_CHECKOUT_CAMPO`: individual association football, USD 6.50.
- `VITE_CHECKOUT_COMBO`: both methods, USD 10.50.

The current fallback URLs are configured in `src/lib/offers.ts`, and can be overridden with `VITE_*` variables if needed. Do not put credentials, API tokens or payment secrets in `VITE_*` variables.

## Testimonials

No authorized testimonial text, names or roles were present in the repository. The implementation therefore uses the supplied athlete photos as sport imagery and does not present them as customer testimonials. Add verified reviews to the offer data before enabling a testimonial block.

## Pricing

The official prices are USD 6.50 for each individual method and USD 10.50 for the combo. Reference module totals are shown as illustrative value references: USD 104.60 (American), USD 49.80 (association), USD 154.40 (combo). The two individual purchases total USD 13.00; the combo saves USD 2.50.
