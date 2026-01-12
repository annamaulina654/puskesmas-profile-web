<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ActivityController extends Controller
{

    public function index()
    {
        $activities = Activity::latest()->get();

        return Inertia::render('admin/activities/index', [
            'activities' => $activities
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/activities/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string',
            'date'        => 'required|date',
            'location'    => 'required|string',
            'images'      => 'nullable|array',
            'images.*'    => 'image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $path = $file->store('activities', 'public');
                $imagePaths[] = $path;
            }
        }

        Activity::create([
            'title'       => $data['title'],
            'description' => $data['description'],
            'category'    => $data['category'],
            'date'        => $data['date'],
            'location'    => $data['location'],
            'images'      => $imagePaths,
        ]);

        return redirect()->route('admin.activities.index')
            ->with('message', 'Kegiatan berhasil ditambahkan!');
    }

    public function edit(Activity $activity)
    {
        return Inertia::render('admin/activities/edit', [
            'activity' => $activity
        ]);
    }

    public function update(Request $request, Activity $activity)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string',
            'date'        => 'required|date',
            'location'    => 'required|string',
            'images'      => 'nullable|array',
            'images.*'    => 'image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $updateData = [
            'title'       => $data['title'],
            'description' => $data['description'],
            'category'    => $data['category'],
            'date'        => $data['date'],
            'location'    => $data['location'],
        ];

        if ($request->hasFile('images')) {
            
            if ($activity->images && is_array($activity->images)) {
                foreach ($activity->images as $oldImage) {
                    if (Storage::disk('public')->exists($oldImage)) {
                        Storage::disk('public')->delete($oldImage);
                    }
                }
            }

            $newImagePaths = [];
            foreach ($request->file('images') as $file) {
                $path = $file->store('activities', 'public');
                $newImagePaths[] = $path;
            }

            $updateData['images'] = $newImagePaths;
        }

        $activity->update($updateData);

        return redirect()->route('admin.activities.index')
            ->with('message', 'Kegiatan berhasil diperbarui!');
    }

    public function destroy(Activity $activity)
    {
        if ($activity->images && is_array($activity->images)) {
            foreach ($activity->images as $image) {
                if (Storage::disk('public')->exists($image)) {
                    Storage::disk('public')->delete($image);
                }
            }
        }

        $activity->delete();

        return redirect()->back()
            ->with('message', 'Kegiatan berhasil dihapus!');
    }
}