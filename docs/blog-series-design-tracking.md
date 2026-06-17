# Blog Series: Backend System Design (Start Simple -> Evolve)

Format: Each post starts with a single-service design that works, then adds real-world constraints until it evolves into a multi-service architecture.

Reference post: `payment-backend-stripe-integration-en.mdx` (~650 lines)

## Series Overview

| # | Post | Status | EN | TH |
|---|------|--------|----|----|
| 1 | Push Notification System | Draft (EN) | drafted, not pushed | - |
| 2 | Delivery System (Multi-channel) | Not started | - | - |
| 3 | Webhook Callback System | Not started | - | - |
| 4 | Icon Management / Segmentation | Not started | - | - |
| 5 | Audience Platform (ETL Pipeline) | Not started | - | - |
| 6 | Campaign Management Platform | Not started | - | - |
| 7 | Cashback System | Not started | - | - |

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

### 1. Push Notification System

File: `design-push-notification-system.mdx` / `-th.mdx`

- [x] v1: Direct FCM call per device
- [x] v2: Async background worker + queue
- [x] v3: Multi-platform (FCM + APNs) abstraction
- [x] v4: Batching (FCM multicast, token grouping)
- [x] v5: Kafka pipeline
- [x] v6: Dedupe processor
- [x] v7: Scale to 120M+ daily
- [x] v8: Templating + personalization

EN draft complete (not pushed). 2 IMAGE_PLACEHOLDER prompts (hero end-state diagram, double-buzz concept). TH pending.

Key experience: PayPay push notification service (120M+ daily notifications)

---

### 2. Delivery System (Multi-channel)

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

### 3. Webhook Callback System

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

### 4. Icon Management / Segmentation

File: `design-icon-management-segmentation.mdx` / `-th.mdx`

- [ ] v1: Static icons per campaign
- [ ] v2: Per-segment icon mapping
- [ ] v3: Dynamic attribute-based selection
- [ ] v4: Cache invalidation strategy
- [ ] v5: A/B testing icon variants
- [ ] v6: ML-driven CTR optimization

Key experience: PayPay personalized asset delivery (Akka -> Spring Boot Kotlin, 8K RPS)

---

### 5. Audience Platform (ETL Pipeline)

File: `design-audience-platform.mdx` / `-th.mdx`

- [ ] v1: Inline SQL query at send time
- [ ] v2: Nightly batch pre-computation
- [ ] v3: Spark jobs for complex rules
- [ ] v4: Data lake integration
- [ ] v5: Near real-time eligibility (streaming)
- [ ] v6: Reusable segmentation service

Key experience: PayPay Spark-Scala ETL jobs, audience grouping, data lake migration

---

### 6. Campaign Management Platform

File: `design-campaign-management-platform.mdx` / `-th.mdx`

- [ ] v1: Simple CRUD app
- [ ] v2: Scheduling + concurrent campaigns
- [ ] v3: Approval workflow (state machine)
- [ ] v4: Budget caps (distributed counting)
- [ ] v5: A/B testing + traffic splitting
- [ ] v6: Multi-tenant with access control

Key experience: PayPay campaign management platform (3M yen SMS savings)

---

### 7. Cashback System

File: `design-cashback-system.mdx` / `-th.mdx`

- [ ] v1: Balance column (add/subtract)
- [ ] v2: Transaction log (append-only)
- [ ] v3: Idempotency keys for dedup
- [ ] v4: Expiry + scheduled jobs
- [ ] v5: Double-entry ledger (debit/credit)
- [ ] v6: Reconciliation against payment system
- [ ] v7: Scale (partitioning, reporting)

Key experience: Payment processing background, ledger experience from PayPay/Coda

---

## Cross-Linking Strategy

- Each post references the others where relevant
- Series index at the top of each post
- Mermaid diagrams use consistent styling

## File Naming

| Post | EN file | TH file |
|------|---------|---------|
| 1 | design-push-notification-system.mdx | design-push-notification-system-th.mdx |
| 2 | design-delivery-system.mdx | design-delivery-system-th.mdx |
| 3 | design-webhook-callback-system.mdx | design-webhook-callback-system-th.mdx |
| 4 | design-icon-management-segmentation.mdx | design-icon-management-segmentation-th.mdx |
| 5 | design-audience-platform.mdx | design-audience-platform-th.mdx |
| 6 | design-campaign-management-platform.mdx | design-campaign-management-platform-th.mdx |
| 7 | design-cashback-system.mdx | design-cashback-system-th.mdx |

## Tags

- Posts 1-6: Software Architecture, Software Engineering, Backend
- Post 7 (Cashback): Software Architecture, Software Engineering, Backend, FinTech

## Writing Guidelines

- Follow TP Coder writing persona (learner voice, data-driven, honest about failures)
- No quotes in body text
- No banned Thai keywords (จริง, ชัดเจน, เปลี่ยนเกม, เอาแบบตรง ๆ, เล่าให้ฟัง, ไม่ใช่แค่...แต่)
- No ___ in content
- MermaidDiagram component at `../../components/blog/MermaidDiagram.astro`
- Target depth: 500-700 lines per post (similar to Stripe integration reference)
