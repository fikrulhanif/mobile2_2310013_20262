# PROJECT CONTEXT - Mobile Programming 2 (Praktikum)

## Overview

Project ini adalah tugas praktikum mata kuliah Mobile Programming 2 yang dikerjakan secara bertahap dari Modul 1 hingga Modul 10. Project menggunakan React Native dengan Expo SDK 58 untuk frontend mobile app, dan akan menggunakan Laravel 13 untuk backend API.

**Status Saat Ini:** Modul 1-10 sudah selesai (UI only, belum connect ke backend)

---

## Project Structure (Setelah Rename)

```
D:\College\Mobile2\
└── ReactNativeApp/                  ← Folder pembungkus (dibuat manual)
    ├── frontend/                    ← React Native/Expo (rename dari Praktikum1)
    │   ├── src/
    │   │   ├── app/
    │   │   │   ├── index.tsx        ← Redirect ke /login
    │   │   │   ├── login.tsx        ← Login screen
    │   │   │   ├── register.tsx     ← Register screen
    │   │   │   ├── _layout.tsx      ← Root layout
    │   │   │   └── (tabs)/          ← Tab navigator
    │   │   │       ├── _layout.tsx  ← Tab layout config
    │   │   │       ├── home.tsx     ← Beranda (menu grid)
    │   │   │       ├── produk.tsx   ← Katalog produk
    │   │   │       ├── transaksi.tsx
    │   │   │       ├── report.tsx
    │   │   │       └── profil.tsx
    │   │   └── styles/
    │   │       ├── authStyles.ts    ← Login/Register styling
    │   │       ├── homeStyles.ts    ← Home screen styling
    │   │       └── tabStyles.ts     ← Tab navigation styling
    │   ├── package.json
    │   ├── app.json
    │   ├── tsconfig.json
    │   └── AGENTS.md                ← Expo-specific agent rules
    │
    └── backend/                     ← Laravel 13 API (belum dibuat)
        └── (akan dibuat kemudian)
```

---

## Tech Stack

### Frontend (Sudah Ada)

- **Framework:** React Native 0.88.0 + Expo SDK 58
- **Routing:** Expo Router (file-based routing)
- **Language:** TypeScript
- **UI Components:** React Native built-in + @expo/vector-icons (Ionicons)
- **State Management:** React Hooks (useState, useLocalSearchParams)
- **Package Manager:** npm (ada package-lock.json)

### Backend (Rencana)

- **Framework:** Laravel 13
- **Database:** MySQL/MariaDB (atau SQLite untuk development)
- **API Format:** RESTful JSON API
- **Authentication:** Laravel Sanctum (untuk token-based auth)
- **Location:** Folder `backend/` sejajar dengan `frontend/`

---

## Modul yang Sudah Dikerjakan (1-10)

### Modul 1-2: Setup & Auth UI

- Init Expo project dengan TypeScript
- File-based routing dengan Expo Router
- Login screen (`/login`) dengan:
  - Email & password input
  - Show/hide password toggle
  - Focus state styling
  - Validasi input kosong
- Register screen (`/register`)
- Redirect dari root (`/`) ke `/login`
- **Status:** UI only, belum connect ke API

### Modul 3-5: Tab Navigation & Home

- Tab navigation dengan 5 tabs:
  - Home (Beranda)
  - Produk (Katalog Produk)
  - Transaksi
  - Report (Laporan)
  - Profil (Profil Pengguna)
- Home screen dengan:
  - Welcome card (menampilkan email dari params)
  - Menu grid (Produk, Pelanggan, Supplier, Barang Masuk, Barang Keluar)
  - Status badge "Berhasil Masuk (UI Mode)"
- Tab bar styling dengan safe area insets
- Header styling konsisten

### Modul 6-10: Produk & Styling

