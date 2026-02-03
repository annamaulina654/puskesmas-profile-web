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

    public function rates()
    {
        $rateCategories = [
            [
                'name' => 'Administrasi & Pendaftaran',
                'items' => [
                    ['service' => 'Pendaftaran Pasien Baru/Lama (Loket)', 'price' => 10000, 'unit' => 'per kunjungan'],
                    ['service' => 'Surat Keterangan Sehat (KIR Dokter)', 'price' => 15000, 'unit' => 'per surat'],
                    ['service' => 'Surat Keterangan Calon Pengantin', 'price' => 20000, 'unit' => 'per pasang'],
                ]
            ],
            [
                'name' => 'Pelayanan Poli Umum & UGD',
                'items' => [
                    ['service' => 'Pemeriksaan Dokter', 'price' => 0, 'unit' => 'Termasuk Pendaftaran'],
                    ['service' => 'Jahit Luka (1-5 jahitan)', 'price' => 25000, 'unit' => 'per tindakan'],
                    ['service' => 'Jahit Luka (>5 jahitan)', 'price' => 50000, 'unit' => 'per tindakan'],
                    ['service' => 'Ganti Perban / Rawat Luka', 'price' => 15000, 'unit' => 'per tindakan'],
                    ['service' => 'Nebulizer (Uap)', 'price' => 35000, 'unit' => 'per tindakan'],
                ]
            ],
            [
                'name' => 'Pelayanan Gigi & Mulut',
                'items' => [
                    ['service' => 'Pencabutan Gigi Susu (Tanpa Suntik)', 'price' => 15000, 'unit' => 'per gigi'],
                    ['service' => 'Pencabutan Gigi Tetap (Dengan Suntik)', 'price' => 30000, 'unit' => 'per gigi'],
                    ['service' => 'Tumpatan / Tambal Sementara', 'price' => 20000, 'unit' => 'per gigi'],
                    ['service' => 'Tumpatan / Tambal Tetap', 'price' => 35000, 'unit' => 'per gigi'],
                    ['service' => 'Pembersihan Karang Gigi (Scalling)', 'price' => 50000, 'unit' => 'per rahang'],
                ]
            ],
            [
                'name' => 'Laboratorium',
                'items' => [
                    ['service' => 'Gula Darah Acak (GDA)', 'price' => 15000, 'unit' => 'per tes'],
                    ['service' => 'Asam Urat', 'price' => 20000, 'unit' => 'per tes'],
                    ['service' => 'Kolesterol Total', 'price' => 25000, 'unit' => 'per tes'],
                    ['service' => 'Tes Kehamilan (Planotest)', 'price' => 15000, 'unit' => 'per tes'],
                    ['service' => 'Darah Lengkap', 'price' => 50000, 'unit' => 'per tes'],
                ]
            ],
            [
                'name' => 'Pelayanan KIA & KB',
                'items' => [
                    ['service' => 'Pemeriksaan Kehamilan (ANC)', 'price' => 15000, 'unit' => 'per kunjungan'],
                    ['service' => 'Suntik KB 3 Bulanan', 'price' => 20000, 'unit' => 'per tindakan'],
                    ['service' => 'Pasang Implan / Susuk', 'price' => 75000, 'unit' => 'per tindakan'],
                    ['service' => 'Persalinan Normal', 'price' => 700000, 'unit' => 'per paket'],
                ]
            ],
        ];

        return Inertia::render('landing/information/rates', [
            'rateCategories' => $rateCategories
        ]);
    }

    public function staff()
    {
        $staffGroups = [
            'Pimpinan' => [
                [
                    'name' => 'dr. H. Nama Kepala',
                    'nip' => '19800101 200501 1 001',
                    'position' => 'Kepala Puskesmas',
                    'image' => '/images/staff/kapus.jpg'
                ]
            ],
            'Dokter Umum & Gigi' => [
                [
                    'name' => 'dr. Budi Santoso',
                    'nip' => '19850505 201001 1 002',
                    'position' => 'Dokter Umum',
                    'image' => '/images/placeholder.svg'
                ],
                [
                    'name' => 'drg. Siti Aminah',
                    'nip' => '19880712 201402 2 003',
                    'position' => 'Dokter Gigi',
                    'image' => '/images/placeholder.svg'
                ],
                [
                    'name' => 'dr. Andi Pratama',
                    'nip' => '19900101 201801 1 004',
                    'position' => 'Dokter Umum',
                    'image' => '/images/placeholder.svg'
                ],
            ],
            'Koordinator & Tata Usaha' => [
                [
                    'name' => 'Ahmad Junaidi, S.Kep.Ns',
                    'nip' => '19820315 200604 1 005',
                    'position' => 'Kepala Tata Usaha',
                    'image' => '/images/placeholder.svg'
                ],
            ]
        ];

        return Inertia::render('landing/profile/staff', [
            'staffGroups' => $staffGroups
        ]);
    }

    public function innovations()
    {
        return Inertia::render('landing/profile/innovations');
    }

    public function services()
    {
        return Inertia::render('landing/services');
    }

    public function serviceDetail($slug)
    {
        $servicesDB = [
            'anc' => [
                'name' => 'ANC (Antenatal Care)',
                'category' => 'Klaster 2: Ibu & Anak',
                'description' => 'Pelayanan pemeriksaan kehamilan terpadu (10T) untuk memastikan kesehatan ibu dan janin tetap optimal hingga masa persalinan.',
                'requirements' => ['Membawa KTP / KK', 'Kartu BPJS (Jika ada)', 'Buku KIA (Pink)'],
                'schedule' => [
                    ['day' => 'Senin - Kamis', 'time' => '08.00 - 12.00'],
                    ['day' => 'Jumat', 'time' => '08.00 - 10.00'],
                    ['day' => 'Sabtu', 'time' => '08.00 - 11.00'],
                ],
                'images' => [
                    '/images/anc1.jpg',
                    '/images/anc2.jpg'
                ]
            ],
            'persalinan-nifas' => [
                'name' => 'Persalinan 24 Jam',
                'category' => 'Klaster 2: Ibu & Anak',
                'description' => 'Layanan persalinan normal yang siaga 24 jam dengan bidan profesional dan fasilitas yang memadai.',
                'requirements' => ['KTP & KK (Asli & Fotokopi)', 'Kartu BPJS', 'Buku KIA', 'Perlengkapan Ibu & Bayi'],
                'schedule' => [
                    ['day' => 'Setiap Hari', 'time' => '24 Jam'],
                ],
                'images' => [
                    '/images/vk1.jpg',
                    '/images/vk2.jpg'
                ]
            ],
        ];

        if (!array_key_exists($slug, $servicesDB)) {
            abort(404);
        }

        $service = $servicesDB[$slug];

        return Inertia::render('landing/service-detail', [
            'service' => $service
        ]);
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
