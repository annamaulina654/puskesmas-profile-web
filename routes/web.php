<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\InformasiController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\LandingController;

Route::controller(LandingController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/services', 'services')->name('public.services');
    Route::get('/contact', 'contact')->name('public.contact');

    Route::prefix('profile')->group(function () {
        Route::get('/vision-mission', 'visionMission')->name('public.vision-mission');
        Route::get('/organization', 'organization')->name('public.organization');
        Route::get('/innovations', 'innovations')->name('public.innovations');
        Route::get('/about', 'about')->name('public.about');
    });

    Route::prefix('information')->group(function () {
        Route::get('/announcements', 'announcements')->name('public.announcements');
        Route::get('/activities', 'activities')->name('public.activities');
        Route::get('/helpdesk', 'helpdesk')->name('public.helpdesk');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function() {
        Route::resource('announcements', \App\Http\Controllers\Admin\AnnouncementController::class);
    });

    Route::resource('informasi', InformasiController::class);
    Route::resource('profil', ProfilController::class);
});

require __DIR__.'/settings.php';