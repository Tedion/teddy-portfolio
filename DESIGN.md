# Design Strategy — Teddy Abera Danamo Portfolio

## Direction: Ethiopian Editorial (Option A)

### Audience Profile

Three buyer personas, each evaluating in 90 seconds:

1. **CTO / VP Eng at growth-stage company** — Scanning for production judgment, real system scale, architectural trade-offs.
2. **Hiring manager at infrastructure company** — The portfolio IS the interview. They notice font choices, semantic HTML, Lighthouse scores.
3. **Sovereign-tech consultancy buyer** — Government-scale experience, multi-stakeholder operations, national impact.

### Differentiation Thesis

"Teddy is simultaneously operating infrastructure for a US IT consultancy, building a patent-pending distributed AI platform, AND running national-scale government digital transformation for three Ethiopian ministries — all at once, right now."

### Design Rationale

Ethiopian Editorial was chosen over Status Page (approaching cliche), Whitepaper (too academic), and Brutalist (highest execution risk) because it maps directly to the buyer trust model. CTOs and infrastructure hiring managers read Stripe Press, Increment, ACM Queue — this aesthetic signals "I read what you read."

The East African color vocabulary (terracotta against near-black) creates genuine distinctiveness without gimmickry. It is culturally authentic and visually memorable in the DevOps portfolio landscape where nobody else uses this palette.

### Visual Identity

| Element | Choice | Rationale |
|---|---|---|
| Display font | Instrument Serif | Editorial weight, distinctive, Google Fonts |
| Body font | IBM Plex Sans | Designed for technical contexts, warm, dense-readable |
| Mono font | IBM Plex Mono | Family consistency, metrics/code |
| Background | #0C0C0E | Near-black, softer than pure black |
| Surface | #161618 | Card/section lift |
| Text primary | #E8E4DF | Warm off-white |
| Text secondary | #9A9490 | Warm gray |
| Accent | #C2703E | Terracotta — East African earth tone |
| Motion | Minimal fade + 8px translate, 200ms color hovers |

### Information Architecture

1. Header (name, role, status indicator, nav)
2. Hero (positioning statement + 3 proof anchors)
3. Selected Work (5 primary + 3 secondary case studies)
4. Capabilities (8 architectural prose cards)
5. Timeline (compact reverse chronological)
6. About (education, languages, certifications)
7. Contact (email, LinkedIn, GitHub, phone)
8. Footer (stack, source, deploy timestamp)

### Technical Decisions

- Astro 4 static: zero JS shipped, component model for repeated patterns
- Self-hosted fonts: no third-party DNS, best FCP
- Vanilla CSS: precise typographic control, no framework overhead
- Performance budget: <500KB total, FCP <1s, 0 bytes JS

### Anti-Patterns Avoided

- No 3D/particles/gamified navigation
- No purple gradients or mesh backgrounds
- No skill bars or progress meters
- No emoji icons or stock imagery
- No "Hi, I'm X" hero pattern
- No typing/typewriter effects
- No vanity stat counters
- No contact form (direct links only)
