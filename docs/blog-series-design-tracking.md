# Blog Series: Backend System Design (Start Simple -> Evolve)

Format: Each post starts with a single-service design that works, then adds real-world constraints until it evolves into a multi-service architecture.

Reference posts: `payment-backend-stripe-integration-en.mdx` (~750 lines), `design-push-notification-system.mdx` (~570 lines)

## Series Overview

| # | Post | Status | EN | TH |
|---|------|--------|----|----|
| 1 | Payment Backend with Stripe Integration | Published | pubDate 2026-06-13 | published |
| 2 | Push Notification System | Published | pubDate 2026-06-17 | published |
| 3 | Omnichannel Customer Communication Delivery Backbone | Published | pubDate 2026-06-19 | published |
| 4 | Webhook Callback System | Not started | - | - |
| 5 | Icon Management / Segmentation | Not started | - | - |
| 6 | Audience Platform (ETL Pipeline) | Not started | - | - |
| 7 | Campaign Management Platform | Not started | - | - |

## Facebook Posts (Thai, copy-paste ready)

Shared frame (keep stable across posts): personal "แอดมาร์ท" hook → AI-assists-but-I-review → "Domain N" one-liner of what the system is + start-simple-then-evolve → back-links to earlier posts → `🙇‍♂️` close. Banned tokens apply here too (no `จริง`/`ตรง`; use `ทำมากับมือ` not `ทำจริง`). No hard sell. URLs use the **TH** slug.

### #1 Payment Backend (published)

```
Blog: การออกแบบ Payment backend ที่ต่อกับ Stripe ในทางปฏิบัติ
Link URL: https://portfolio.tpcoder.dev/blog/payment-backend-stripe-integration-th/

แอดมาร์ทอยากชวนคนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

เปิดซีรีส์ด้วย Domain แรก เรื่อง Payment backend ที่ต่อกับ Stripe — ระบบที่ถ้าพลาดขึ้นมาไม่ได้จบแค่ UX เสีย แต่คือเงินหาย เริ่มจาก flow การรับเงินแบบพื้นฐาน แล้วค่อย evolve ทีละขั้นไปเรื่อง idempotency, ledger, webhook, ไปจนถึง dispute

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

### #2 Push Notification (published)

```
Blog: การออกแบบ Push Notification System แบบเริ่มจากง่าย แล้วค่อย evolve
Link URL: https://portfolio.tpcoder.dev/blog/design-push-notification-system-th/

แอดมาร์ทพยายามให้คนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

มาถึง Domain ที่ 2 เป็นเรื่อง Push Notification ที่จะเริ่มจากแบบง่ายที่สุดก่อน แล้วค่อย evolve ไปทีละขั้น ส่วนผมเองคงมีอีกแค่ 4-5 ระบบที่เอามาแชร์แบบนี้ได้ (อันแรกก็ไอ Payment integration with Stripe ไปย้อนดูเอา)

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

### #3 Omnichannel Delivery Backbone (published)

```
Blog: การออกแบบ Omnichannel Delivery Backbone สำหรับสื่อสารกับลูกค้า แบบเริ่มจากง่าย แล้วค่อย evolve
Link URL: https://portfolio.tpcoder.dev/blog/design-omnichannel-delivery-th/

แอดมาร์ทยังคงพยายามให้คนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

มาถึง Domain ที่ 3 แล้ว เป็นเรื่อง Omnichannel — ระบบที่เอาไว้ส่งข้อความหาลูกค้าก้อนใหญ่ ๆ ผ่านหลายช่องทาง (push / email / SMS / inbox) เริ่มจากแบบง่ายสุดคือไฟล์ list กับ worker ตัวเดียว แล้วค่อย evolve ทีละขั้นจนกลายเป็น backbone ที่ตั้งเวลาส่งได้ ทำงานทีละ chunk แล้วก็คุมเป็น workflow ทั้งเส้น

ใครยังไม่ได้อ่านสองอันแรก ย้อนไปดูได้ — Payment integration with Stripe (Domain 1) กับ Push Notification (Domain 2) ส่วนของผมเองก็เหลืออีกสัก 4 ระบบที่เอามาแชร์แบบนี้ได้

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

### #4 Webhook Callback System (draft — finalize angle at publish)

```
Blog: <TH title>
Link URL: https://portfolio.tpcoder.dev/blog/design-webhook-callback-system-th/

