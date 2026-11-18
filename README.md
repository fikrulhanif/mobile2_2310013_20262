# React Native App - Mobile Programming 2 Praktikum

Monorepo untuk project praktikum Mobile Programming 2 (React Native + Laravel).

## Project Structure

```
ReactNativeApp/
├── frontend/     # React Native/Expo mobile app
└── backend/      # Laravel 13 REST API
```

## Quick Start

### Frontend (React Native/Expo)

```bash
cd frontend
npm install
npx expo start
```

Scan QR code dengan Expo Go app.

### Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

API akan berjalan di `http://localhost:8000`

## Tech Stack

- **Frontend:** React Native 0.88 + Expo SDK 58 + TypeScript
- **Backend:** Laravel 13 + MySQL/SQLite
- **API:** RESTful JSON + Laravel Sanctum (token auth)

## Documentation

- [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) - Detailed project context & history
- [frontend/README.md](./frontend/README.md) - Frontend-specific docs
- [backend/README.md](./backend/README.md) - Backend-specific docs (TBD)

## Development

### Commands

```bash
# Frontend
cd frontend
npm run lint           # ESLint check
npx tsc --noEmit      # TypeScript check

# Backend
cd backend
php artisan test      # Run tests
php artisan route:list # List all API routes
```

### Git Workflow

This is a monorepo. Both frontend and backend are in one repository.

```bash
# Commit changes
git add .
git commit -m "feat: add user authentication"
git push

# Pull latest
git pull
cd frontend && npm install   # Update frontend deps if needed
cd ../backend && composer install  # Update backend deps if needed
```

## Status

- ✅ Modul 1-10: UI completed (login, tabs, home, produk screens)
- 🚧 Backend API: In progress
- ⏳ API Integration: Pending

## License

MIT (for educational purposes)