- Produk screen (placeholder, siap dikembangkan)
- Transaksi screen (placeholder)
- Report screen (placeholder)
- Profil screen (placeholder)
- Styling system:
  - `authStyles.ts` - Modern, clean, light theme
  - `homeStyles.ts` - Card-based, marketplace style
  - `tabStyles.ts` - Bottom tab navigation
  - Color palette: Blue (#2563EB), Green (#059669), Amber (#D97706), dll
  - Typography: System fonts, weight 600-800
  - Shadows & elevations
  - Border radius: 12-22px

---

## Coding Style & Conventions

### **PENTING:** Style yang Harus Diikuti

1. **Jangan tambahkan komentar AI/emoji:**
   - ❌ `// TODO: Implement later 🚀`
   - ❌ `// 🎯 Main function for handling...`
   - ✅ Komentar hanya jika memang diperlukan untuk dokumentasi teknis

2. **Ikuti style modul yang sudah ada:**
   - Lihat `login.tsx`, `home.tsx`, `authStyles.ts` sebagai referensi
   - Gunakan pola yang sama untuk komponen baru
   - Konsisten dengan naming, spacing, dan struktur

3. **TypeScript strict typing:**
   - Semua props harus di-type
   - Gunakan interfaces untuk complex types
   - Hindari `any`

4. **Component structure:**

   ```tsx
   import { ... } from "react-native";
   import { ... } from "expo-router";
   import { styles } from "@/styles/...";

   export default function ScreenName() {
     const [state, setState] = useState(...);

     const handleAction = () => {
       // logic
     };

     return (
       <SafeAreaView>
         {/* UI */}
       </SafeAreaView>
     );
   }
   ```

5. **Styling patterns:**
   - Semua style di file terpisah (`src/styles/`)
   - Gunakan `StyleSheet.create()`
   - Naming: `camelCase` untuk style keys
   - Grouping logis (container, text, button, dll)

6. **Imports:**
   - React Native components first
   - Third-party libraries (expo-router, @expo/vector-icons)
   - Local imports dengan alias `@/` (tsconfig paths)

---

## Workflow dengan Modul Baru

### **PENTING:** Proses yang Harus Diikuti

1. **Jangan langsung coding** saat dapat modul baru
2. **Baca modul dulu**, lalu:
   - Jelaskan apa yang diminta
   - Identifikasi file yang perlu dibuat/diubah
   - Tanyakan jika ada ambiguitas
   - Tunggu konfirmasi sebelum mulai coding
3. **Setelah dapat konfirmasi**, baru mulai implementasi
4. **Ikuti persis** instruksi modul, jangan tambah fitur ekstra

---

## Post-Rename Tasks (WAJIB DIKERJAKAN)

### Task 1: Cleanup Expo Cache

Setelah rename folder, cache Expo harus dihapus karena berisi absolute paths.

```bash
cd D:\College\Mobile2\ReactNativeApp\frontend

# WAJIB: Hapus .expo cache
Remove-Item -Recurse -Force .expo

# OPSIONAL: Hapus node_modules jika ada error
# Remove-Item -Recurse -Force node_modules
# npm install

# Test dengan clear cache
npx expo start --clear
```

**Catatan:**

- `.expo/` folder **WAJIB** dihapus (berisi Metro bundler cache dengan absolute paths)
- `node_modules/` **OPSIONAL**, reinstall hanya jika ada error "module not found" setelah rename
- Kalau `npx expo start --clear` jalan normal, **skip** reinstall `node_modules`

---

### Task 2: Restructure Git untuk Monorepo

Project ini menggunakan **monorepo structure** (satu repo untuk frontend + backend).

#### Current State:

```
Praktikum1/                     ← Git repo existing (sudah push ke GitHub)
├── .git/
├── .gitignore
├── src/
├── package.json
└── ...
```

#### Target State:

```
ReactNativeApp/                 ← Git root (monorepo)
├── .git/                       ← Moved dari frontend/
├── .gitignore                  ← Updated untuk monorepo
├── README.md                   ← Dokumentasi monorepo
├── PROJECT_CONTEXT.md          ← File ini
├── frontend/                   ← React Native/Expo (rename dari Praktikum1)
│   ├── src/
│   ├── package.json
│   ├── node_modules/           ← Git ignored
│   └── .expo/                  ← Git ignored
└── backend/                    ← Laravel (belum dibuat)
    ├── app/
    ├── composer.json
    ├── vendor/                 ← Git ignored
    └── .env                    ← Git ignored
```

#### Step-by-Step Commands:

**Sebelum Rename (di sesi ini):**

```bash
cd D:\College\Mobile2\Praktikum1

# 1. Check Git status
git status
git log --oneline -5

# 2. Push semua uncommitted changes
git add .
git commit -m "checkpoint before monorepo restructure"
git push
```

**Setelah Rename (di sesi baru, AI yang kerjakan):**

```bash
# Asumsi struktur sudah jadi:
# D:\College\Mobile2\ReactNativeApp\
#   └── frontend\  (isi dari Praktikum1, termasuk .git folder)

cd D:\College\Mobile2\ReactNativeApp

# 1. Move .git dari frontend/ ke root monorepo
Move-Item -Path .\frontend\.git -Destination .

# 2. Move .gitignore ke root (akan di-update)
Move-Item -Path .\frontend\.gitignore -Destination .

# 3. Verify Git masih jalan
git status
git log --oneline -3  # History harus tetap ada

# 4. Update .gitignore untuk monorepo (lihat Task 3)

# 5. Commit restructure
git add .
git commit -m "refactor: restructure to monorepo (frontend + backend folders)"
git push

# 6. Verify di GitHub - struktur folder harus update
```

**Error Handling:**

- Kalau `git push` error "rejected", cek remote: `git remote -v`
- Kalau remote masih pointing ke repo lama, tidak perlu ubah (cuma struktur file yang berubah)
- Kalau conflict, force push: `git push --force-with-lease` (hati-hati!)

---

### Task 3: Update .gitignore untuk Monorepo

File `.gitignore` harus di-update untuk ignore files dari frontend DAN backend.

**Action:** Replace isi `.gitignore` root dengan:

```gitignore
# === MONOREPO ROOT ===
PROJECT_CONTEXT.md.backup
*.log
.DS_Store
Thumbs.db

# === FRONTEND (React Native/Expo) ===
frontend/node_modules/
frontend/.expo/
frontend/dist/
frontend/npm-debug.*
frontend/*.jks
frontend/*.p8
frontend/*.p12
frontend/*.key
frontend/*.mobileprovision
frontend/*.orig.*
frontend/web-build/
frontend/.env

# === BACKEND (Laravel) ===
backend/vendor/
backend/node_modules/
backend/.env
backend/.env.backup
backend/.phpunit.result.cache
backend/Homestead.json
backend/Homestead.yaml
backend/auth.json
backend/npm-debug.log
backend/yarn-error.log
backend/.idea/
backend/.vscode/
backend/*.swp
backend/*.swo
backend/*~
backend/.DS_Store
backend/storage/*.key
backend/public/storage
backend/public/hot

# Laravel specific
backend/storage/framework/cache/*
backend/storage/framework/sessions/*
backend/storage/framework/testing/*
backend/storage/framework/views/*
backend/storage/logs/*
!backend/storage/framework/cache/.gitignore
!backend/storage/framework/sessions/.gitignore
!backend/storage/framework/testing/.gitignore
!backend/storage/framework/views/.gitignore
!backend/storage/logs/.gitignore
```

**Catatan:**

- Jangan hapus `.gitignore` yang ada di `frontend/` jika masih ada (tidak conflict)
- Root `.gitignore` bisa coexist dengan subfolder `.gitignore`
- Laravel akan generate `.gitignore` sendiri di `backend/` nanti

---

### Task 4: Verify Post-Rename Setup

Checklist yang harus dipastikan setelah semua task di atas:

#### Frontend Check:

```bash
cd D:\College\Mobile2\ReactNativeApp\frontend

# 1. Dependencies OK
npm install  # Jika belum
ls node_modules  # Harus ada isinya

# 2. Expo start OK
npx expo start --clear  # Harus bisa start

# 3. Type check OK
npx tsc --noEmit  # Harus no error

# 4. Lint OK
npx expo lint  # Harus no critical error
```

#### Git Check:

```bash
cd D:\College\Mobile2\ReactNativeApp

# 1. Git status clean (atau hanya untracked backend/ jika sudah install Laravel)
git status

# 2. History intact
git log --oneline -10  # Semua commit lama harus masih ada

# 3. Remote OK
git remote -v  # Harus pointing ke GitHub repo yang benar

# 4. Struktur di GitHub match lokal
# Buka https://github.com/username/repo-name
# Harus ada folder frontend/ dan backend/ (setelah push)
```

#### Documentation Check:

```bash
cd D:\College\Mobile2\ReactNativeApp

# File-file ini harus ada di root:
ls PROJECT_CONTEXT.md  # ✅
ls README.md           # ✅ (create jika belum ada)
ls .gitignore          # ✅
ls .git/               # ✅
```

---

### Task 5: Create Monorepo README.md

Setelah restructure, buat `README.md` di root monorepo untuk dokumentasi.

**Action:** Create file `D:\College\Mobile2\ReactNativeApp\README.md`:

```markdown
# React Native App - Mobile Programming 2 Praktikum

Monorepo untuk project praktikum Mobile Programming 2 (React Native + Laravel).

## Project Structure
```

ReactNativeApp/
├── frontend/ # React Native/Expo mobile app
└── backend/ # Laravel 13 REST API

````

## Quick Start

### Frontend (React Native/Expo)

```bash
cd frontend
npm install
npx expo start
````

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

````

---

## Rencana Next Steps (Post-Rename & Setup)

### Step 1: Setup Backend Laravel
- [ ] Install Laravel 13 di folder `backend/`
- [ ] Setup database (MySQL/SQLite)
- [ ] Konfigurasi CORS untuk accept request dari mobile
- [ ] Install Laravel Sanctum untuk API authentication

### Step 2: Backend API Development
- [ ] Migration & Model: User, Product, Customer, Supplier, Stock
- [ ] API Routes: `/api/register`, `/api/login`, `/api/logout`
- [ ] API Routes: CRUD untuk products, customers, suppliers
- [ ] Sanctum token authentication
- [ ] Validation & error handling

### Step 3: Frontend Integration
- [ ] Setup axios instance dengan base URL
- [ ] Auth context (login state management)
- [ ] API service layer (auth, products, dll)
- [ ] Connect login/register ke Laravel API
- [ ] Token storage (AsyncStorage)
- [ ] Protected routes (redirect jika belum login)
- [ ] Connect produk screen ke API
- [ ] Error handling & loading states

### Step 4: Advanced Features (Modul Lanjutan)
- [ ] Transaksi flow (cart, checkout)
- [ ] Laporan (report generation)
- [ ] Profil management
- [ ] Image upload (produk photos)
- [ ] Barcode scanner
- [ ] Push notifications

---

## Environment Info

- **OS:** Windows
- **Shell:** PowerShell
- **Current Workspace:** `d:\College\Mobile2\Praktikum1` (akan di-rename ke `frontend`)
- **Monorepo Path:** `D:\College\Mobile2\ReactNativeApp\` (frontend + backend)

---

## Notes untuk AI Assistant

1. **Context persistence:**
   - File ini akan dibaca di sesi baru setelah rename folder
   - Semua info penting sudah ter-capture di sini

2. **Dependencies sudah installed:**
   - Jangan re-install jika tidak perlu
   - Cek `package.json` untuk versi yang dipakai

3. **Expo SDK version:**
   - SDK 58 (bleeding edge di 2025)
   - **WAJIB cek docs:** `https://docs.expo.dev/versions/v58.0.0/` sebelum pakai API
   - Jangan andalkan training data yang mungkin outdated

4. **Verification checklist** sebelum declare task done:
   - [ ] `npx expo lint` (no errors)
   - [ ] `npx tsc --noEmit` (type check passed)
   - [ ] Manual test di emulator/Expo Go
   - [ ] Code style match dengan existing files

5. **Git workflow:**
   - Project mungkin belum init git (cek dulu)
   - Jika perlu commit, tanya dulu

6. **Yang harus ditanyakan, bukan diasumsikan:**
   - Struktur database untuk backend
   - Field names untuk model/migration
   - API response format (JSON structure)
   - Error handling strategy
   - Validation rules

---

## Quick Commands Reference

```bash
# Frontend (React Native/Expo)
npm install                    # Install dependencies after rename
npx expo start                 # Start dev server
npx expo lint                  # Lint check
npx tsc --noEmit              # Type check
npx expo install <package>     # Install SDK-compatible package

# Backend (Laravel - TBD)
composer install               # Install PHP dependencies
php artisan migrate           # Run migrations
php artisan serve             # Start dev server (http://localhost:8000)
php artisan make:model ...    # Generate model
php artisan make:controller   # Generate controller
````

---

## Contact & Questions

Jika ada yang tidak jelas tentang project ini di sesi baru:

1. Baca file ini lengkap
2. Check existing code di `src/app/` dan `src/styles/`
3. Tanya spesifik tentang bagian yang ambiguous
4. Jangan assume, mending tanya dulu

---

**Last Updated:** Sebelum rename folder (Praktikum1 → frontend)  
**Next Action:** Rename folder, buat folder pembungkus, lanjut setup backend