แอดมาร์ทยังคงพยายามให้คนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

มาถึง Domain ที่ 4 เป็นเรื่อง Webhook Callback System — ตอนที่ระบบเราต้องยิง callback กลับไปบอก partner/merchant ว่ามีอะไรเกิดขึ้น เริ่มจาก POST แบบ sync ง่าย ๆ แล้วค่อย evolve ทีละขั้นไปเรื่อง retry, backoff, idempotency, signature, ไปจนถึง DLQ

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

### #5 Icon Management / Segmentation (draft — finalize angle at publish)

```
Blog: <TH title>
Link URL: https://portfolio.tpcoder.dev/blog/design-icon-management-segmentation-th/

แอดมาร์ทยังคงพยายามให้คนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

มาถึง Domain ที่ 5 เป็นเรื่องการเลือก asset/icon ให้เหมาะกับลูกค้าแต่ละ segment — เริ่มจาก icon ตายตัวต่อ campaign แล้วค่อย evolve ไปเรื่องเลือกตาม attribute, cache, ไปจนถึง A/B test และ optimize ตาม CTR

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

### #6 Audience Platform (draft — finalize angle at publish)

```
Blog: <TH title>
Link URL: https://portfolio.tpcoder.dev/blog/design-audience-platform-th/

แอดมาร์ทยังคงพยายามให้คนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

มาถึง Domain ที่ 6 เป็นเรื่อง Audience Platform — ระบบที่คัดว่าจะส่งหาใคร (ตัวที่ป้อน chunk ให้ Omnichannel ใน Domain 3) เริ่มจาก query ตอนส่ง แล้วค่อย evolve ไปเรื่อง batch ล่วงหน้า, Spark, data lake, ไปจนถึง segment แบบ near real-time

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

### #7 Campaign Management Platform (draft — finalize angle at publish)

```
Blog: <TH title>
Link URL: https://portfolio.tpcoder.dev/blog/design-campaign-management-platform-th/

แอดมาร์ทยังคงพยายามให้คนคิดเป็นระบบมากขึ้น ว่าทำไมถึงต้องทำอะไรขึ้นมา โดยหยิบของที่ตัวเองทำมากับมือมาอธิบายให้อ่านกัน และไม่ปฏิเสธว่าใช้ AI ช่วยเรียบเรียง แต่แอดรีวิวเองทุกตัวอักษร

มาถึง Domain ที่ 7 เป็นเรื่อง Campaign Management Platform — หน้าบ้านที่ทีม marketing ใช้สร้างแล้วก็คุม campaign เริ่มจาก CRUD ง่าย ๆ แล้วค่อย evolve ไปเรื่อง scheduling, approval workflow, budget cap, ไปจนถึง A/B test และ multi-tenant

หวังว่าจะมีประโยชน์ไม่มากก็น้อยนะครับ ขอให้ทุกคนมีความสุข 🙇‍♂️
```

## Evolution Template (per post)

Each post follows this narrative arc:

1. v1: Simple single-service design that works
2. v2: First bottleneck or limitation
3. v3: Add reliability (retry, idempotency, DLQ)
4. v4: Scale problem (throughput, partitioning)
5. v5: Multi-service / microservice architecture
6. v6: Production edge cases and gotchas

---

## Per-Post Outlines

### 1. Payment Backend with Stripe Integration

File: `payment-backend-stripe-integration-en.mdx` / `-th.mdx`

Reverse-engineered from the published post (750 lines):

