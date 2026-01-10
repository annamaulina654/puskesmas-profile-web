<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Informasi;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class InformasiController extends Controller
{

    public function index()
    {
        $informasi = Informasi::orderBy('tgl_posting', 'desc')->get();

        return Inertia::render('admin/informasi/index', [
            'informasi' => $informasi
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/informasi/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required',
            'kategori_info' => 'required',
            'isi' => 'required',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $data = $request->all();
        $data['id_admin'] = Auth::id() ?? 1;
        $data['tgl_posting'] = now();

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('informasi', 'public');
            $data['gambar'] = $path;
        }

        Informasi::create($data);

        return redirect()->route('informasi.index')->with('success', 'Informasi berhasil diposting');
    }

    public function edit($id)
    {
        $informasi = Informasi::findOrFail($id);
        
        return Inertia::render('admin/informasi/edit', [
            'informasi' => $informasi
        ]);
    }

    public function update(Request $request, $id)
    {
        $informasi = Informasi::findOrFail($id);

        $request->validate([
            'judul' => 'required',
            'kategori_info' => 'required',
            'isi' => 'required',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $data = $request->except('gambar');
        $data['id_admin'] = Auth::id() ?? 1;

        if ($request->hasFile('gambar')) {
            if ($informasi->gambar && Storage::disk('public')->exists($informasi->gambar)) {
                Storage::disk('public')->delete($informasi->gambar);
            }
            $path = $request->file('gambar')->store('informasi', 'public');
            $data['gambar'] = $path;
        }

        $informasi->update($data);

        return redirect()->route('informasi.index')->with('success', 'Informasi berhasil diperbarui');
    }

    public function destroy($id)
    {
        $informasi = Informasi::findOrFail($id);

        if ($informasi->gambar && Storage::disk('public')->exists($informasi->gambar)) {
            Storage::disk('public')->delete($informasi->gambar);
        }

        $informasi->delete();
        
        return redirect()->route('informasi.index')->with('success', 'Informasi berhasil dihapus');
    }
}