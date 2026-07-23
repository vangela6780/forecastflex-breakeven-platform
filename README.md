# forecastflex-breakeven-platform

# ForecastFlex Breakeven & Profitability Analysis Platform

> A secure multi-tenant web application designed to track financial viability, overhead, and breakeven performance across granular geographic tiers.

---

## 📌 Project Overview

Multi-level enterprise operations often struggle to evaluate accurate product and service viability when hidden operational costs are siloed. **ForecastFlex** solves this by rolling up store-level metrics through a 6-tier geographic hierarchy to give stakeholders a clear, real-time viability score (0–100) and mapping dashboard.

### Core Architecture & Tech Stack
* **Frontend:** 
* **Backend:** 
* **Database:** 
* **Authentication:** 

---

## 🗺️ Geographic Hierarchy

The platform rolls up performance metrics across 6 distinct levels:
1. **Store Zip Code** (Granular Unit)
2. **City**
3. **State**
4. **Region**
5. **Country**
6. **Company Rollup**

---

## 🔐 Role-Based Access Control (RBAC)

The application enforces strict server-side scoping across five key user roles:
* **Sales Rep:** Restricted to store-level performance metrics.
* **Store Manager:** Full data entry rights and store dashboard access.
* **Regional Manager:** Cross-store comparisons and regional analytics.
* **CEO / Executive:** Company-wide map visualization and executive summaries.
* **Admin:** Full user, role, and configuration management.

---

## 📅 Project Timeline & Milestones

* **Phase 1 (Jul 25 – Jul 31):** Scope Finalization, DB Schema & Auth Setup
* **Phase 2 (Aug 1 – Aug 6):** Data Ingestion (CSV/Manual) & Calculation Engine
* **Phase 3 (Aug 7 – Aug 8):** Map Dashboard Integration & End-to-End Testing
* **Phase 4 (Aug 9 – Aug 10):** Production Deployment & Final Presentation

---

## 📄 Project Documentation
* [Project Scope Document](./docs/scopeDocument.md)
* [Project Presentation & Architecture](./docs/ForecastFlexPresentation.md)