- [x] v1: Payment lifecycle foundations (money flow, auth -> capture -> settlement, PSP vs build-your-own vs no-code)
- [x] v2: Synchronous charge path (PaymentIntent, Stripe Elements, 3DS/SCA challenge)
- [x] v3: Async webhook pipeline (dumb receiver + message queue + background workers)
- [x] v4: Idempotency at every layer (client -> backend -> Stripe -> webhook, concurrent key race)
- [x] v5: Database for correctness (minor units, zero-decimal currencies, state machine, optimistic locking)
- [x] v6: Double-entry ledger (balanced debits/credits, append-only, hard invariant check)
- [x] v7: Out-of-order events + enforced state transitions (SELECT FOR UPDATE, row lock)
- [x] v8: Saved cards, subscriptions, refunds, disputes (each with own state machine)
- [x] v9: Stripe Connect (marketplace split payments, connected accounts)
- [x] v10: Reconciliation + transactional outbox + production edge cases (timeout, stale reads, payout failures, partial capture leftovers)

Key experience: PayPay Card (chargeback system), Coda (authorize/capture separation, PCI-DSS, vault service)

---

### 2. Push Notification System

File: `design-push-notification-system.mdx` / `-th.mdx`

Reverse-engineered from the published post (570 lines):

- [x] v1: Direct FCM call per device
- [x] v2: Multi-platform (FCM + APNs) abstraction
- [x] v3: Async background worker + queue
- [x] v4: Batching (FCM multicast, token grouping)
- [x] v5: Two-stage Kafka pipeline
- [x] v6: Fan-out (one campaign -> 60M recipients without flooding the queue)
- [x] v7: Dedupe processor (stop the double-buzz)
- [x] v8: Rate limits, delivery tracking, bounded retry (survive 120M+ daily)
- [x] v9: Token cleanup + device registry
- [x] v10: Templating + personalization + type/priority/frequency caps

Key experience: PayPay push notification service (120M+ daily notifications)

---

### 3. Omnichannel Customer Communication Delivery Backbone

File: `design-omnichannel-delivery.mdx` / `-th.mdx`

Published as the orchestration layer *above* the channels: a send is triggered, prepared audience chunks get picked up, and a delivery workflow drives each chunk out across push + email + SMS, plus writing into the inbox service. Sits above #2 (push is one channel it calls) and below #6 (audience is built/chunked upstream). Core idea: large target list → deliver via a particular method.

Published sections (EN + TH):

