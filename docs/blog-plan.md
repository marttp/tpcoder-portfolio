# Blog Plan

## Publishing Roadmap

The plan uses a weekly cadence. Engineering foundation articles go out on Wednesday. The connected AI architecture series goes out on Saturday.

| Order | Published date | Article | Visual budget |
| --- | --- | --- | --- |
| 1 | Wednesday, 12 August 2026 | Architecture Decision Records in Practice | 4 visuals: 1 designed image + 3 Mermaid diagrams |
| 2 | Wednesday, 19 August 2026 | Practical Observability by TP Coder | 11 visuals: 3 designed images + 3 official product images + 5 Mermaid diagrams |
| 3 | Saturday, 29 August 2026 | Give Your AI Agent an Identity | 6 visuals: 2 designed images + 4 Mermaid diagrams |
| 4 | Saturday, 5 September 2026 | How I Think About Designing Irreversible Actions in the AI Agent Era | 7 visuals: 2 designed images + 5 Mermaid diagrams |
| 5 | Saturday, 12 September 2026 | AI Governance Is Becoming a Software Architecture Problem | 6 visuals: 2 designed images + 4 Mermaid diagrams |

Each designed-image budget includes one hero image. Mermaid is the default for architecture, flow, state, and sequence diagrams. A second designed image is useful only for a concept that Mermaid cannot explain well. This keeps each article visual without turning every diagram into a large image.

The articles publish about one week apart. The ten-day gap before the AI series gives the two engineering foundation posts room to breathe. The AI series begins with identity, moves to high-impact actions, and ends with governance because each article can reuse the foundation from the previous one.

## Shared Storytelling Shape

Each article should follow one connected story:

1. Open with a familiar problem or question.
2. Show the smallest version that works.
3. Add a practical constraint that breaks the simple version.
4. Compare the available choices and their trade-offs.
5. Build the safer or more useful version step by step.
6. End with what I would choose and when I would choose something else.

Use hypothetical situations when personal experience is not available. Keep experience, evidence, and opinion separate.

## Article Directions

### Architecture Decision Records in Practice

**Published date:** Wednesday, 12 August 2026

**Target length:** About 1,200–1,600 English words. Keep this article smaller than the flagship guides.

**Central claim:** An ADR keeps the reason behind a decision. It should not become paperwork that only protects the past.

**Story opening:** A team can see the architecture, but nobody remembers why it was built that way. A new engineer suggests replacing part of it, and the old discussion starts again.

**Story flow:**

1. Start with a decision that exists only in chat, a meeting, or one person's memory.
2. Introduce the smallest useful ADR: context, options, decision, trade-offs, and consequences.
3. Walk through one example from problem to final decision.
4. Explain status and how a new ADR supersedes an old decision without rewriting history.
5. End with when an ADR helps and when a small decision does not need one.

**Visual plan:**

- Hero: engineers following the history behind an architecture decision
- Mermaid: a decision disappearing across chat, meetings, and staff changes
- Mermaid: one worked decision from context and options to consequences
- Mermaid: the ADR lifecycle from proposed to accepted or superseded

### Practical Observability by TP Coder

**Published date:** Wednesday, 19 August 2026

**Central claim:** Observability helps us ask new questions about a running system. Collecting many logs and metrics does not guarantee that we can explain a user problem.

**Story opening:** A user reports that an operation is slow or failed, while the main dashboard still looks healthy.

**Story flow:**

1. Begin with the user's failed journey, not the monitoring tools.
2. Build the smallest view using a health check and a few service metrics.
3. Show why this view fails when one request crosses several services.
4. Add logs, metrics, traces, events, and shared context only when each answers a question.
5. Follow one request from the user through the system and back.
6. Turn the important user outcome into an SLI, SLO, and useful alert.
7. Cover cardinality, sampling, retention, cost, and sensitive data.
8. End with how an incident should improve the next investigation.

**Visual plan:**

- Hero: an engineer investigating one failed user journey across a system
- Mermaid: user request across services and dependencies
- Mermaid: logs, metrics, traces, and events answering different questions
- Mermaid: trace and correlation context moving through the request
- Mermaid: symptom, SLI, SLO, alert, investigation, and learning loop
- Mermaid: observability maturity from health checks to explainable user journeys
- Designed concept: a green dashboard beside one failed customer request
- Designed infographic: metrics, logs, traces, and business events around one checkout
- Official diagram: OpenTelemetry Collector receivers, processors, and exporters
- Official screenshot: Grafana Explore with Loki and LogQL
- Official screenshot: Grafana Tempo query builder and trace results

