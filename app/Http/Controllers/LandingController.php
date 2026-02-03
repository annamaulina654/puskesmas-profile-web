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

    public function complaints()
    {
        $publishedComplaints = Message::where('is_public', true)
            ->whereNotNull('reply')
            ->orderBy('replied_at', 'desc')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'category' => $item->subject,
                    'message' => $item->message,
                    'reply' => $item->reply,
                    'admin_name' => $item->admin_name ?? 'Admin Puskesmas',
                    
                    'date' => \Carbon\Carbon::parse($item->created_at)
                        ->setTimezone('Asia/Jakarta')
                        ->locale('id')
                        ->isoFormat('D MMMM Y'),
                    
                    'reply_date' => $item->replied_at 
                        ? \Carbon\Carbon::parse($item->replied_at)
                            ->setTimezone('Asia/Jakarta')
                            ->locale('id')
                            ->isoFormat('D MMMM Y, HH:mm') 
                        : '-',
                ];
            });

        return Inertia::render('landing/complaints', [
            'publishedComplaints' => $publishedComplaints
        ]);
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
        return Inertia::render('landing/information/contact');
    }

    public function serviceHours()
    {
        return Inertia::render('landing/information/service-hours');
    }

    public function storeComplaint(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'is_public' => 'boolean',
        ]);

        $validated['is_public'] = $request->boolean('is_public');

        Message::create($validated);

        return redirect()->back()->with('success', 'Terima kasih! Pesan Anda telah kami terima.');
    }
}
