<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProfilController extends Controller
{
    public function index()
    {
        $profil = Profil::orderBy('updated_at', 'desc')->get();

        return Inertia::render('admin/profil/index', [
            'profil' => $profil
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/profil/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'kategori_profil' => 'required|string',
            'isi_konten' => 'required',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('profil-images', 'public');
        }

        Profil::create($validated);

        return redirect()->route('profil.index')->with('success', 'Data profil berhasil ditambahkan!');
    }

    public function edit($id)
    {
        $profil = Profil::findOrFail($id);
        
        return Inertia::render('admin/profil/edit', [
            'profil' => $profil
        ]);
    }

    public function update(Request $request, $id)
    {
        $profil = Profil::findOrFail($id);

        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'kategori_profil' => 'required|string',
            'isi_konten' => 'required',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            if ($profil->gambar) {
                Storage::disk('public')->delete($profil->gambar);
            }
            $validated['gambar'] = $request->file('gambar')->store('profil-images', 'public');
        }

        $profil->update($validated);

        return redirect()->route('profil.index')->with('success', 'Data profil berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $profil = Profil::findOrFail($id);
        
        if ($profil->gambar) {
            Storage::disk('public')->delete($profil->gambar);
        }
        
        $profil->delete();

        return redirect()->route('profil.index')->with('success', 'Data profil berhasil dihapus!');
    }
}