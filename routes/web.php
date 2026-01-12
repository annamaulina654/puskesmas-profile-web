<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\InformasiController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\Admin\ActivityController;
use App\Models\Message;
use App\Models\Activity;
use App\Models\Announcement;

Route::controller(LandingController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/services', 'services')->name('public.services');
    Route::get('/contact', 'contact')->name('public.contact');
    Route::post('/contact', 'storeContact')->name('contact.store');

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
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard', [
            'stats' => [
                'total_messages' => Message::count(),
                'unread_messages' => Message::where('is_read', false)->count(),
                'total_activities' => Activity::count(),
                'total_announcements' => Announcement::count(),
            ],
            'recent_messages' => Message::orderBy('created_at', 'desc')->take(5)->get(),
            'recent_activities' => Activity::latest()->take(3)->get(),
        ]);
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function() {
        
 
        Route::resource('announcements', AnnouncementController::class);

        Route::resource('activities', ActivityController::class);

        Route::get('/messages', [App\Http\Controllers\Admin\MessageController::class, 'index'])->name('messages.index');
        Route::delete('/messages/{id}', [App\Http\Controllers\Admin\MessageController::class, 'destroy'])->name('messages.destroy');
        Route::put('/messages/{id}/read', [App\Http\Controllers\Admin\MessageController::class, 'markAsRead'])->name('messages.read');
    });

    Route::resource('informasi', InformasiController::class);
    Route::resource('profil', ProfilController::class);
});

require __DIR__.'/settings.php';