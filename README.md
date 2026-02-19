# 🎫 LLM-Powered-Support-Ticket-System

A full-stack **Support Ticket System** built with **Django, Django REST Framework, React, PostgreSQL, and Docker**, featuring LLM-powered automatic ticket classification and priority suggestion.

This project demonstrates end-to-end system design, backend API development, database-level aggregations, LLM integration, and frontend state management.

---

## 🚀 Project Overview

Users can:

- Submit support tickets  
- Receive AI-based category and priority suggestions  
- Override AI suggestions before submission  
- Browse, filter, and search tickets  
- Update ticket status  
- View real-time aggregated statistics  

The system is fully containerized and runs with a single command:

```bash
docker-compose up --build
```

---

## 🧠 LLM Integration (Core Feature)

When a user writes a ticket description, the system:

1. Calls an LLM API  
2. Automatically suggests:
   - **Category**: billing, technical, account, general  
   - **Priority**: low, medium, high, critical  
3. Pre-fills the form fields  
4. Allows the user to accept or override suggestions  

### Key Features

- API key configured via environment variable  
- Graceful fallback if the LLM fails  
- Prompt included in the codebase  
- Clean structured JSON response  

---

## 🛠️ Tech Stack

### Backend

- Django  
- Django REST Framework  
- PostgreSQL  
- ORM-level aggregation for statistics  

### Frontend

- React  
- Axios for API integration  
- Component-based structure  
- Live filtering + search  
- Auto-refreshing dashboard  

### Infrastructure

- Docker  
- Docker Compose  
- Automatic migrations on startup  
- Environment-based configuration  

---

## 📦 Features

### 1️⃣ Ticket Creation

- Title (required, max 200 characters)  
- Description (required)  
- LLM-suggested category & priority  
- Editable dropdowns  
- Optimistic UI update  

---

### 2️⃣ Ticket Management

- List tickets (newest first)  
- Filter by:
  - Category  
  - Priority  
  - Status  
- Search (title + description)  
- Update status (open → in_progress → resolved → closed)  

---

### 3️⃣ Stats Dashboard

Uses database-level aggregation with Django ORM (`annotate`, `aggregate`).

Provides:

- Total tickets  
- Open tickets  
- Average tickets per day  
- Priority breakdown  
- Category breakdown  

Auto-refreshes when a new ticket is submitted.

---

## 🗂️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/api/tickets/` | Create ticket |
| GET | `/api/tickets/` | List + filter + search |
| PATCH | `/api/tickets/<id>/` | Update ticket |
| POST | `/api/tickets/classify/` | LLM classification |
| GET | `/api/tickets/stats/` | Aggregated metrics |

---

## 🧱 Data Model

### Ticket Fields

- `title`
- `description`
- `category`
- `priority`
- `status`
- `created_at`

All constraints are enforced at the **database level**.

---

## 🐳 Running the Project

```bash
docker-compose up --build
```

### Requirements

- Docker  
- Valid LLM API key (set in `.env` file or `docker-compose.yml`)  

---
