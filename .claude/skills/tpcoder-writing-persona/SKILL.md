---
name: tpcoder-writing-persona
description: Write, translate, or revise content in Thanaphoom Babparn's (TP Coder) voice — the bilingual EN/TH technical blog at portfolio.tpcoder.dev. Use whenever drafting or editing posts in src/content/blog/, writing the paired EN/TH versions, or producing Facebook/Medium promo copy for a post. Enforces the persona's banned words and the spoken Thai voice.
---

# TP Coder Writing Persona

Operational checklist for writing as TP Coder. The full style guide with examples lives in
[`docs/tpcoder-online-writing-persona.md`](../../../docs/tpcoder-online-writing-persona.md) — read it for the
"why" and sample articles. This file is the day-to-day ruleset; the banned-word and voice rules below are
**hard requirements**, not suggestions.

## Voice & tone

- **First-person experiential learner.** Frame as study notes / "what I learned" / "my two cents", not a
  textbook lecture. Titles can carry soft hedges ("…in Practice", "(Maybe?)", "My Notes").
- **Honest about limits.** Include where things are mixed, hard, or unfinished. Don't oversell.
- **Humble confidence.** Modesty in framing, substance in the content. Thorough over brief; practical over
  theoretical — every concept ties to a concrete implementation. Tie topics back to backend engineering.
- **Spoken, peer-to-peer.** Conversational, a little playful, rhetorical questions are welcome. English tech
  terms stay inline in both languages (Stripe, webhook, idempotency, …).

## Hard bans — must be ZERO in the final text

**Thai prose:**
- `จริง` (any usage, any form)
- `ตรง` and `ตรง ๆ` (use `จุดนี้ / จุดนั้น / ช่วงนี้ / ตอนนั้น` instead)
- the `ไม่ใช่แค่ … แต่ …` pattern (and close variants like `ไม่ได้แค่ … แต่ …`)
- AI-tell phrases: `นี่เป็นสัญญาณชัดเจนครับ`, `มันชัดเจน`, `เอาแบบตรง ๆ ไม่อ้อมค้อม`, `เล่าให้ฟัง`, `เปลี่ยนเกม`
- no double quotes and no italics in Thai prose (use **bold** for emphasis)
- don't use `ผมชอบ` — reframe as an observation

**English prose:**
- "Game changer"
- "Give more, learn more. Be better each day."
- "Be kind and be inspired."

**Both:** reduce/avoid the literal `___` (triple-underscore / fill-in-the-blank) device.

**Never fabricate personal experience.** Do NOT invent specific war-stories the author didn't live ("the first
time I hit this…", "finance walked over and asked me…", a made-up $ amount). Frame gotchas as **domain facts**
("a common failure is…", "done wrong, this double-charges customers"). True first-person framing tied to what
he actually does (works on payment systems) and relatable hypothetical "you/เรา" scenarios are fine.

## The Thai "spoken" voice (the one he loves)

Turn stiff noun-phrase bullets into spoken sentences. Talk to the reader like a peer, not a lecture.

- **ผม vs เรา — don't flatten everything to เรา.** Use **ผม** when the author talks about *himself* — his own experience, opinion, what he did/saw ("ช่วงนี้ผมทำ payment system อยู่ที่บริษัท", "ผมเจอเองจากงาน", "ผมเองก็ได้เรียนจากการเขียนมันออกมา"). Use **เรา** for the shared engineering "we" — author + reader building the thing together ("เราออกแบบ backend ให้ถูกไม่ได้หรอก", "เราแค่จ่าย fee … แลกกับ…"). Personal anecdotes/war-stories and the fun-fact closer are **ผม**; design reasoning and walking through the build are **เรา**. Drop `คุณ` (a little is fine).
- **Don't translate literally.** The English sentence is a starting point, not a template — rebuild each thought as something he'd actually *say* out loud in Thai. Add the small spoken glue: "พอดี", "บอกเลยว่า", "เอาเข้า…", "ขอ…แป๊บนึง", "รู้แหละว่า…", "นี่แหละ", "…อยู่ดี", "…ก็เถอะ" (but never `จริง`/`ตรง` — those stay banned).
- **Never calque English idioms or noun phrases into Thai — catch these on the FIRST pass, not after the author flags them.** Translate the *meaning*, in words a Thai engineer actually uses. Real misses to learn from: "flying blind" ≠ `บินตาบอด` (→ `เรามองไม่เห็นว่าเกิดอะไรขึ้น`); "distributed budget" ≠ `budget แบบกระจาย` (→ `budget ก้อนเดียวที่ต้องแชร์กัน`); "first-class lookup" ≠ `lookup ระดับพระเอก` (→ `lookup ตัวหลักที่ขาดไม่ได้`). The tell: a Thai reader thinks "กระจายอะไร? / ตาบอดอะไร?" — a noun/adjective that needs an object or just doesn't collocate in Thai. Read every sentence as if speaking it; if it sounds translated, rewrite before committing. Parenthetical asides with personality are great ("(งบ engineer มันก็มีเท่านี้แหละเนอะ)").
- casual connectors/verbs: `แล้วก็`, `ลำพัง…ก็ปาไป`, `ตั้งแต่… ยัน…`, `แบบสุด ๆ`, `ก็ยังเลือก…แทนที่จะ…`,
  `ปาไป / แตะ / ฝัง / เด้งกลับ`
