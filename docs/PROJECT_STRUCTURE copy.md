# Hanif Mobile Care Solutions — Project Structure

A production-oriented full-stack monorepo for a **mobile/electronics e-commerce + repair/service platform**.

## Stack
- Frontend: Next.js App Router + React
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Architecture: Monorepo with separate `client` and `server`

## Business Domains
1. E-commerce — products, categories, cart, wishlist, checkout, orders, payments, shipping, inventory, coupons and reviews.
2. Services — repair/service catalog, service booking, repair tracking/status, service centers and technicians.
3. Customer account — profile, addresses, orders, appointments, wishlist, notifications and settings.
4. Admin — product/service management, inventory, orders, payments, coupons, reviews, customers, service centers and technicians.

## Frontend organization
- `src/app/` — route segments and App Router pages only.
- `src/components/` — globally reusable UI, commerce, service, forms, navigation and feedback components.
- `src/sections/` — page/feature-specific sections; pages should compose these instead of holding large section implementations.
- `src/lib/` — frontend utilities and domain helpers.
- `src/services/` — API/service integration layer.
- `src/context/`, `src/store/` — client state/context when required.

## Backend organization
Each business domain has dedicated folders under models/controllers/routes/services/validators/repositories. This keeps product commerce and service/repair logic independent and maintainable.

## Important rule
Do not place page-specific UI inside reusable component folders. Do not put business logic directly inside route/page files. Keep domain logic in the appropriate service/controller/repository layer.
