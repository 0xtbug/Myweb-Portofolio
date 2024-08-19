---
title: "LARAVEL: Create Simple CRUD API"
description: Artikel ini memberikan panduan dasar membangun aplikasi Laravel, mulai dari instalasi hingga pembuatan API sederhana untuk mengelola data mahasiswa.
pubDate: 2024-08-20
tags:
  - Web
  - Api
  - Framework
  - Laravel
---
# Pendahuluan
Dalam artikel ini, kita akan membahas langkah-langkah untuk membangun sebuah API sederhana menggunakan Laravel.
## Instal Komponen
install project
```bash
composer create-project --prefer-dist laravel/laravel api
```
## Buat Model & Migrasi
Buat model, migrasi, controller
```bash
php artisan make:model Mahasiswa -mcr
```
Edit migrasi di `database/migrations` pada file terbaru
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up(): void
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->id();
            $table->string('nim', 13)->unique();
            $table->string('nama', 50);
            $table->string('jurusan', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */

    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};
```

```Catatan:```
Sebelum menjalankan, edit konfigurasi Database di `.env`

Jalankan migrasi
```bash
php artisan migrate
```
## Edit Model
Edit model Mahasiswa di `app/Http/Models`
```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;
    
    protected $guarded = [];
}
```
## Edit Rute
Tambahkan rute mahasiswa di `routes/api.php`
```php
Route::apiResource('mahasiswa', MahasiswaController::class);
```
## Edit Controller
Edit MahasiswaController di `app/Http/Controllers`
```php
<?php
namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $mahasiswa = Mahasiswa::paginate(10);

        return response()->json([
            'data' => $mahasiswa
        ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $mahasiswa = Mahasiswa::create([
            'nim' => $request->nim,
            'nama' => $request->nama,
            'jurusan' => $request->jurusan
        ]);

        return response()->json([
            'message' => 'Data mahasiswa berhasil disimpan',
            'data' => $mahasiswa
        ]);
    }

    /**
     * Display the specified resource.
     */

    public function show(Mahasiswa $mahasiswa)
    {
        return response()->json([
            'data' => $mahasiswa
        ]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, Mahasiswa $mahasiswa)
    {
        $mahasiswa->nim = $request->nim;
        $mahasiswa->nama = $request->nama;
        $mahasiswa->jurusan = $request->jurusan;
        $mahasiswa->save();

        return response()->json([
            'message' => 'Data mahasiswa berhasil diubah',
            'data' => $mahasiswa
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(Mahasiswa $mahasiswa)
    {
        $mahasiswa->delete();
        return response()->json([
            'message' => 'Data mahasiswa berhasil dihapus'
        ]);
    }
}
```
## Jalankan server
```bash
php artisan serve
```
# Kesimpulan
API yang dibahas dalam artikel ini sangat cocok digunakan untuk keperluan pengujian atau belajar, namun tidak disarankan untuk digunakan dalam proyek yang akan diterapkan di lingkungan produksi.