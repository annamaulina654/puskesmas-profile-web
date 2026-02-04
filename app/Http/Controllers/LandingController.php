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
        return Inertia::render('landing/information/rates');
    }

    public function staff()
    {
        $staffStats = [
            ['name' => 'Dokter Umum', 'count' => 2],
            ['name' => 'Dokter Gigi', 'count' => 1],
            ['name' => 'Perawat', 'count' => 35],
            ['name' => 'Bidan', 'count' => 24],
            ['name' => 'Bidan Desa', 'count' => 16],
            ['name' => 'Perawat Gigi', 'count' => 1],
            ['name' => 'Petugas Gizi', 'count' => 2],
            ['name' => 'Apoteker', 'count' => 1],
            ['name' => 'Asisten Apoteker', 'count' => 1],
            ['name' => 'Petugas Unit Obat', 'count' => 2],
            ['name' => 'Sanitarian', 'count' => 1],
            ['name' => 'Petugas Promkes', 'count' => 1],
            ['name' => 'Petugas Laborat', 'count' => 5],
            ['name' => 'Petugas Unit Pendaftaran', 'count' => 3],
            ['name' => 'Kasir', 'count' => 1],
            ['name' => 'Tata Usaha', 'count' => 1],
            ['name' => 'IT', 'count' => 1],
            ['name' => 'SKM', 'count' => 1],
            ['name' => 'Akuntan', 'count' => 1],
            ['name' => 'Administrasi', 'count' => 1],
            ['name' => 'Keamanan', 'count' => 2],
            ['name' => 'Sopir Ambulance', 'count' => 3],
            ['name' => 'Petugas Kebersihan', 'count' => 5],
        ];

        $totalStaff = array_sum(array_column($staffStats, 'count'));

        return Inertia::render('landing/profile/staff', [
            'staffStats' => $staffStats,
            'totalStaff' => $totalStaff
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
        $servicesDB = $this->getServicesData();

        if (!array_key_exists($slug, $servicesDB)) {
            abort(404);
        }

        $service = $servicesDB[$slug];

        return Inertia::render('landing/service-detail', [
            'service' => $service
        ]);
    }

    private function getServicesData()
    {
        return [
            'manajemen-puskesmas' => [
                'title' => 'Manajemen Puskesmas',
                'description' => 'Sistem tata kelola administrasi dan manajemen operasional yang mendukung seluruh pelayanan kesehatan agar berjalan efektif, efisien, dan bermutu.',
                'images' => [
                    '/images/layanan/manajemen1.jpg', 
                    '/images/layanan/manajemen2.jpg'
                ],
                'points' => [
                    'Manajemen Ketatausahaan',
                    'Manajemen Sumber Daya Manusia (SDM)',
                    'Manajemen Sarana & Prasarana',
                    'Manajemen Mutu Pelayanan',
                    'Manajemen Keuangan & Aset (BMD)',
                    'Manajemen Sistem Informasi Digital',
                    'Manajemen Jejaring Puskesmas'
                ]
            ],
            'anc' => [
                'title' => 'ANC (Antenatal Care)',
                'description' => 'Pemeriksaan kehamilan rutin terpadu (10T) untuk memastikan kesehatan ibu dan janin tetap optimal hingga masa persalinan.',
                'images' => [
                    '/images/layanan/anc1.jpeg', 
                    '/images/layanan/anc2.jpeg',
                ]
            ],
            'persalinan-nifas' => [
                'title' => 'Persalinan & Nifas',
                'description' => 'Layanan persalinan normal yang siaga 24 jam dengan bidan profesional dan fasilitas yang memadai.',
                'images' => [
                    '/images/layanan/pn1.jpeg',
                    '/images/layanan/pn2.jpg',
                    '/images/layanan/pn3.jpg',
                    '/images/layanan/pn4.jpg',
                    '/images/layanan/pn5.jpg'
                ]
            ],
            'neonatal-esensial' => [
                'title' => 'Neonatal Esensial',
                'description' => 'Perawatan khusus bayi baru lahir (0-28 hari), manajemen BBLR, dan penanganan asfiksia.',
                'images' => ['/images/layanan/neo.jpg']
            ],
            'pelayanan-gizi-ibu-anak' => [
                'title' => 'Pelayanan Gizi Ibu dan Anak',
                'description' => 'Konseling gizi untuk ibu hamil KEK, balita stunting, gizi buruk, serta konseling menyusui (ASI Eksklusif).',
                'images' => [
                    '/images/layanan/gizi1.jpg',
                    '/images/layanan/gizi2.jpg',
                    '/images/layanan/gizi3.jpg'
                ]
            ],
            'imunisasi' => [
                'title' => 'Pelayanan Imunisasi',
                'description' => 'Pemberian imunisasi dasar lengkap dan lanjutan untuk membentuk kekebalan tubuh anak.',
                'schedule' => 'Selasa & Rabu (08.00 - 12.00 WIB)',
                'images' => [
                    '/images/layanan/imun1.jpg',
                    '/images/layanan/imun2.jpg',
                    '/images/layanan/imun3.jpg',
                    '/images/layanan/imun4.jpg',
                    '/images/layanan/imun5.jpg',
                    '/images/layanan/imun6.jpg',
                    '/images/layanan/imun7.jpg',
                    '/images/layanan/imun8.jpg',
                    '/images/layanan/imun9.jpg',
                    '/images/layanan/imun10.jpg'
                ]
            ],
            'sdidtk' => [
                'title' => 'Tumbuh Kembang (SDIDTK)',
                'description' => 'Stimulasi, Deteksi, dan Intervensi Dini Tumbuh Kembang untuk memantau motorik dan sensorik anak.',
                'images' => [
                    '/images/layanan/sdidtk.jpg',
                    '/images/layanan/sdidtk2.jpg'
                ]
            ],
            'mtbs' => [
                'title' => 'MTBS (Manajemen Terpadu Balita Sakit)',
                'description' => 'Pemeriksaan terintegrasi untuk balita sakit (Batuk, Pilek, Diare, Demam) dengan pendekatan komprehensif.',
                'images' => [
                    '/images/layanan/mtbs.jpeg',
                    '/images/layanan/mtbs2.jpeg'
                ]
            ],
            'pembuatan-surat-sehat' => [
                'title' => 'Surat Keterangan Sehat Anak',
                'description' => 'Pemeriksaan fisik untuk persyaratan administrasi sekolah atau lomba bagi anak usia 0-17 tahun.',
                'images' => ['/images/layanan/ss.jpg']
            ],
            'usg-shk' => [
                'title' => 'USG & Skrining Hipotiroid',
                'description' => 'Pemeriksaan USG Kehamilan (Trimester 1 & 3) serta pengambilan sampel darah tumit bayi (SHK).',
                
                'schedule' => [
                    [
                        'label' => 'USG (dr. Iin)', 
                        'time' => 'Selasa - Kamis'
                    ],
                    [
                        'label' => 'USG (dr. Fian)', 
                        'time' => "Jum'at"
                    ],
                    [
                        'label' => 'Skrining SHK', 
                        'time' => 'Setiap Hari (Jam Pelayanan)'
                    ]
                ],
                'images' => [
                    '/images/layanan/usg1.jpg',
                    '/images/layanan/usg2.jpg',
                    '/images/layanan/usg3.jpg',
                    '/images/layanan/usg4.jpg',
                ]
            ],
            'pelayanan-ckg' => [
                'title' => 'Cek Kesehatan Gratis (CKG)',
                'description' => 'Skrining kesehatan rutin setahun sekali (Tensi, Gula Darah, Kolesterol) untuk deteksi dini penyakit tidak menular.',
                'images' => [
                    '/images/layanan/ckg1.jpeg',
                    '/images/layanan/ckg2.jpeg'
                ]
            ],
            'pengobatan-umum' => [
                'title' => 'Pengobatan Umum',
                'description' => 'Pemeriksaan dan pengobatan penyakit umum menular dan tidak menular pada pasien dewasa/lansia.',
                'images' => [
                    '/images/layanan/pu1.jpg',
                    '/images/layanan/pu2.jpg'
                ]
            ],
            'pelayanan-kb' => [
                'title' => 'Pelayanan KB',
                'description' => 'Konseling dan pelayanan kontrasepsi (Pil, Suntik, Implan, IUD, Kondom).',
                'images' => [
                    '/images/layanan/kb1.jpg',
                    '/images/layanan/kb2.jpg'
                ]
            ],
            'kesehatan-gigi-dewasa' => [
                'title' => 'Kesehatan Gigi Dewasa',
                'description' => 'Pemeriksaan gigi, penambalan, pencabutan, dan pembersihan karang gigi (scalling).',
                'images' => ['/images/layanan/gigi.jpg']
            ],
            'surat-keterangan-sehat' => [
                'title' => 'Surat Keterangan Sehat',
                'description' => 'Pemeriksaan kesehatan fisik (Tensi, BB, TB, Buta Warna) untuk keperluan kerja atau pendidikan.',
                'images' => ['/images/layanan/ss.jpg']
            ],
            'pemeriksaan-catin' => [
                'title' => 'Calon Pengantin (Catin)',
                'description' => 'Skrining kesehatan reproduksi, imunisasi TT, dan konseling pranikah bagi pasangan calon pengantin.',
                'images' => [
                    '/images/layanan/catin1.jpg',
                    '/images/layanan/catin2.jpg'
                ]
            ],
            'rujukan-berjenjang' => [
                'title' => 'Rujukan Berjenjang',
                'description' => 'Layanan administrasi rujukan BPJS ke RS dan konsultasi kesehatan lingkungan.',
                'images' => ['/images/layanan/rb.jpg']
            ],
            'pemeriksaan-kekerasan-perempuan-anak' => [
                'title' => 'Pemeriksaan Kekerasan terhadap Perempuan dan Anak',
                'description' => 'Pemeriksaan medis awal dan visum bagi korban kekerasan terhadap perempuan dan anak.',
                'images' => [
                    '/images/layanan/kpa1.jpg',
                    '/images/layanan/kpa2.jpg'
                ]
            ],

            'penyakit-menular-langsung' => [
                'title' => 'Penyakit Menular Langsung',
                'description' => 'Pemeriksaan dan pengobatan TBC (TOSS TB), HIV (VCT), Kusta, Diare, ISPA, dan Hepatitis.',
                'images' => [
                    '/images/layanan/pm1.jpg',
                    '/images/layanan/pm2.jpg',
                    '/images/layanan/pm3.jfif',
                    '/images/layanan/pm4.jpg',
                    '/images/layanan/pm5.jpeg',
                    '/images/layanan/pm6.jpg',
                    '/images/layanan/pm7.jpg',
                ]
            ],
            'surveilans-respon' => [
                'title' => 'Surveilans & Respon',
                'description' => 'Penyelidikan epidemiologi (PE) untuk kasus demam berdarah, keracunan makanan, dan wabah lainnya.',
                'images' => [
                    '/images/layanan/sr1.jpeg',
                    '/images/layanan/sr2.jpeg',
                    '/images/layanan/sr3.jpeg',
                    '/images/layanan/sr4.jpeg',
                    '/images/layanan/sr5.jpeg'
                ]
            ],

            'pelayanan-gigi-mulut' => [
                'title' => 'Pelayanan Gigi & Mulut',
                'description' => 'Pelayanan kesehatan gigi dan mulut yang komprehensif.',
                'images' => [
                    '/images/layanan/pgd.jpg',
                    '/images/layanan/pgs.jpg',
                    '/images/layanan/pkg.jpg',
                    '/images/layanan/ppga.jpg',
                    '/images/layanan/ppgd.jpg',
                    '/images/layanan/ppgs.jpg'
                ]
            ],
            'laboratorium-labkesmas' => [
                'title' => 'Laboratorium',
                'description' => 'Pemeriksaan penunjang medis: Darah Lengkap, Urine, Gula Darah, Kolesterol, Asam Urat, BTA, dll.',
                'images' => [
                    '/images/layanan/hdl.jpg',
                    '/images/layanan/kimia.jpg',
                    '/images/layanan/lphl.jpg',
                    '/images/layanan/lptbc.jpg',
                    '/images/layanan/tbc.jpg',
                ]
            ],
            'pelayanan-kefarmasian' => [
                'title' => 'Farmasi / Apotek',
                'description' => 'Pelayanan resep, peracikan obat, dan pemberian informasi obat (PIO) oleh Apoteker.',
                'images' => [
                    '/images/layanan/farm1.jpg',
                    '/images/layanan/farm2.jpg',
                    '/images/layanan/farm3.jpg'
                ]
            ],
            'ugd-24-jam' => [
                'title' => 'UGD 24 Jam',
                'description' => 'Unit Gawat Darurat siap siaga 24 jam menangani kecelakaan dan kegawatdaruratan medis.',
                'images' => [
                    '/images/layanan/infus.jpeg',
                    '/images/layanan/ppr.jpeg',
                    '/images/layanan/rawat-luka.jpeg',
                    '/images/layanan/sir.jpeg'
                ]
            ],
            'rawat-inap' => [
                'title' => 'Rawat Inap',
                'description' => 'Fasilitas perawatan rawat inap tingkat pertama dengan pengawasan medis 24 jam.',
                'images' => [
                    '/images/layanan/ri1.jpg',
                    '/images/layanan/ri2.jpg',
                    '/images/layanan/ri3.jpg'
                ]
            ],
            'fisioterapi' => [
                'title' => 'Fisioterapi',
                'description' => 'Pelayanan rehabilitasi medik dasar dan terapi fisik untuk pemulihan fungsi tubuh.',
                'images' => ['/images/layanan/fisio.jpg']
            ],
            'promkes-krisis' => [
                'title' => 'Promosi Kesehatan',
                'description' => 'Kegiatan penyuluhan kesehatan masyarakat, pemberdayaan kader, dan penanggulangan krisis kesehatan.',
                'images' => ['/images/layanan/promkes.jpg']
            ],
        ];
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
