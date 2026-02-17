# TP Coder Writing Style Guide

> Distilled from publicly available Medium blog posts by Thanaphoom Babparn (TP Coder) at [tpbabparn.medium.com](https://tpbabparn.medium.com/).

---

## Voice & Tone

### First-Person Experiential Learner

The writing voice is consistently a **learning journal** rather than an authoritative lecture. Titles use framing like "What I learned...", "My two cents on...", and "My Experience from..." - setting the expectation that readers are getting a peer's perspective, not a textbook.

**Why this is effective**: It lowers the barrier to engagement. Readers feel they're learning alongside someone rather than being talked down to. This is especially welcoming for junior developers who might be intimidated by overly polished technical content.

**Example**: The Advent of Code article is titled "What I learned after participated in Advent of Code 2023 by Kotlin and Rust" - not "How to Solve Advent of Code" or "Advent of Code 2023 Solutions."

### Honest About Limitations

The writing does not hide struggle. The Advent of Code piece openly admits that after puzzle 18, community solutions were needed. The System Design Interview book review gives a 4/5 rather than a perfect score, specifically calling out that Volume 1 "didn't deep dive into too much detail" in some parts.

**Why this is effective**: Candid self-assessment builds trust. When the author says something is good, readers believe it because they've also seen criticism applied where warranted.

### Humble Confidence

There's a pattern of hedging titles with qualifiers - "[2025] My two cents on the future of backend development (Maybe?)" uses both "my two cents" and "(Maybe?)" - while the actual article content is well-researched and substantive. The modesty is in the framing, not the depth.

**Why this is effective**: The soft framing invites readers who might skip a more assertive title. Once inside, the content delivers real value, creating a positive surprise effect.

---

## Content Structure Patterns

### Four Content Pillars

The blog follows four recurring formats:

#### 1. Book Reviews

Structured reviews of software engineering books with specific ratings, favorite chapters/topics called out, and honest assessments of where books fall short.

- System Design Interview (Vol 1 & 2) - highlighted Rate-Limiting, Consistent Hashing, Notification Systems, Design YouTube as standout topics
- The Software Engineer's Guidebook - described as practical enough that "reading 2-3 parts allows immediate real-world reflection"
- Learning Domain-Driven Design - covered mapping architecture to DDD concepts
- Become an Effective Software Engineering Manager
- Docs for Developers

**Why this is effective**: Book reviews position the writer as a continuous learner and knowledge curator. Readers get a trusted filter that saves time. Calling out specific chapters adds practical value beyond generic "great book" recommendations.

#### 2. Hands-On Technical Tutorials

Each tutorial starts from a genuine curiosity or problem, builds something concrete, and shares the results (including when results are mixed):

- **k6 benchmarking (Axum vs Spring WebFlux GraalVM)** - Axum won on GET requests (higher RPS, lower latency), but Spring WebFlux had slightly higher RPS (~20 difference) on POST requests. The nuance is the point.
- **Spring AI Function Calling with OpenAI** - explored function metadata as an alternative to explicit prompts
- **In-house LLM with Spring AI + Ollama** - practical local LLM setup using Mistral model
- **Reddit ideas discovery agent (Google ADK)** - motivated by the observation that Reddit discussions feel "closer to real-world problems" than LLM-generated ideas
- **Resumize (Rust + RAG)** - a full side project to help people write resumes without expensive resume coaches, choosing Rust for the entire stack
- **Spring Boot 3.1 Docker Compose integration** - practical dev environment setup

**Why this is effective**: Data-driven benchmarks with mixed results avoid the "X is always better" fanboyism. Side project articles (Resumize) demonstrate end-to-end product thinking. Every tutorial answers a real question rather than demonstrating a feature in isolation.

#### 3. Career Reflections & Personal Journey

- **"3 years journey as a Software Engineer in Japan: Growth and Discovery"** - a personal reflection covering the evolution from a Thai engineer seeking international challenge to someone with new priorities, announcing the return to Thailand and the TP Coder Innovation Hub vision
- **"[Non-Tech at all] 4-month experience in Japan"** - written in Thai, the non-technical side of living abroad

**Why this is effective**: Career narratives humanize the technical brand. The Japan journey post is compelling because it's honest about changing priorities rather than presenting a highlight reel. Writing about the decision to leave Japan and return to Thailand with a community mission is vulnerable and memorable.

#### 4. Industry Analysis & Event Coverage

- **"[2025] My two cents on the future of backend development (Maybe?)"** - research-based exploration of backend engineering directions
- **"Key Takeaways for AI Agent Summit '25 Fall (Day 1 & Day 2)"** - event coverage introducing MCP, A2A, and AP2 protocols; Google's 6-layer agent infrastructure architecture
- **"AI Agents Intensive Course at Google Japan"** - knowledge sharing from a Google Shibuya training on ADK and Gemini API

**Why this is effective**: Event coverage provides value to non-attendees while demonstrating active participation in the cutting-edge community. The concluding insight that "AI Agents make backend teams the core solution enablers" consistently frames new trends through the lens of backend engineering relevance.

---

## Bilingual Publishing Strategy

Many articles are published in **both English and Thai** versions:
- Resumize project guide
- Spring AI Function Calling tutorial
- Advent of Code learnings
- k6 performance testing
- AI Agents Intensive Course recap

**Why this is effective**: Bilingual publishing serves two audiences with one research effort - the global dev community (English) and the Thai developer community (Thai). This supports the TP Coder mission of empowering Thai developers while maintaining international visibility.

---

## Writing Mechanics

### Title Conventions

- Book reviews use a consistent `[Book Reviews]` prefix tag
- Year-tagged opinion pieces: `[2025] My two cents on...`
- Parenthetical softeners: `(Maybe?)`, `(My Rust & RAG side project)`
- Descriptive subtitles after a colon for journey posts

### Article Length & Depth

Articles lean toward **thorough rather than brief**. Technical tutorials include code context and results. Book reviews cover multiple dimensions (who it's for, strengths, weaknesses, favorite parts). Career reflections cover emotional arc, not just facts.

### Practical Over Theoretical

Every concept ties to a concrete implementation or real-world application. Even the "future of backend" opinion piece grounds speculation in specific technologies and protocols rather than abstract predictions.

### Consistent Cadence

Regular publishing across multiple content types (reviews, tutorials, reflections, event coverage) keeps the profile active without being locked into a single format.

---

## Recurring Themes in Writing

| Theme | How It Appears | Example |
|-------|---------------|---------|
| Backend engineering is evolving, not dying | AI framed as backend's next chapter, not its replacement | "AI Agents make backend teams the core solution enablers" |
| Learning in public | Documents the process including struggles, not just polished results | Advent of Code: admits needing community help after puzzle 18 |
| Data over opinions | Benchmarks show nuanced/mixed results rather than declaring winners | k6 test: Axum wins GET, Spring WebFlux wins POST |
| Bridging Thai and global dev communities | Bilingual content, mentorship programs | EN/TH article pairs, GenTH JSD mentoring |
| Side projects as learning vehicles | Each project is both a learning exercise and publishable content | Resumize (Rust + RAG), Reddit agent (ADK) |

---

## Style Summary for Content Replication

To write in the TP Coder style:

1. **Frame as a learner, not a teacher** - use "what I learned" / "my experience" / "my two cents" framing
2. **Be honest about what didn't work** - include failures, limitations, and mixed results
3. **Start from genuine curiosity** - every article should answer a real question the author had
4. **Show data, not just opinions** - when comparing technologies, run actual tests and share numbers
5. **Add hedging qualifiers to titles** - softeners like "(Maybe?)" invite broader readership
6. **Use consistent format tags** - `[Book Reviews]`, year tags like `[2025]` for categorization
7. **Tie everything back to backend engineering** - even AI/ML topics get framed through the backend lens
8. **Publish in both EN and TH** when the topic serves both audiences
9. **Go thorough over brief** - depth is the differentiator, not brevity
10. **Ground speculation in specifics** - name the technologies, protocols, and tools rather than speaking abstractly

---

*Research conducted: February 2026*
*Source: Medium ([tpbabparn.medium.com](https://tpbabparn.medium.com/))*
