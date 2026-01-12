<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    public function index()
    {
        $announcements = Announcement::latest()->get();

        return Inertia::render('admin/announcements/index', [
            'announcements' => $announcements
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/announcements/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'date' => 'required|date',
            'type' => 'required|string',
            'is_active' => 'boolean',
        ]);

        Announcement::create($validated);

        return redirect()->route('admin.announcements.index');
    }

    public function edit(Announcement $announcement)
    {
        return Inertia::render('admin/announcements/edit', [
            'announcement' => $announcement
        ]);
    }

    public function update(Request $request, Announcement $announcement)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'date' => 'required|date',
            'type' => 'required|string',
            'is_active' => 'boolean',
        ]);

        $announcement->update($validated);

        return redirect()->route('admin.announcements.index');
    }

    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
        return redirect()->back();
    }
}