### Give Your AI Agent an Identity

**Published date:** Saturday, 29 August 2026

**Central claim:** An AI agent should have an identity, permissions, and an owner, similar to a service or an employee in cloud architecture.

**Story opening:** We would not give every employee and service one shared administrator account. An AI agent should not receive one either.

**Story flow:**

1. Start with how cloud systems identify users, employees, workloads, and services.
2. Add one AI agent that can read data and call tools.
3. Ask whether the agent acts as itself, as a service, or on behalf of a person.
4. Show how a shared identity breaks ownership, audit, revocation, and least privilege.
5. Design an agent identity with scoped access and short-lived credentials.
6. Add delegation when one user or agent asks another agent to act.
7. Record the full chain: user, agent, tool, action, approval, and result.
8. End with revocation, ownership changes, and agent retirement.

**Visual plan:**

- Hero: an AI agent receiving an identity badge beside a service and an employee
- Mermaid: user, employee, service, and agent identity comparison
- Mermaid: agent acting as itself versus on behalf of a user
- Mermaid: short-lived credential and scoped-access flow
- Mermaid: user-to-agent-to-agent delegation and audit chain
- Designed concept: one shared admin identity versus separate owned identities

### How I Think About Designing Irreversible Actions in the AI Agent Era

**Published date:** Saturday, 5 September 2026

**Central claim:** An AI agent may propose or request an action, but the surrounding system must own safety, execution, and recovery.

**Story opening:** A normal information system already sends messages, moves money, deletes data, and changes access. These actions can fail. What changes when a non-deterministic AI agent decides to perform them?

**Story flow:**

1. Start with one conventional information system and one high-impact action.
2. Separate actions into reversible, compensatable, and irreversible cases.
3. Show how deterministic systems use validation, state machines, idempotency, transaction boundaries, retries, and audit logs.
4. Walk through recovery using undo, compensation, reconciliation, or manual work.
5. Place an AI agent above the same system and give it a goal.
6. Explain why an 80–90% evaluation result still leaves unsafe cases.
7. Separate the non-deterministic plan from deterministic execution.
8. Add risk-based approval, preview mode, limited permissions, policy checks, postcondition checks, and a kill switch.
9. Run the same failure through the human-operated and agent-operated designs.
10. End with where an agent may act alone and where a person or another system must approve.

**Visual plan:**

- Hero: an AI agent paused before a one-way action while the system checks its request
- Mermaid: reversible, compensatable, and irreversible action paths
- Mermaid: conventional system failure and recovery flow
- Mermaid: non-deterministic planning behind a deterministic execution boundary
- Mermaid: risk classification leading to allow, preview, approval, or deny
- Mermaid: intent, decision, approval, execution, postcondition, and audit sequence
- Designed concept: the same action performed by a person and by an AI agent

### AI Governance Is Becoming a Software Architecture Problem

**Published date:** Saturday, 12 September 2026

**Central claim:** Governance requirements must become part of the system design. A policy document cannot enforce them by itself.

**Story opening:** An AI prototype works. Before it becomes a product, people ask who owns it, what data it used, why it acted, and how to stop it. The prototype cannot answer.

**Story flow:**

1. Start with the gap between a useful prototype and an accountable production system.
2. Turn governance questions into technical requirements.
3. Build an inventory of models, prompts, tools, data, agents, owners, and versions.
4. Reuse agent identity and action controls from the previous two articles.
5. Add approval policy, evaluation gates, audit history, data retention, and post-deployment monitoring.
6. Walk through a change to a model or prompt and show what must be reviewed and recorded.
7. Walk through an incident and show how to limit, stop, investigate, and recover.
8. Separate controls that every system needs from controls that depend on risk.
9. End with a small governance architecture that could grow into a future TP Coder service or business.

**Visual plan:**

- Hero: an AI product connected to owners, policies, data, monitoring, and approval
- Mermaid: governance questions becoming architecture requirements
- Mermaid: model, prompt, tool, data, agent, version, and owner inventory
- Mermaid: change moving through evaluation, approval, deployment, and monitoring
- Mermaid: incident containment, investigation, recovery, and follow-up
- Designed concept: an AI prototype growing into an accountable production system
