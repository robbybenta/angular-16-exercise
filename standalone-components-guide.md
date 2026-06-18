# Ringkasan: Angular Standalone Components vs Classic Components

Dokumen ini berisi panduan singkat mengenai perbedaan antara **Classic Components** (menggunakan `NgModule`) dan **Standalone Components** di Angular (v14+).

---

## 1. Perbedaan Utama

| Fitur              | Classic Component (NgModule)                                                               | Standalone Component                                                                               |
| :----------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **Dekorasi**       | `@Component({ selector: '...', template: '...' })`                                         | `@Component({ selector: '...', standalone: true, imports: [...], template: '...' })`               |
| **Pendaftaran**    | Harus didaftarkan di array `declarations` pada file `NgModule` (misalnya `app.module.ts`). | **Tidak boleh** didaftarkan di `declarations`. Cukup diimpor langsung di array `imports`.          |
| **Ketergantungan** | Ketergantungan (seperti `CommonModule`, `FormsModule`, dll) diimpor oleh modul induknya.   | Ketergantungan diimpor langsung secara lokal di dalam properti `imports` milik komponen tersebut.  |
| **Modularitas**    | Terikat erat pada struktur modul (`NgModule`).                                             | Mandiri dan modular. Lebih mudah di-reuse, di-test, dan mendukung lazy loading yang lebih efisien. |

---

## 2. Cara Kerja Pendaftaran & Penggunaan

### A. Komponen Klasik (Menggunakan `NgModule`)

Komponen klasik harus didaftarkan di bagian `declarations` pada modul yang menaunginya agar komponen lain di modul tersebut dapat menggunakannya.

```typescript
// app.module.ts
import { ProjectComponent } from "./components/projects/project.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent, // <-- Didaftarkan di declarations
  ],
  imports: [BrowserModule],
})
export class AppModule {}
```

### B. Standalone Component (Tanpa Terikat Modul)

Dengan menambahkan properti `standalone: true`, komponen tersebut bertindak seperti modul independen.

```typescript
// profile.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-profile",
  standalone: true, // <-- Kunci Utama
  imports: [CommonModule], // <-- Impor dependensi lokal
  template: `<p>Profil Pengguna</p>`,
})
export class ProfileComponent {}
```

Untuk menggunakannya di tempat lain, Anda cukup mengimpor kelas komponen tersebut langsung ke array `imports`:

#### Skenario 1: Digunakan di Modul Klasik (NgModule)

```typescript
// app.module.ts
import { ProfileComponent } from "./components/profile/profile.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProfileComponent, // <-- Diimpor langsung di sini, bukan di declarations!
  ],
})
export class AppModule {}
```

#### Skenario 2: Digunakan di sesama Standalone Component

```typescript
// dashboard.component.ts
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [ProfileComponent], // <-- Diimpor langsung di sini!
  template: `
    <h1>Dashboard</h1>
    <app-profile></app-profile>
  `,
})
export class DashboardComponent {}
```