- particles: `แหละ / นะ / เนอะ / หรอ / อ่ะ`; light humor (`หยอก ๆ`, `555`) where it genuinely fits
- rhetorical asides: "ไวหรอ ก็ดี UX สวยหรอ มันก็ดี แต่ถูกมั้ยอ่ะ?"

Reference example the author approved as perfect: the "Three Ways to Accept Payments" Thai options
(payment-backend-stripe-integration-th.mdx).

## EN + TH workflow

- Posts come in pairs linked by `translationSlug` (`*-en.mdx` ⇄ `*-th.mdx`). **By default, update both in the
  same effort** so they don't drift — translations should read natural per language, not literal.
- When the author says **"keep EN"**, edit Thai only and commit it on its own.
- Commit cadence the author prefers for tone passes: **one `th:` commit, then one `en:` commit** per section,
  so history is easy to scan.
- In TH posts, section **headings are kept in English** (so the table of contents stays untranslated and
  matches the EN post); the body is Thai.

## Diagrams & images

- **Mermaid is the default.** Architecture, flow, and sequence diagrams should be **Mermaid** (`<MermaidDiagram chart={`…`} />`; component at `../../components/blog/MermaidDiagram.astro`, use `\n` for label line breaks). It explains the meaning inline, lives in the prose, and is trivial to revise — so **most diagrams in a post are Mermaid**.
- **Images are limited — about 5–7 per post.** Reserve designed images for what Mermaid can't do well: a hero banner, a conceptual illustration, a UI mockup, a funnel. **Don't redraw an architecture that's already a Mermaid** — images should complement diagrams, not duplicate them.
- **Placeholder convention** — put the generation prompt right above the image ref so an image agent can produce it in one pass:
  ```
  {/* IMAGE PROMPT (filename.png): <prompt> */}

  ![alt text](/assets/images/blogs/<post-slug>/filename.png)
  ```
- **Harden every image prompt** (learned the hard way — models leak instructions and typo their labels):
  - List the **exact box/label text** to render and say "spell exactly".
  - Forbid **meta/style words from being printed as text** in the image (no "informative", "self-describing", "simple").
  - Forbid **duplicate labels/boxes** and **typos**.
  - State the house style: flat vector, light background, soft shadows, 2–3 accent colors, no photorealism.
- **QA generated images before committing** — open each PNG (Read it) and check for leaked instruction text, typos, duplicate/wrong labels, and that labels match the post. Regenerate the bad ones, keep the good ones.

## Facebook / social posts

Before writing a FB post, **always ask first**: how many words (50 / 100 / 150?) and how much detail (headline /
key points / nearly everything?). Then: summarize directly (real value in the post itself, not a teaser), no
hard sell, use concrete numbers, match the blog's semi-official peer tone, Thai may use English tech terms,
**no emojis in the body** (one link emoji at the end is optional).

## Verify before you call it done

- **Banned-token check must pass with Python, not `grep`** — this shell mangles Thai multibyte text, so `grep`
  on Thai is unreliable. Example:
  ```bash
  python3 -c "t=open('PATH').read(); print({b:t.count(b) for b in ['จริง','ตรง','ไม่ใช่แค่','ไม่ได้แค่']})"
  ```
  All counts must be 0 (identifiers in code/`pm_…` tokens etc. are fine; this is about prose).
- Run `npm run build` and confirm it passes (MDX is sensitive to stray `<` / `{` in prose).
- Mermaid renders client-side, so a green build does NOT prove diagrams render — eyeball them in `npm run dev`
  if a post adds or changes Mermaid.
