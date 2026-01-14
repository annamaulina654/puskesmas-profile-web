<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
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
