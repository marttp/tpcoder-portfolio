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

- **The register is ผม + ครับ, talking straight to คุณ. This is the single most important rule** — and the one I got wrong in the first webhook draft (it came out an all-`เรา` detached explainer, and he flagged it as "strange / not conversational"). He writes like he's *talking to one reader*:
  - **`ครับ` is the warm baseline** — not on every sentence, but it carries the explanatory beats, the section turns, and the direct asides. An entire post with zero `ครับ` reads cold.
  - **`ผม` for himself** — his experience, opinion, what he did/saw ("ช่วงนี้ผมทำ payment system อยู่", "ผมเจอเองจากงาน").
  - **`คุณ` to address the reader, often** — do NOT suppress it. payment-th (which he likes) uses `คุณ` ~60 times; webhook-th #4 (which he disliked) used it **zero** times. All-`เรา` is the #1 failure mode.
  - **`เรา` only for genuine "we build this together" beats** — it sits *alongside* ผม/คุณ, never replaces them.
  - **Rhetorical address is core:** "ใช่มั้ยล่ะครับ", "เดี๋ยวก่อนนะครับ", "ลองคิดดูสิครับ", "เป็นไงกันบ้างครับ", "คุณอ่านถูกแล้วครับ".
- **Don't translate literally.** The English sentence is a starting point, not a template — rebuild each thought as something he'd actually *say* out loud in Thai. Add the small spoken glue: "พอดี", "บอกเลยว่า", "เอาเข้า…", "ขอ…แป๊บนึง", "รู้แหละว่า…", "นี่แหละ", "…อยู่ดี", "…ก็เถอะ" (but never `จริง`/`ตรง` — those stay banned. Note: his *own* Medium writing uses จริง/ตรง freely and naturally; the ban here is a guardrail against the AI failure mode of sprinkling `จริง ๆ` as filler, so write the warmth without them). **Word choice and clause order can flip freely** — some vocab has no direct Thai equivalent, so say the *meaning*, reordered however sounds natural spoken. **Unpack hyphenated EN compounds** into a real Thai phrase: "durable-fast" → `เก็บของได้ไวแล้วก็ทนทาน`, "slow-external" → `ช้าเพราะต้องไปง้อของข้างนอก`, "the real shape of the trade" → `หน้าตาแท้ ๆ ของสิ่งที่เราแลกมา` — never render them as `durable-แล้ว-ไว` / `ช้า-เพราะของข้างนอก`.
- **Keep technical terms in English, don't translate or transliterate them.** He wants the *term*, inline in Latin: `coupling` (not `มัดติดกัน`), `partner` (not `พาร์ตเนอร์`), `webhook`, `idempotency`, `queue`. Translating a concept into a Thai metaphor reads wrong to him — say the English word and explain around it in Thai.
- **Dial: serious-but-authentic, not slapstick.** His technical voice (see the Medium piece's "Insight" section) is *measured* — warm `ครับ`/`ผม`, `ซึ่ง/ดังนั้น`, concrete — NOT cutesy. Avoid the slapstick register I over-reached into: `กิ๊กก๊อก`, `กระทืบซ้ำ`, `งอแง`, `ซวย`, `ชิลไม่ได้`, `เซ็นมันซะ`, and stacked emoji. One light emoji per post max, on a real beat.
- **Never calque English idioms or noun phrases into Thai — catch these on the FIRST pass, not after the author flags them.** Translate the *meaning*, in words a Thai engineer actually uses. Real misses to learn from: "flying blind" ≠ `บินตาบอด` (→ `เรามองไม่เห็นว่าเกิดอะไรขึ้น`); "distributed budget" ≠ `budget แบบกระจาย` (→ `budget ก้อนเดียวที่ต้องแชร์กัน`); "first-class lookup" ≠ `lookup ระดับพระเอก` (→ `lookup ตัวหลักที่ขาดไม่ได้`). The tell: a Thai reader thinks "กระจายอะไร? / ตาบอดอะไร?" — a noun/adjective that needs an object or just doesn't collocate in Thai. Read every sentence as if speaking it; if it sounds translated, rewrite before committing. Parenthetical asides with personality are great ("(งบ engineer มันก็มีเท่านี้แหละเนอะ)").
- casual connectors/verbs: `แล้วก็`, `ลำพัง…ก็ปาไป`, `ตั้งแต่… ยัน…`, `แบบสุด ๆ`, `ก็ยังเลือก…แทนที่จะ…`,
  `ปาไป / แตะ / ฝัง / เด้งกลับ`
- particles: `ครับ / แหละ / นะ / เนอะ / หรอ / อ่ะ / ล่ะ / ดิ๊`; stretched-vowel emphasis where it fits (`เลยยย`, `โคตร…`); light humor (`หยอก ๆ`, `555`) and a **sparing emoji** (😅 😂 🥲) like his Medium posts — a couple per post, tied to a genuine beat, never every paragraph
- rhetorical asides: "ไวหรอ ก็ดี UX สวยหรอ มันก็ดี แต่ถูกมั้ยอ่ะ?"
- **Set up explanations with `สมมุติว่า…`** — pose a concrete little scenario, then walk it ("สมมุติว่าพาร์ตเนอร์เขาอยากรู้ว่า… เขาก็ต้องมานั่ง poll เราเอง — ยิง `GET` เข้ามา ขอข้อมูลทีละอัน หรือขอมาเป็น list"). Be specific about mechanics, not abstract. This is his default teaching move.
- **Watch floating `มัน`.** He flagged `ก่อนจะมีมัน` — a `มัน` whose referent is vague reads off. Don't use `มัน` to stand in for *his own* system/work, and don't open a clause with a `มัน` the reader has to chase. Name the thing (`webhook`, `queue`) or restructure. `มัน` is fine mid-sentence for a clearly-established object ("ส่วน webhook พลิกเป็น push" — note: dropped the `มัน`).

Reference examples: the "Three Ways to Accept Payments" options (payment-backend-stripe-integration-th.mdx),
and — for the **fullest** authentic spoken voice (ผม + ครับ + direct คุณ address + 555 + emoji) — his Medium
piece at `medium-posts/2022-10-09_...Virtual-Interviews...4715493ce709.html`. When unsure about register,
re-read that piece before writing.

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
  When a new ban is added — or you're asked to audit — re-run this across the **already-published** posts too, not just the one you're editing; they can predate the rule (a stray `ชัดเจน` slipped through the payment-backend TH post exactly this way).
- Run `npm run build` and confirm it passes (MDX is sensitive to stray `<` / `{` in prose).
- Mermaid renders client-side, so a green build does NOT prove diagrams render — eyeball them in `npm run dev`
  if a post adds or changes Mermaid.
