# LLM-Powered-Support-Ticket-System
A full-stack Support Ticket System built with Django, Django REST Framework, React, PostgreSQL, and Docker, featuring LLM-powered automatic ticket classification and priority suggestion.  This project demonstrates end-to-end system design, backend API development, database-level aggregations, LLM integration, frontend state management

🚀 Project Overview

Users can:

Submit support tickets

Receive AI-based category and priority suggestions

Override AI suggestions before submission

Browse, filter, and search tickets

Update ticket status

View real-time aggregated statistics

The system is fully containerized and runs with a single command:

docker-compose up --build

🧠 LLM Integration (Core Feature)

When a user writes a ticket description, the system:

Calls an LLM API

Automatically suggests:

category (billing, technical, account, general)

priority (low, medium, high, critical)

Pre-fills the form fields

Allows the user to accept or override suggestions

Key Features:

API key configured via environment variable

Graceful fallback if LLM fails

Prompt included in codebase

Clean structured JSON response

🛠️ Tech Stack
Backend

Django

Django REST Framework

PostgreSQL

ORM-level aggregation for statistics

Frontend

React

Axios for API integration

Component-based structure

Live filtering + search

Auto-refreshing dashboard

Infrastructure

Docker

Docker Compose

Automatic migrations on startup

Environment-based configuration

📦 Features
1️⃣ Ticket Creation

Title (required, max 200 chars)

Description (required)

LLM-suggested category & priority

Editable dropdowns

Optimistic UI update

2️⃣ Ticket Management

List tickets (newest first)

Filter by:

Category

Priority

Status

Search (title + description)

Update status (open → in_progress → resolved → closed)

3️⃣ Stats Dashboard

Database-level aggregation using Django ORM (annotate, aggregate).

Provides:

Total tickets

Open tickets

Average tickets per day

Priority breakdown

Category breakdown

Auto-refreshes on ticket creation.

🗂️ API Endpoints
Method	Endpoint	Description
POST	/api/tickets/	Create ticket
GET	/api/tickets/	List + filter + search
PATCH	/api/tickets/<id>/	Update ticket
POST	/api/tickets/classify/	LLM classification
GET	/api/tickets/stats/	Aggregated metrics
🧱 Data Model

Ticket fields:

title

description

category

priority

status

created_at

All constraints enforced at the database level.

🐳 Running the Project
docker-compose up --build


Requirements:

Docker

Valid LLM API key (set in .env or docker-compose)