- [x] Naive — a list + a worker (target source = upload / REST body / DB; audience+message+method)
- [x] Fire on a schedule, wake per chunk (scheduler ≠ sender; single cron → distributed scheduler; motivated by marketing's weekend/time, not location)
- [x] Consume a prepared, chunked audience (don't re-derive — that's #6; file/CSV upload is a fine source; BOTE: 40–60M ÷ 1K = ~40–60K chunks → observability)
- [x] Omnichannel dispatch — push/email/SMS behind one interface (email/SMS external providers); inbox = SEPARATE service, a DB insert, non-urgent
- [x] The delivery workflow (the must) — Kafka fan-out OR parent/child workflows; fallback a bonus; retry granularity (whole-block sync, partial → respawn small chunk async 2× then drop, no DLQ)
- [x] Frequency caps (two-layer: total + per-channel; priority attribute/UI; Audience-Platform overlap) + cost-aware routing
- [x] Tech by pattern (Quartz / Spring Batch / Temporal-Cadence / Step Functions / JobRunr / Spark, with links)
- [x] "Get back to your goal" + wrap-up (human value: marketing's time handed back; personal impact numbers deliberately omitted)

Depth: focus stays on the **backbone**; each channel gets only its one distinguishing gotcha, not a deep dive.

Ownership note (avoid overlap): **#6** builds & chunks the audience (*who*) · **#3** schedules & delivers chunks omnichannel (*when/where/how*) · **#2** is the push channel's internal pipeline. **Inbox** is a neighbour service the backbone *writes to*, not a dispatch channel.

Inbox = the in-app timeline feed (bell icon): grouped by promotion / system / customer support, each item an image-optional card + message, tap → deeplink or web; persistent + read/unread badge (a read side the fire-and-forget channels don't have).

Key experience: PayPay timeline / omnichannel delivery system (Kotlin / Spring Boot WebFlux + Cadence Workflow + Kafka)

---

### 4. Webhook Callback System

File: `design-webhook-callback-system.mdx` / `-th.mdx`

- [ ] v1: Synchronous POST to endpoint
- [ ] v2: Async queue with retry
- [ ] v3: Exponential backoff + max attempts
- [ ] v4: Idempotency keys + dedup
- [ ] v5: Signature verification (HMAC)
- [ ] v6: Dead letter queue + redrive
- [ ] v7: Ordering guarantees + sequence tracking

Key experience: Coda webhook model (batch GET -> real-time POST with SQS retries)

---

### 5. Icon Management / Segmentation

File: `design-icon-management-segmentation.mdx` / `-th.mdx`

- [ ] v1: Static icons per campaign
- [ ] v2: Per-segment icon mapping
- [ ] v3: Dynamic attribute-based selection
- [ ] v4: Cache invalidation strategy
- [ ] v5: A/B testing icon variants
- [ ] v6: ML-driven CTR optimization

Key experience: PayPay personalized asset delivery (Akka -> Spring Boot Kotlin, 8K RPS)

---

### 6. Audience Platform (ETL Pipeline)

File: `design-audience-platform.mdx` / `-th.mdx`

- [ ] v1: Inline SQL query at send time
- [ ] v2: Nightly batch pre-computation
- [ ] v3: Spark jobs for complex rules
- [ ] v4: Data lake integration
- [ ] v5: Near real-time eligibility (streaming)
- [ ] v6: Reusable segmentation service

Key experience: PayPay Spark-Scala ETL jobs, audience grouping, data lake migration

---

### 7. Campaign Management Platform

File: `design-campaign-management-platform.mdx` / `-th.mdx`

- [ ] v1: Simple CRUD app
- [ ] v2: Scheduling + concurrent campaigns
- [ ] v3: Approval workflow (state machine)
- [ ] v4: Budget caps (distributed counting)
- [ ] v5: A/B testing + traffic splitting
- [ ] v6: Multi-tenant with access control

Key experience: PayPay campaign management platform (3M yen SMS savings)

---

## Cross-Linking Strategy

- Each post references the others where relevant
- Series index at the top of each post
- Mermaid diagrams use consistent styling

## File Naming

| Post | EN file | TH file |
|------|---------|---------|
| 1 | payment-backend-stripe-integration-en.mdx | payment-backend-stripe-integration-th.mdx |
| 2 | design-push-notification-system.mdx | design-push-notification-system-th.mdx |
| 3 | design-omnichannel-delivery.mdx | design-omnichannel-delivery-th.mdx |
| 4 | design-webhook-callback-system.mdx | design-webhook-callback-system-th.mdx |
| 5 | design-icon-management-segmentation.mdx | design-icon-management-segmentation-th.mdx |
| 6 | design-audience-platform.mdx | design-audience-platform-th.mdx |
| 7 | design-campaign-management-platform.mdx | design-campaign-management-platform-th.mdx |

## Tags

- All posts: Software Architecture, Software Engineering, Backend
- Post 1 (Payment): add FinTech

## Writing Guidelines

- Follow TP Coder writing persona (learner voice, data-driven, honest about failures)
- No quotes in body text
- No banned Thai keywords (จริง, ชัดเจน, เปลี่ยนเกม, เอาแบบตรง ๆ, เล่าให้ฟัง, ไม่ใช่แค่...แต่)
- No ___ in content
- MermaidDiagram component at `../../components/blog/MermaidDiagram.astro`
- Target depth: 500-750 lines per post (matching the two published reference posts)
