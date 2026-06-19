# Blog Series: Backend System Design (Start Simple -> Evolve)

Format: Each post starts with a single-service design that works, then adds real-world constraints until it evolves into a multi-service architecture.

Reference posts: `payment-backend-stripe-integration-en.mdx` (~750 lines), `design-push-notification-system.mdx` (~570 lines)

## Series Overview

| # | Post | Status | EN | TH |
|---|------|--------|----|----|
| 1 | Payment Backend with Stripe Integration | Published | pubDate 2026-06-13 | published |
| 2 | Push Notification System | Published | pubDate 2026-06-17 | published |
| 3 | Omnichannel Delivery Backbone | Drafting (EN) | - | - |
| 4 | Webhook Callback System | Not started | - | - |
| 5 | Icon Management / Segmentation | Not started | - | - |
| 6 | Audience Platform (ETL Pipeline) | Not started | - | - |
| 7 | Campaign Management Platform | Not started | - | - |

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

### 3. Omnichannel Delivery Backbone

File: `design-omnichannel-delivery.mdx` / `-th.mdx`

The orchestration layer *above* the channels: a schedule fires, prepared audience chunks get picked up, and a delivery workflow drives each chunk out across push + email + SMS, plus writing into the inbox service. Sits above #2 (push is one channel it calls) and below #6 (audience is built/chunked upstream).

- [ ] v1: Naive — a campaign job loops recipients and sends (one channel)
- [ ] v2: Fire on a schedule, wake per chunk (scheduler ≠ sender)
- [ ] v3: Consume a prepared/chunked audience (don't re-derive it — that's #6)
- [ ] v4: Omnichannel dispatch — pick channel(s) per recipient; *brief* per-channel notes (push = #2, email = async/bounce/reputation, SMS = cost/carrier/length) + inbox as a SEPARATE write-target service (feed/category/read-badge/deeplink owned by it, not the backbone)
- [ ] v5: Delivery workflow + fallback (push → SMS/email; per-step state)
- [ ] v6: Cross-channel dedupe, frequency cap, cost-aware routing
- [ ] v7: End-state — backbone driving #2, writing to the inbox service, consuming #6

Depth: keep the focus on the **backbone**; each channel gets only its one distinguishing gotcha, not a deep dive.

Ownership note (avoid overlap): **#6** builds & chunks the audience (*who*) · **#3** schedules & delivers chunks omnichannel (*when/where/how*) · **#2** is the push channel's internal pipeline. **Inbox** is a neighbour service the backbone *writes to*, not a dispatch channel — kept brief (could be its own post later).

Inbox = the in-app timeline feed (bell icon): grouped by promotion / system / customer support, each item an image-optional card + message, tap → deeplink or web; persistent + read/unread badge (a read side the fire-and-forget channels don't have).

Key experience: PayPay timeline / omnichannel delivery system

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
