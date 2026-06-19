# Blog Series: Backend System Design (Start Simple -> Evolve)

Format: Each post starts with a single-service design that works, then adds real-world constraints until it evolves into a multi-service architecture.

Reference posts: `payment-backend-stripe-integration-en.mdx` (~750 lines), `design-push-notification-system.mdx` (~570 lines)

## Series Overview

| # | Post | Status | EN | TH |
|---|------|--------|----|----|
| 1 | Payment Backend with Stripe Integration | Published | pubDate 2026-06-13 | published |
| 2 | Push Notification System | Published | pubDate 2026-06-17 | published |
| 3 | Delivery System (Multi-channel) | Not started | - | - |
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

### 3. Delivery System (Multi-channel)

File: `design-delivery-system.mdx` / `-th.mdx`

- [ ] v1: Monolithic send() function
- [ ] v2: Channel abstraction (Strategy pattern)
- [ ] v3: Template engine
- [ ] v4: User preferences (opt-in/opt-out)
- [ ] v5: Deduplication across channels
- [ ] v6: Rate limiting + frequency caps
- [ ] v7: Event-driven architecture

Key experience: PayPay timeline notification system

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
| 3 | design-delivery-system.mdx | design-delivery-system-th.mdx |
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
