# DemandSync Back-end (FastAPI + SQLAlchemy)

Backend that matches your slide: departments, categories, product_types, products,
suppliers, orders, order_items, inventory_logs, market_data (mock), procurement_alerts,
disruptions (flags), forecasts, kpi_snapshots.

## Quick start
```bash
python -m venv .venv && source .venv/bin/activate    # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env  # edit if you want Postgres
uvicorn app.main:app --reload
```
Open http://127.0.0.1:8000/docs
