<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Activity;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function home()
    {
        return Inertia::render('landing/home');
    }

    public function about()
    {
        return Inertia::render('landing/profile/about');
    }

    public function visionMission()
    {
        return Inertia::render('landing/profile/vission-mission');
    }

    public function organization()
    {
        return Inertia::render('landing/profile/organization');
    }

    public function innovations()
    {
        return Inertia::render('landing/profile/innovations');
    }

    public function services()
    {
        return Inertia::render('landing/services');
    }

    public function announcements()
    {
        $announcements = Announcement::where('is_active', true)
            ->orderBy('date', 'desc')
            ->get();

        return Inertia::render('landing/information/announcements', [
            'announcements' => $announcements
        ]);
    }

    public function activities()
    {
        $activities = Activity::orderBy('date', 'desc')->get();

        return Inertia::render('landing/information/activities', [
            'activities' => $activities
        ]);
    }

    public function helpdesk()
    {
        return Inertia::render('landing/information/helpdesk');
    }

    public function contact()
    {
        return Inertia::render('landing/contact');
    }

    public function storeContact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Message::create($validated);

        return redirect()->back()->with('success', 'Terima kasih! Pesan Anda telah kami terima.');
    }
}