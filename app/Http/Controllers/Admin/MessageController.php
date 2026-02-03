<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::orderBy('is_read', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('admin/messages/index', [
            'messages' => $messages,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'reply' => 'required|string',
        ]);

        $message = Message::findOrFail($id);

        $message->update([
            'reply' => $request->reply,
            'replied_at' => now(),
            'is_read' => true,
            'admin_name' => 'Admin Puskesmas',
        ]);

        return redirect()->back()->with('success', 'Balasan berhasil dipublikasikan!');
    }

    public function markAsRead($id)
    {
        $message = Message::findOrFail($id);
        $message->update(['is_read' => true]);

        return redirect()->back();
    }

    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return redirect()->back()->with('message', 'Pesan berhasil dihapus');
    }
}