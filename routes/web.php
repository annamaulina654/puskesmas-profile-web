<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

use App\Http\Controllers\InformasiController;
use App\Http\Controllers\ProfilController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('informasi', InformasiController::class);
    Route::resource('profil', ProfilController::class);
    Route::get('/layanan', function() { return Inertia::render('dashboard'); });
    Route::get('/pesan', function() { return Inertia::render('dashboard'); });
});

require __DIR__.'/settings.php';
