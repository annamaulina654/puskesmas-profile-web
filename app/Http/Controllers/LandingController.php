<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Announcement;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function home()
    {
        $latestActivities = Activity::orderBy('date', 'desc')->take(6)->get();

        $latestAnnouncements = Announcement::where('is_active', true)
            ->orderBy('date', 'desc')
            ->take(4)
            ->get();

        return Inertia::render('landing/home', [
            'activities' => $latestActivities,
            'announcements' => $latestAnnouncements,
        ]);
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
            'announcements' => $announcements,
        ]);
    }

    public function showAnnouncement($id)
    {
        $announcement = Announcement::where('is_active', true)->findOrFail($id);

        return Inertia::render('landing/information/announcement-detail', [
            'announcement' => $announcement,
        ]);
    }

    public function activities()
    {
        $activities = Activity::orderBy('date', 'desc')->get();

        return Inertia::render('landing/information/activities', [
            'activities' => $activities,
        ]);
    }

    public function showActivity($id)
    {
        $activity = Activity::findOrFail($id);

        return Inertia::render('landing/information/activity-detail', [
            'activity' => $activity,
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
