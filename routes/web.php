<?php

use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\LandingController;
use App\Models\Activity;
use App\Models\Announcement;
use App\Models\Message;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(LandingController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/services', 'services')->name('public.services');
    Route::get('/services/{slug}', 'serviceDetail')->name('public.service-detail');
    Route::get('/complaints', 'complaints')->name('public.complaints'); 
    Route::post('/complaints', 'storeComplaint')->name('complaints.store');

    Route::prefix('profile')->group(function () {
        Route::get('/vision-mission', 'visionMission')->name('public.vision-mission');
        Route::get('/organization', 'organization')->name('public.organization');
        Route::get('/staff', 'staff')->name('public.staff');
        Route::get('/innovations', 'innovations')->name('public.innovations');
        Route::get('/about', 'about')->name('public.about');
    });

    Route::prefix('information')->group(function () {
        Route::get('/announcements', 'announcements')->name('public.announcements');
        Route::get('/activities', 'activities')->name('public.activities');
        Route::get('/helpdesk', 'helpdesk')->name('public.helpdesk');
        Route::get('/contact', 'contact')->name('public.contact');
        Route::get('/service-hours', 'serviceHours')->name('public.service-hours');
        Route::get('/rates', 'rates')->name('public.rates');

        Route::get('/announcements/{id}', 'showAnnouncement')->name('public.announcement.show');
        Route::get('/activities/{id}', 'showActivity')->name('public.activity.show');
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

    Route::prefix('admin')->name('admin.')->group(function () {

        Route::resource('announcements', AnnouncementController::class);

        Route::resource('activities', ActivityController::class);

        Route::get('/messages', [App\Http\Controllers\Admin\MessageController::class, 'index'])->name('messages.index');
        Route::delete('/messages/{id}', [App\Http\Controllers\Admin\MessageController::class, 'destroy'])->name('messages.destroy');
        Route::put('/messages/{id}/read', [App\Http\Controllers\Admin\MessageController::class, 'markAsRead'])->name('messages.read');
        Route::put('/messages/{id}', [App\Http\Controllers\Admin\MessageController::class, 'update'])->name('messages.update');
    });

});

require __DIR__.'/settings.php';
