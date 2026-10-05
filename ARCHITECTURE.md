# Architecture — Hanif Mobile Care Solutions

## Product side
Customer → Browse/Search → Product Details → Cart/Wishlist → Checkout → Payment → Order → Shipping → Review

## Service side
Customer → Service Catalog → Service Details → Book Service → Appointment → Technician/Service Center → Repair Status → Completion → Review

## Admin side
Admin → Dashboard → Products / Categories / Inventory / Orders / Payments / Coupons / Reviews / Customers / Services / Appointments / Technicians / Service Centers / Shipping / Settings

## Separation of concerns
- Next.js handles presentation, routing and client-side application concerns.
- Express handles API, authentication, authorization and business workflows.
- MongoDB/Mongoose handles persistence and domain models.
- Repositories isolate database access.
- Services contain business rules.
- Controllers coordinate HTTP requests/responses.
- Validators protect incoming API payloads.
