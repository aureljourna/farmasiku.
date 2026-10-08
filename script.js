/* =====================================================
   DATABASE OBAT (DILENGKAPI FOTO PRODUK ASLI/SESUAI)
===================================================== */

const drugs = [

    {
        name: "Paracetamol",
        generic: "Paracetamol",
        brand: "Panadol, Biogesic, Sanmol",
        category: "Obat Bebas",
        form: "Tablet, kaplet, sirup",
        strength: "500 mg",
        image: "images/paracetamol.jpg",
        indication: "Membantu meredakan demam dan nyeri ringan sampai sedang seperti sakit kepala, sakit gigi, dan demam flu.",
        usage: "Dewasa: 500-1000 mg tiap 4-6 jam jika perlu (maksimal 4000 mg/hari). Gunakan sesuai aturan pada kemasan atau anjuran tenaga kesehatan.",
        sideEffects: "Mual, ruam kulit, atau gangguan fungsi hati terutama jika digunakan berlebihan atau jangka panjang.",
        contraindication: "Perhatian pada pasien dengan gangguan fungsi hati berat atau riwayat alergi terhadap paracetamol.",
        storage: "Simpan di tempat kering pada suhu kamar (di bawah 30°C) dan terlindung dari sinar matahari langsung.",
        safety: "Jangan menggunakan melebihi dosis yang dianjurkan dan hindari mengonsumsi bersamaan dengan obat lain yang juga mengandung paracetamol."
    },

    {
        name: "Amoxicillin",
        generic: "Amoxicillin",
        brand: "Amoxsan, Hufanoxil, Ospamox",
        category: "Obat Keras",
        form: "Kapsul, tablet, sirup kering",
        strength: "500 mg",
        image: "images/amoxicillin.jpg",
        indication: "Antibiotik golongan penisilin untuk mengatasi infeksi bakteri tertentu pada saluran pernapasan, telinga, saluran kemih, dan kulit.",
        usage: "Digunakan harus sesuai resep dokter. Umumnya diminum tiap 8 jam dan wajib dihabiskan sesuai durasi resep.",
        sideEffects: "Mual, diare, ruam kulit, atau reaksi alergi (gatal, biduran, hingga sesak napas pada yang hipersensitif).",
        contraindication: "Tidak boleh digunakan pada pasien dengan riwayat alergi berat terhadap antibiotik golongan penisilin atau sefalosporin.",
        storage: "Simpan pada tempat kering dan sejuk. Untuk sirup kering yang sudah dilarutkan, perhatikan batas waktu simpan pada etiket.",
        safety: "Antibiotik harus digunakan sampai tuntas sesuai anjuran dokter untuk mencegah resistensi bakteri."
    },

    {
        name: "Ibuprofen",
        generic: "Ibuprofen",
        brand: "Proris, Bufect, Farsifen",
        category: "Obat Bebas Terbatas",
        form: "Tablet, kaplet, suspensi/sirup",
        strength: "200 mg, 400 mg",
        image: "images/ibuprofen.jpg",
        indication: "Membantu meredakan nyeri, demam, serta mengurangi peradangan seperti nyeri haid, sakit gigi, dan nyeri sendi.",
        usage: "Dewasa: 200-400 mg tiap 4-6 jam setelah makan bila diperlukan. Ikuti anjuran dokter atau petunjuk kemasan.",
        sideEffects: "Nyeri ulu hati/lambung, mual, perut kembung, pusing, atau risiko tukak lambung jika pemakaian berulang tanpa pengawasan.",
        contraindication: "Perhatian pada pasien dengan riwayat sakit maag kronis, tukak lambung, gangguan ginjal, asma, atau alergi NSAID.",
        storage: "Simpan pada suhu ruang (20-25°C) dan tempat yang kering.",
        safety: "Sebaiknya selalu dikonsumsi setelah makan untuk mengurangi risiko iritasi lambung."
    },

    {
        name: "Cetirizine",
        generic: "Cetirizine hydrochloride",
        brand: "Incidal-OD, Ryvel, Ozen",
        category: "Obat Keras",
        form: "Tablet salut selaput, sirup, drop",
        strength: "10 mg",
        image: "images/cetirizine.jpg",
        indication: "Antihistamin generasi kedua untuk mengatasi gejala alergi seperti rinitis alergi, bersin-bersin, pilek, hidung tersumbat, dan biduran/gatal kulit.",
        usage: "Dewasa dan anak >12 tahun: 1 tablet (10 mg) sekali sehari, sebaiknya diminum malam hari atau sesuai anjuran dokter.",
        sideEffects: "Mengantuk ringan, mulut kering, lelah, atau pusing pada beberapa orang.",
        contraindication: "Hati-hati pada pasien dengan gangguan ginjal berat atau lansia. Hindari konsumsi alkohol saat menggunakan obat ini.",
        storage: "Simpan di tempat kering dan sejuk (suhu di bawah 30°C).",
        safety: "Meskipun antihistamin non-sedatif, obat ini tetap dapat menimbulkan kantuk pada sebagian orang. Hindari mengemudi jika mengantuk."
    },

    {
        name: "Omeprazole",
        generic: "Omeprazole",
        brand: "Losec, Omez, Prilosec",
        category: "Obat Keras",
        form: "Kapsul lepas tunda (delayed-release)",
        strength: "20 mg",
        image: "images/omeprazole.jpg",
        indication: "Penghambat pompa proton (PPI) yang bekerja mengurangi produksi asam lambung pada GERD, tukak lambung, dan tukak duodenum.",
        usage: "Biasanya 1 kapsul (20 mg) sekali sehari di pagi hari sebelum makan. Telan kapsul utuh dengan air, jangan dikunyah atau digerus.",
        sideEffects: "Sakit kepala, diare, konstipasi, perut kembung, mual, atau sakit perut.",
        contraindication: "Hipersensitif terhadap omeprazole atau obat golongan PPI lainnya. Waspadai interaksi dengan obat tertentu seperti klopidogrel.",
        storage: "Simpan dalam wadah tertutup rapat pada suhu ruang dan hindari kelembapan.",
        safety: "Tidak dianjurkan untuk penggunaan mandiri berkepanjangan tanpa pemeriksaan medis lebih lanjut."
    },

    {
        name: "Antasida",
        generic: "Aluminium hydroxide + Magnesium hydroxide",
        brand: "Antasida Doen, Mylanta, Polysilane",
        category: "Obat Bebas",
        form: "Tablet kunyah, suspensi cair",
        strength: "Kombinasi standar Al(OH)3 & Mg(OH)2",
        image: "images/antasida.jpg",
        indication: "Membantu menetralkan kelebihan asam lambung dan meredakan gejala maag, nyeri ulu hati, kembung, serta rasa perih.",
        usage: "Diminum 1-2 jam setelah makan dan menjelang tidur. Untuk tablet kunyah: kunyah terlebih dahulu sebelum ditelan.",
        sideEffects: "Dapat menyebabkan sembelit (dari aluminium) atau diare (dari magnesium), tergantung respon tubuh.",
        contraindication: "Hati-hati pada penderita gangguan fungsi ginjal berat karena risiko penumpukan ion magnesium dan aluminium.",
        storage: "Simpan pada tempat kering dan terlindung dari paparan panas langsung.",
        safety: "Beri jeda minimal 2 jam bila meminum antasida bersama obat lain karena antasida dapat mengganggu penyerapan obat lain."
    },

    {
        name: "Loratadine",
        generic: "Loratadine",
        brand: "Claritin, Alloris, Cronitin",
        category: "Obat Bebas Terbatas",
        form: "Tablet, sirup",
        strength: "10 mg",
        image: "images/loratadine.jpg",
        indication: "Membantu meredakan gejala alergi musiman, rinitis alergi (bersin, hidung berair), serta gatal-gatal pada kulit.",
        usage: "Dewasa dan anak >12 tahun: 1 tablet (10 mg) sekali sehari. Gunakan sesuai petunjuk pada kemasan.",
        sideEffects: "Sakit kepala, mulut kering, lelah, dan rasa tidak nyaman pada pencernaan.",
        contraindication: "Perhatian pada penderita gangguan fungsi hati berat atau ibu hamil dan menyusui.",
        storage: "Simpan pada suhu ruang (15-30°C) di tempat kering.",
        safety: "Jangan mengonsumsi melebihi dosis yang dianjurkan (maksimal 10 mg per 24 jam)."
    },

    {
        name: "Aspirin",
        generic: "Acetylsalicylic acid",
        brand: "Bayer Aspirin, Aspilets, Cardioaspirin",
        category: "Obat Bebas Terbatas",
        form: "Tablet biasa, tablet enterik, tablet kunyah",
        strength: "80 mg, 100 mg, 500 mg",
        image: "images/aspirin.jpg",
        indication: "Sebagai pereda nyeri dan demam (dosis 500 mg) atau antiplatelet untuk mencegah penggumpalan darah pada kondisi kardiovaskular (dosis rendah 80-100 mg).",
        usage: "Gunakan tepat sesuai petunjuk dokter atau indikasi etiket. Sebaiknya diminum bersama makanan atau segelas air penuh.",
        sideEffects: "Iritasi lambung, mual, sakit maag, hingga risiko perdarahan saluran cerna.",
        contraindication: "Dilarang untuk anak di bawah 16 tahun yang mengalami infeksi virus (risiko Sindrom Reye). Hindari pada penderita tukak lambung aktif dan gangguan pembekuan darah.",
        storage: "Simpan dalam wadah tertutup rapat di tempat sejuk dan kering.",
        safety: "Konsultasikan selalu dengan dokter sebelum mengonsumsi aspirin secara rutin."
    },

    {
        name: "Diclofenac",
        generic: "Diclofenac sodium / potassium",
        brand: "Voltaren, Cataflam, Flamar",
        category: "Obat Keras",
        form: "Tablet salut enterik, gel oles, injeksi",
        strength: "25 mg, 50 mg",
        image: "images/diclofenac.jpg",
        indication: "Antiinflamasi nonsteroid kuat untuk mengatasi nyeri akut dan radang sendi seperti osteoartritis, reumatoid artritis, dan nyeri pasca operasi.",
        usage: "Harus dengan resep dokter. Umumnya diminum 50 mg 2-3 kali sehari sesudah makan.",
        sideEffects: "Nyeri ulu hati, mual, kembung, pusing, hingga risiko tukak lambung dan gangguan kardiovaskular pada dosis tinggi.",
        contraindication: "Kontraindikasi pada penderita tukak peptik aktif, riwayat pendarahan lambung, gagal jantung berat, atau asma akibat NSAID.",
        storage: "Simpan pada suhu ruang dan terlindung dari kelembapan.",
        safety: "Gunakan pada dosis terendah yang efektif dan dalam durasi sesingkat mungkin."
    },

    {
        name: "Loperamide",
        generic: "Loperamide hydrochloride",
        brand: "Imodium, Lodia, Renamid",
        category: "Obat Bebas Terbatas",
        form: "Tablet, kapsul",
        strength: "2 mg",
        image: "images/loperamide.jpg",
        indication: "Antidiare yang bekerja memperlambat gerakan peristaltik usus sehingga frekuensi buang air besar berkurang dan tinja lebih padat.",
        usage: "Dewasa: Awal 4 mg (2 tablet), diikuti 2 mg setelah setiap buang air besar cair (maksimal 8 mg/hari untuk swamedikasi).",
        sideEffects: "Konstipasi (sembelit), kram perut, pusing, dan mulut kering.",
        contraindication: "Tidak boleh digunakan pada diare berdarah (disentri), demam tinggi, atau diare akibat infeksi bakteri invasif.",
        storage: "Simpan di tempat kering dan sejuk pada suhu di bawah 30°C.",
        safety: "Hentikan penggunaan bila diare sudah membaik atau bila tidak ada perbaikan dalam 48 jam. Tetap utamakan hidrasi dengan oralit."
    },

    {
        name: "Vitamin C",
        generic: "Ascorbic acid",
        brand: "Redoxon, Vitacimin, Enervon-C, CDR",
        category: "Obat Bebas",
        form: "Tablet hisap, tablet effervescent, kaplet",
        strength: "50 mg, 500 mg, 1000 mg",
        image: "images/vitaminc.jpg",
        indication: "Membantu memenuhi kebutuhan vitamin C harian, menjaga daya tahan tubuh, dan mempercepat penyembuhan luka.",
        usage: "Gunakan sesuai aturan pada kemasan. Tablet effervescent dilarutkan dalam segelas air terlebih dahulu.",
        sideEffects: "Konsumsi dosis berlebih (>2000 mg/hari) dapat memicu diare, kram lambung, dan mual.",
        contraindication: "Hati-hati pada penderita gangguan fungsi ginjal, riwayat batu ginjal (batu kalsium oksalat), atau hemokromatosis.",
        storage: "Simpan pada wadah tertutup rapat, kering, dan terlindung dari sinar matahari langsung.",
        safety: "Kebutuhan vitamin C tubuh pada umumnya sudah terpenuhi dari buah dan sayur segar."
    },

    {
        name: "Dextromethorphan",
        generic: "Dextromethorphan hydrobromide",
        brand: "Vicks Formula 44, Bisolvon Antitusif, Siladex",
        category: "Obat Bebas Terbatas",
        form: "Sirup batuk, tablet",
        strength: "15 mg / tablet, 5-10 mg / 5ml sirup",
        image: "images/dextromethorphan.jpg",
        indication: "Antitusif untuk menekan rangsangan batuk kering (batuk tidak berdahak).",
        usage: "Gunakan sesuai takaran sendok obat pada kemasan atau resep dokter. Jangan melebihi dosis harian maksimal.",
        sideEffects: "Kantuk ringan, pusing, mual, dan konstipasi.",
        contraindication: "Tidak dianjurkan untuk batuk berdahak berlebihan, penderita asma kronis, atau bersamaan dengan obat antidepresan golongan MAOI.",
        storage: "Simpan pada suhu ruang dan hindari tempat yang terkena panas langsung.",
        safety: "Jangan disalahgunakan dan hindari konsumsi bersama alkohol."
    },

    {
        name: "Metformin",
        generic: "Metformin hydrochloride",
        brand: "Glucophage, Nevox, Gludepatic",
        category: "Obat Keras",
        form: "Tablet biasa, tablet lepas lambat (XR)",
        strength: "500 mg, 850 mg",
        image: "images/metformin.jpg",
        indication: "Obat lini pertama diabetes melitus tipe 2 untuk mengontrol kadar gula darah dengan menurunkan produksi glukosa di hati.",
        usage: "Wajib sesuai resep dokter. Biasanya diminum saat atau segera setelah makan untuk mengurangi rasa tidak nyaman di lambung.",
        sideEffects: "Gangguan pencernaan seperti mual, kembung, diare, dan rasa logam di lidah pada awal terapi.",
        contraindication: "Tidak boleh untuk pasien dengan gangguan ginjal berat, gagal hati, atau riwayat asidosis laktat.",
        storage: "Simpan pada tempat kering bersuhu sejuk (15-25°C).",
        safety: "Lakukan pemeriksaan fungsi ginjal dan gula darah secara berkala sesuai instruksi dokter."
    },

    {
        name: "Amlodipine",
        generic: "Amlodipine besylate",
        brand: "Norvask, Tensivask, Amlocor",
        category: "Obat Keras",
        form: "Tablet",
        strength: "5 mg, 10 mg",
        image: "images/amlodipine.jpg",
        indication: "Antagonis kalsium untuk menurunkan tekanan darah tinggi (hipertensi) dan mencegah angina (nyeri dada).",
        usage: "Diminum 1 kali sehari pada jam yang sama setiap hari dengan atau tanpa makanan, sesuai petunjuk dokter.",
        sideEffects: "Pembengkakan pergelangan kaki (edema perifer), pusing, sakit kepala, rasa panas di wajah (flushing).",
        contraindication: "Hati-hati pada pasien dengan syok kardiogenik, stenosis aorta berat, atau gangguan fungsi hati.",
        storage: "Simpan pada suhu ruang terkontrol dan jauhkan dari jangkauan anak-anak.",
        safety: "Jangan menghentikan konsumsi obat secara mendadak meskipun merasa sudah sehat tanpa berkonsultasi dengan dokter."
    },

    {
        name: "Furosemide",
        generic: "Furosemide",
        brand: "Lasix, Farsix, Uresix",
        category: "Obat Keras",
        form: "Tablet, ampul injeksi",
        strength: "40 mg",
        image: "images/furosemide.jpg",
        indication: "Diuretik kuat (loop diuretic) untuk membuang kelebihan cairan dan garam pada pasien edema akibat gagal jantung, penyakit ginjal, atau sirosis hati.",
        usage: "Harus sesuai resep dokter. Disarankan diminum pagi hari agar tidak mengganggu tidur akibat sering buang air kecil di malam hari.",
        sideEffects: "Sering buang air kecil, dehidrasi, pusing akibat tekanan darah turun (hipotensi), dan penurunan kadar elektrolit (seperti kalium).",
        contraindication: "Anuria (tidak bisa kencing sama sekali), dehidrasi berat, dan hipokalemia berat.",
        storage: "Simpan di tempat kering dan terlindung dari cahaya.",
        safety: "Perlu pemantauan kadar elektrolit dan fungsi ginjal secara berkala."
    },

    {
        name: "Salbutamol",
        generic: "Salbutamol sulfate / Albuterol",
        brand: "Ventolin, Astharol, Salbuven",
        category: "Obat Keras",
        form: "Inhaler aerosol, tablet, sirup, cairan nebulizer",
        strength: "Inhaler 100 mcg/puff, tablet 2 mg & 4 mg",
        image: "images/salbutamol.jpg",
        indication: "Bronkodilator kerja cepat untuk meredakan sesak napas akut akibat asma bronkial atau penyakit paru obstruktif kronis (PPOK).",
        usage: "Inhaler dihirup saat terjadi serangan sesak (umumnya 1-2 semprotan). Ikuti teknik penggunaan inhaler yang benar sesuai arahan apoteker.",
        sideEffects: "Tremor (gemetar pada jari tangan), jantung berdebar (palpitasi), pusing, dan rasa cemas.",
        contraindication: "Hati-hati pada pasien dengan penyakit jantung koroner, hipertensi berat, hipertiroidisme, atau diabetes.",
        storage: "Simpan tabung inhaler pada suhu kamar, jangan sampai tertusuk atau terkena panas tinggi.",
        safety: "Bila sesak napas tidak membaik setelah menggunakan inhaler, segera cari pertolongan medis darurat."
    },

    {
        name: "Mefenamic Acid",
        generic: "Mefenamic acid (Asam Mefenamat)",
        brand: "Ponstan, Mefinal, Pondex",
        category: "Obat Keras",
        form: "Kaplet salut selaput, kapsul",
        strength: "500 mg",
        image: "images/mefenamic.jpg",
        indication: "Membantu meredakan nyeri ringan hingga sedang seperti sakit gigi, nyeri haid (dismenore), sakit kepala, dan nyeri setelah cedera/operasi kecil.",
        usage: "Harus dengan resep atau anjuran dokter. Umumnya 500 mg 3 kali sehari dan harus diminum setelah makan.",
        sideEffects: "Gangguan saluran cerna seperti nyeri ulu hati, mual, muntah, diare, atau perut perih.",
        contraindication: "Penderita riwayat tukak lambung aktif, penyakit radang usus, gangguan ginjal atau hati berat, serta trimester ketiga kehamilan.",
        storage: "Simpan pada tempat kering dan suhu kamar di bawah 30°C.",
        safety: "Jangan digunakan melebihi durasi 7 hari berturut-turut tanpa evaluasi dokter."
    },

    {
        name: "Domperidone",
        generic: "Domperidone",
        brand: "Motilium, Vometa, Vesperum",
        category: "Obat Keras",
        form: "Tablet, sirup, drop suspensi",
        strength: "10 mg",
        image: "images/domperidone.jpg",
        indication: "Antiemetik dan prokinetik untuk meredakan gejala mual dan muntah akut serta rasa tidak nyaman pada perut akibat pengosongan lambung yang lambat.",
        usage: "Dewasa: 10 mg hingga 3 kali sehari. Diminum 15-30 menit sebelum makan dan sebelum tidur bila perlu.",
        sideEffects: "Mulut kering, sakit kepala, diare ringan, atau kram usus ringan.",
        contraindication: "Perdarahan atau sumbatan mekanik pada saluran cerna, serta pasien dengan riwayat gangguan irama jantung (perpanjangan interval QT).",
        storage: "Simpan dalam wadah tertutup rapat pada suhu ruang.",
        safety: "Penggunaan domperidone sebaiknya dalam dosis efektif terendah dan durasi sesingkat mungkin (maksimal 7 hari)."
    },

    {
        name: "Clotrimazole",
        generic: "Clotrimazole",
        brand: "Canesten, Fungiderm, Daktarin (Miconazole setara)",
        category: "Obat Bebas Terbatas",
        form: "Krim topikal, serbuk, tablet vagina",
        strength: "Krim 1%",
        image: "images/clotrimazole.jpg",
        indication: "Antijamur topikal spektrum luas untuk mengobati infeksi jamur kulit seperti panu, kurap, kutu air (tinea pedis), dan kandidiasis kulit.",
        usage: "Oleskan tipis dan merata pada area kulit yang terinfeksi dan telah dibersihkan, 2-3 kali sehari selama 2-4 minggu.",
        sideEffects: "Iritasi lokal, rasa terbakar, gatal, atau kemerahan pada area kulit yang diolesi.",
        contraindication: "Hipersensitif terhadap clotrimazole atau bahan dasar krim.",
        storage: "Simpan pada suhu ruang di bawah 25°C dan hindari pembekuan.",
        safety: "Hanya untuk pemakaian luar pada kulit. Hindari kontak dengan mata atau selaput lendir. Lanjutkan pemakaian beberapa hari setelah gejala hilang agar jamur tidak kambuh."
    },

    {
        name: "Povidone Iodine",
        generic: "Povidone iodine",
        brand: "Betadine, Septadine, Isodine",
        category: "Obat Bebas",
        form: "Cairan antiseptik, salep, obat kumur",
        strength: "Cairan 10%",
        image: "images/povidone.jpg",
        indication: "Antiseptik lokal untuk mencegah dan mengobati infeksi pada luka lecet, luka gores, luka bakar ringan, serta perawatan tali pusat.",
        usage: "Bersihkan area luka terlebih dahulu, lalu oleskan atau teteskan larutan povidone iodine pada luka menggunakan kapas atau kain kasa steril.",
        sideEffects: "Iritasi kulit ringan atau dermatitis kontak pada individu yang sensitif terhadap iodium.",
        contraindication: "Riwayat alergi terhadap iodin, penderita penyakit tiroid aktif (bila digunakan pada luka bakar luas).",
        storage: "Simpan pada tempat sejuk dan terlindung dari cahaya matahari langsung.",
        safety: "Hanya untuk pemakaian luar pada permukaan tubuh. Jangan ditelan atau digunakan pada mata."
    }

];


/* =====================================================
   DATA ARTIKEL EDUKASI LENGKAP & MUDAH DIPAHAMI
===================================================== */

const articles = {

    etiket: {
        title: "Panduan Lengkap Membaca Etiket Obat Tanpa Bingung",
        content: `
            <p class="article-lead">
                Etiket obat adalah "surat panduan resmi" yang disiapkan oleh apoteker khusus untuk Anda. Membaca etiket dengan teliti adalah benteng pertahanan pertama agar pengobatan berhasil dan terhindar dari keracunan atau salah minum obat.
            </p>

            <div class="edu-callout tip">
                <i class="fa-solid fa-lightbulb"></i>
                <div>
                    <strong>Paling Pertama: Kenali Warna Etiket!</strong>
                    <ul>
                        <li><span class="etiket-pill white">Etiket Putih</span> : Untuk <strong>Obat Dalam</strong> (obat yang diminum dan masuk lambung, misal tablet, kapsul, sirup).</li>
                        <li><span class="etiket-pill blue">Etiket Biru</span> : Untuk <strong>Obat Luar</strong> (tidak boleh ditelan, misal salep kulit, tetes mata, tetes telinga, supositoria, obat kumur).</li>
                    </ul>
                </div>
            </div>

            <h3>6 Informasi Wajib yang Harus Anda Cek Sebelum Minum Obat</h3>
            <ol class="edu-checklist">
                <li><strong>Nama Pasien:</strong> Pastikan nama yang tertulis adalah nama Anda atau keluarga Anda yang sakit. Sering terjadi obat tertukar antar-anggota keluarga di rumah!</li>
                <li><strong>Nama Obat & Kekuatan Dosis:</strong> Ketahui nama zat obat dan kekuatannya (misal: <em>Paracetamol 500 mg</em>).</li>
                <li><strong>Aturan Frekuensi:</strong> Berapa kali dalam sehari obat diminum (misal: <em>3 x sehari 1 tablet</em>).</li>
                <li><strong>Waktu Minum:</strong>
                    <ul>
                        <li><em>Sebelum Makan (ac):</em> Diminum saat perut kosong (30-60 menit sebelum makan) agar obat terserap sempurna.</li>
                        <li><em>Sesudah Makan (dc):</em> Diminum 15-30 menit setelah makan untuk mencegah iritasi lambung.</li>
                        <li><em>Saat Makan (pc):</em> Diminum bersamaan dengan suapan makanan.</li>
                        <li><em>Malam Hari / Sebelum Tidur:</em> Biasanya untuk obat yang memicu kantuk atau obat kolesterol.</li>
                    </ul>
                </li>
                <li><strong>Instruksi Khusus:</strong> Perhatikan stiker tambahan seperti <em>"Kocok Dahulu Sebelum Diminum"</em> (untuk sirup suspensi) atau <em>"Harus Dihabiskan"</em> (untuk antibiotik).</li>
                <li><strong>Tanggal Kedaluwarsa / Batas Pakai:</strong> Jangan gunakan obat bila sudah melewati tanggal tersebut.</li>
            </ol>

            <div class="edu-callout note">
                <i class="fa-solid fa-circle-question"></i>
                <div>
                    <strong>Ingat Gerakan 5T (Tanya Obat ke Apoteker):</strong>
                    <p>1. Apa nama dan kegunaan obat ini? &bull; 2. Berapa dosisnya? &bull; 3. Bagaimana cara pakainya? &bull; 4. Apa efek sampingnya? &bull; 5. Bagaimana cara menyimpannya?</p>
                </div>
            </div>
        `
    },

    simpan: {
        title: "Cara Menyimpan Obat di Rumah: Jangan Sampai Obat Jadi Racun!",
        content: `
            <p class="article-lead">
                Banyak orang menyimpan obat di sembarang tempat, seperti di dekat kompor dapur atau kamar mandi. Padahal, panas, cahaya matahari langsung, dan udara lembap dapat merusak susunan zat aktif obat sehingga obat tidak manjur lagi atau bahkan berubah menjadi senyawa beracun.
            </p>

            <h3>Tiga Zona Suhu Penyimpanan Obat Standar</h3>
            <div class="edu-grid-cards">
                <div class="edu-subcard">
                    <h4><i class="fa-solid fa-snowflake"></i> Suhu Dingin (2°C – 8°C)</h4>
                    <p>Wajib disimpan di <strong>kulkas bagian tengah/rak bawah</strong> (BUKAN di freezer/pintu freezer):</p>
                    <ul>
                        <li>Insulin untuk diabetes.</li>
                        <li>Supositoria (obat yang dimasukkan lewat anus agar tidak meleleh).</li>
                        <li>Sirup kering antibiotik yang sudah dilarutkan air.</li>
                        <li>Vaksin dan serum tertentu.</li>
                    </ul>
                </div>

                <div class="edu-subcard">
                    <h4><i class="fa-solid fa-temperature-half"></i> Suhu Kamar Sejuk (15°C – 25°C)</h4>
                    <p>Suhu ruangan yang kering dan tidak terpapar panas berlebih:</p>
                    <ul>
                        <li>Tablet, kaplet, dan kapsul strip/blister.</li>
                        <li>Sirup batuk dan vitamin biasa.</li>
                        <li>Salep dan krim kulit pada umumnya.</li>
                    </ul>
                </div>
            </div>

            <h3>3 Tempat Terlarang Menyimpan Obat:</h3>
            <ul>
                <li>❌ <strong>Kamar Mandi:</strong> Uap air yang sangat lembap membuat tablet cepat lembek, hancur, dan ditumbuhi jamur mikroskopis.</li>
                <li>❌ <strong>Dekat Kompor / Microwave / Kulkas Bagian Luar:</strong> Suhu panas dari kompor merusak kestabilan senyawa kimia obat.</li>
                <li>❌ <strong>Dashboard atau Bagasi Mobil:</strong> Suhu kabin mobil yang terparkir di siang hari bisa melonjak hingga lebih dari 50°C!</li>
            </ul>

            <div class="edu-callout alert">
                <i class="fa-solid fa-shield-halved"></i>
                <div>
                    <strong>Tips Kotak Obat Keluarga yang Aman:</strong>
                    <p>Selalu simpan obat dalam kemasan aslinya bersama brosur dan etiket. Pisahkan obat minum dari racun serangga atau pembersih lantai, dan letakkan di tempat yang tinggi agar tidak dijangkau balita yang mengira obat adalah permen.</p>
                </div>
            </div>
        `
    },

    generik: {
        title: "Mitos vs Fakta: Benarkah Obat Generik Kurang Manjur Dibanding Obat Mahal?",
        content: `
            <p class="article-lead">
                Masih ada anggapan bahwa "obat generik itu murah, jadi pasti mutunya jelek". Ini adalah <strong>mitos yang keliru</strong>. Di mata ilmu farmasi dan kedokteran, obat generik memiliki zat aktif, dosis, keamanan, dan efektivitas terapi yang setara dengan obat bermerek yang harganya berkali-kali lipat lebih mahal.
            </p>

            <h3>Mengapa Harga Obat Generik Bisa Sangat Terjangkau?</h3>
            <p>
                Ketika suatu obat baru pertama kali ditemukan, perusahaan penemunya menghabiskan dana triliunan rupiah dan riset selama belasan tahun. Pemerintah memberikan hak perlindungan eksklusif (Hak Paten) selama kurang lebih 20 tahun agar penemu bisa menjual obat tersebut dengan nama dagang eksklusif (Obat Paten).
            </p>
            <p>
                Setelah masa paten 20 tahun habis, pabrik farmasi lain di seluruh dunia <strong>bebas memproduksi zat yang sama</strong>. Karena pabrik lain ini tidak perlu mengeluarkan biaya riset awal, biaya royalti penemuan, atau biaya iklan komersial di TV, mereka bisa menjualnya dengan harga murni bahan baku yang sangat ramah di kantong!
            </p>

            <h3>Contoh Nyata Sehari-hari</h3>
            <div class="edu-compare-box">
                <div>
                    <strong>Zat Aktif (Generik Murni)</strong>
                    <p>Paracetamol 500 mg</p>
                    <small>Harga: Rp 3.000 – 5.000 / strip</small>
                </div>
                <div class="divider">VS</div>
                <div>
                    <strong>Nama Dagang / Merek Terkenal</strong>
                    <p>Panadol, Biogesic, Sanmol 500 mg</p>
                    <small>Harga: Rp 12.000 – 18.000 / strip</small>
                </div>
            </div>
            <p><em>Keduanya mengandung molekul zat aktif Paracetamol 500 mg yang sama persis dan bekerja menurunkan panas serta nyeri dengan cara yang sama.</em></p>

            <div class="edu-callout tip">
                <i class="fa-solid fa-award"></i>
                <div>
                    <strong>Jaminan Uji Bioekivalensi (BE) BPOM:</strong>
                    <p>Semua obat generik di Indonesia wajib lolos uji klinis Bioekivalensi dari Badan Pengawas Obat dan Makanan (BPOM) untuk membuktikan bahwa kecepatan penyerapan dan kadar obat di dalam darah sama persis dengan obat paten aslinya.</p>
                </div>
            </div>
        `
    },

    bebas: {
        title: "Arti Lengkap Simbol Lingkaran Obat Resmi BPOM",
        content: `
            <p class="article-lead">
                Pernahkah Anda memperhatikan simbol lingkaran berwarna di sudut kemasan obat? Simbol tersebut dibuat oleh pemerintah (Badan POM) sebagai tanda pengenal tingkat keamanan obat agar masyarakat tahu batasan penggunaannya.
            </p>

            <div class="edu-symbol-item">
                <div class="edu-sym-icon">
                    <img src="images/logo-obat-bebas.svg" alt="Obat Bebas">
                </div>
                <div>
                    <h4>1. Obat Bebas (Lingkaran Hijau Garis Tepi Hitam)</h4>
                    <p><strong>Arti:</strong> Obat paling aman untuk swamedikasi (pengobatan mandiri). Anda dapat membelinya secara bebas di apotek, toko obat berizin, supermarket, maupun warung tanpa resep dokter.</p>
                    <p><strong>Contoh:</strong> Paracetamol, Vitamin C, Antasida maag, Oralit, Rivanol pembersih luka.</p>
                </div>
            </div>

            <div class="edu-symbol-item">
                <div class="edu-sym-icon">
                    <img src="images/logo-obat-bebas-terbatas.svg" alt="Obat Bebas Terbatas">
                </div>
                <div>
                    <h4>2. Obat Bebas Terbatas (Lingkaran Biru Garis Tepi Hitam)</h4>
                    <p><strong>Arti:</strong> Sebenarnya termasuk obat keras, tetapi dalam dosis dan kemasan kecil masih diizinkan dibeli tanpa resep dokter di apotek atau toko obat berizin. Pada kemasannya <strong>wajib tercantum kotak peringatan hitam (P.No. 1 s/d P.No. 6)</strong>.</p>
                    <p><strong>Contoh Kotak Peringatan:</strong></p>
                    <ul>
                        <li><em>P.No. 1:</em> Awas! Obat Keras. Bacalah aturan memakainya. (Obat flu/batuk).</li>
                        <li><em>P.No. 2:</em> Awas! Obat Keras. Hanya untuk kumur, jangan ditelan. (Obat kumur antiseptik).</li>
                        <li><em>P.No. 3:</em> Awas! Obat Keras. Hanya untuk bagian luar dari badan. (Salep kulit/antijamur).</li>
                        <li><em>P.No. 4:</em> Awas! Obat Keras. Hanya untuk dibakar. (Rokok asma tradisional).</li>
                        <li><em>P.No. 5:</em> Awas! Obat Keras. Tidak boleh ditelan. (Supositoria anus).</li>
                        <li><em>P.No. 6:</em> Awas! Obat Keras. Obat wasir, jangan ditelan.</li>
                    </ul>
                </div>
            </div>

            <div class="edu-symbol-item">
                <div class="edu-sym-icon">
                    <img src="images/logo-obat-keras.svg" alt="Obat Keras">
                </div>
                <div>
                    <h4>3. Obat Keras (Lingkaran Merah Huruf 'K' Hitam)</h4>
                    <p><strong>Arti:</strong> Obat berbahaya jika dipakai sembarangan. <strong>Hanya boleh dibeli dengan resep dokter</strong> dan harus ditebus di apotek resmi.</p>
                    <p><strong>Contoh:</strong> Semua jenis antibiotik (Amoxicillin, Cefixime), obat hipertensi (Amlodipine), obat diabetes (Metformin), obat asam urat (Allopurinol), dan obat pereda nyeri kuat.</p>
                </div>
            </div>

            <div class="edu-symbol-item">
                <div class="edu-sym-icon">
                    <img src="images/logo-narkotika.svg" alt="Narkotika">
                </div>
                <div>
                    <h4>4. Narkotika (Palang Medali Merah dalam Lingkaran Putih)</h4>
                    <p><strong>Arti:</strong> Obat yang berkhasiat membius atau menghilangkan rasa nyeri hebat, namun memiliki potensi ketergantungan (adiksi) yang sangat tinggi. Pengawasannya ekstra ketat dengan pelaporan nomor resep dan identitas pasien ke Kementerian Kesehatan.</p>
                    <p><strong>Contoh:</strong> Morfin, Fentanil, Kodein dosis tertentu.</p>
                </div>
            </div>
        `
    },

    tigakali: {
        title: "Aturan Minum Obat 3 Kali Sehari: Jangan Salah Kaprah Lagi!",
        content: `
            <p class="article-lead">
                Banyak orang mengira aturan minum obat 3 kali sehari berarti diminum saat sarapan pagi (07.00), makan siang (12.00), dan makan malam (19.00). <strong>Tahukah Anda bahwa cara tersebut keliru secara medis?</strong>
            </p>

            <h3>Mengapa Jadwal Jam Begitu Penting?</h3>
            <p>
                Di dalam tubuh, obat akan diserap ke dalam darah, bekerja menyembuhkan penyakit, lalu perlahan-lahan dibuang lewat urine atau empedu.
            </p>
            <p>
                Bila Anda minum obat jam 12.00 siang lalu jam 19.00 malam (hanya jeda 7 jam), lalu baru minum lagi jam 07.00 pagi besoknya (jeda 12 jam!), maka:
            </p>
            <ul>
                <li>Di malam hari, kadar obat dalam darah akan turun drastis di bawah batas efektif sehingga penyakit/kuman kembali berkembang.</li>
                <li>Di siang hari, jarak minum yang terlalu rapat bisa menumpuk zat obat sehingga memicu efek samping atau overdosis ringan.</li>
            </ul>

            <h3>Rumus Pembagian Jam yang Benar (Bagi 24 Jam):</h3>
            <div class="edu-grid-cards">
                <div class="edu-subcard">
                    <h4>🕒 3 Kali Sehari = Tiap 8 Jam Sekali</h4>
                    <p>Contoh jadwal ideal:</p>
                    <ul>
                        <li>Dosis 1 : Pukul <strong>06.00 Pagi</strong></li>
                        <li>Dosis 2 : Pukul <strong>14.00 Siang</strong></li>
                        <li>Dosis 3 : Pukul <strong>22.00 Malam</strong> (sebelum tidur)</li>
                    </ul>
                </div>

                <div class="edu-subcard">
                    <h4>🕒 2 Kali Sehari = Tiap 12 Jam Sekali</h4>
                    <p>Contoh jadwal ideal:</p>
                    <ul>
                        <li>Dosis 1 : Pukul <strong>07.00 Pagi</strong></li>
                        <li>Dosis 2 : Pukul <strong>19.00 Malam</strong></li>
                    </ul>
                </div>
            </div>

            <div class="edu-callout alert">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                    <strong>Bagaimana Jika Lupa Minum Obat?</strong>
                    <p>Segera minum begitu Anda ingat. Namun, jika sudah mendekati jam minum dosis berikutnya, abaikan dosis yang terlupa dan lanjutkan jadwal seperti biasa. <strong>JANGAN PERNAH menggandakan dosis (minum 2 tablet sekaligus)</strong> untuk menutupi dosis yang terlewat!</p>
                </div>
            </div>
        `
    },

    antibiotik: {
        title: "Pentingnya Menggunakan Antibiotik Secara Bijak: Ancaman Bakteri Kebal",
        content: `
            <p class="article-lead">
                Antibiotik adalah penemuan medis terbesar abad ke-20 yang menyelamatkan jutaan nyawa. Namun kini, antibiotik terancam kehilangan kekuatannya karena sering disalahgunakan oleh masyarakat.
            </p>

            <div class="edu-callout note">
                <i class="fa-solid fa-bacteria"></i>
                <div>
                    <strong>Kebenaran Utama: Antibiotik HANYA Membunuh BAKTERI, Bukan VIRUS!</strong>
                    <p>Penyakit seperti flu biasa (batuk-pilek), radang tenggorokan ringan akibat cuaca, cacar air, atau demam berdarah disebabkan oleh <strong>VIRUS</strong>. Meminum antibiotik untuk penyakit virus sama sekali tidak berguna dan justru merusak bakteri baik di usus Anda!</p>
                </div>
            </div>

            <h3>Apa Itu Bahaya Resistensi Antibiotik (Superbug)?</h3>
            <p>
                Ketika Anda meminum antibiotik sembarangan (misal hanya minum 2 hari lalu berhenti karena merasa sudah enakan), bakteri jahat di tubuh Anda <strong>belum mati sepenuhnya</strong>. Bakteri yang tersisa akan belajar mengenali racun antibiotik tersebut, bermutasi, dan berkembang biak menjadi "bakteri kebal" (Superbug).
            </p>
            <p>
                Di masa depan, bila Anda terkena infeksi lagi, antibiotik standar tidak akan mempan lagi. Pasien harus dirawat di ICU dengan antibiotik generasi tinggi yang harganya mahal dan memiliki efek samping berat bagi ginjal dan hati.
            </p>

            <h3>4 Aturan Emas Pasien Bijak Antibiotik:</h3>
            <ol class="edu-checklist">
                <li><strong>Hanya Minum atas Resep Dokter:</strong> Jangan pernah membeli antibiotik sendiri di warung atau memaksa dokter meresepkan antibiotik bila dokter menilai itu infeksi virus.</li>
                <li><strong>Wajib Dihabiskan:</strong> Habiskan seluruh obat antibiotik sampai butir terakhir sesuai jumlah hari yang diresepkan dokter, meskipun badan Anda sudah merasa sehat bugar.</li>
                <li><strong>Jangan Simpan Sisa Antibiotik:</strong> Jangan pernah menyimpan antibiotik sisa untuk diminum saat sakit lagi di kemudian hari.</li>
                <li><strong>Jangan Berbagi dengan Orang Lain:</strong> Penyakit yang sama belum tentu membutuhkan antibiotik yang sama, dan dosis tiap orang berbeda.</li>
            </ol>
        `
    },

    lasa: {
        title: "Waspada Obat LASA: Serupa Tapi Tak Sama yang Berisiko Fatal",
        content: `
            <p class="article-lead">
                Di dunia farmasi, ada istilah terkenal bernama <strong>LASA (Look-Alike Sound-Alike)</strong> atau dalam bahasa Indonesia disebut <strong>NORUM (Nama Obat Rupa dan Ucapan Mirip)</strong>. Ini adalah kumpulan obat yang pelafalan namanya hampir sama atau kemasan fisiknya sangat mirip, padahal kegunaannya bertolak belakang!
            </p>

            <h3>Dua Kategori Bahaya Obat LASA:</h3>

            <h4>1. Sound-Alike (Bunyi Pengucapan Mirip)</h4>
            <div class="edu-grid-cards">
                <div class="edu-subcard">
                    <strong>Asam Mefenamat</strong>
                    <p>Pereda nyeri dan sakit gigi (antiinflamasi).</p>
                </div>
                <div class="edu-subcard">
                    <strong>Asam Traneksamat</strong>
                    <p>Penghenti pendarahan berat (koagulan darah).</p>
                </div>
            </div>
            <p><em>Tertukar kedua obat ini bisa berakibat fatal bagi pasien!</em></p>

            <div class="edu-grid-cards">
                <div class="edu-subcard">
                    <strong>Metformin</strong>
                    <p>Obat penurun gula darah untuk diabetes.</p>
                </div>
                <div class="edu-subcard">
                    <strong>Metronidazol</strong>
                    <p>Antibiotik untuk infeksi parasit dan bakteri usus.</p>
                </div>
            </div>

            <h4>2. Look-Alike (Bentuk Fisik & Kemasan Mirip)</h4>
            <p>
                Seringkali pabrik farmasi yang sama menggunakan desain kemasan strip, warna aluminium blister, atau botol sirup yang identik untuk dua obat yang berbeda. Bahkan obat dengan zat yang sama pun bisa berbahaya bila dosisnya tertukar (contoh: <em>Amlodipine 5 mg</em> tertukar dengan <em>Amlodipine 10 mg</em>).
            </p>

            <h3>Teknologi Pencegahan: "Tall Man Lettering"</h3>
            <p>
                Untuk mencegah tenaga kesehatan dan apoteker salah ambil obat, standar internasional mewajibkan penulisan huruf kapital di suku kata pembeda, contohnya:
            </p>
            <ul>
                <li><strong>cefOTAXIME</strong> vs <strong>cefTRIAXONE</strong></li>
                <li><strong>diaZEPAM</strong> vs <strong>clonaZEPAM</strong></li>
                <li><strong>hydrOXYzine</strong> vs <strong>hydrALAzine</strong></li>
            </ul>

            <div class="edu-callout tip">
                <i class="fa-solid fa-user-shield"></i>
                <div>
                    <strong>Pesan untuk Pasien di Apotek:</strong>
                    <p>Saat menerima obat dari apoteker, mintalah apoteker menjelaskan kembali nama obat dan kegunaannya satu per satu. Jangan ragu bertanya: <em>"Apakah obat ini benar untuk keluhan sakit saya?"</em></p>
                </div>
            </div>
        `
    },

    expired: {
        title: "Perbedaan ED dan BUD: Kapan Obat Benar-Benar Sudah Tidak Boleh Dipakai?",
        content: `
            <p class="article-lead">
                Banyak orang hanya melihat tulisan "EXP" pada kemasan obat. Padahal dalam dunia farmasi, ada perbedaan besar antara <strong>Expired Date (ED)</strong> dan <strong>Beyond Use Date (BUD)</strong>. Mengabaikan hal ini bisa berbahaya karena obat yang tampak bersih bisa jadi sudah terkontaminasi kuman!
            </p>

            <h3>Memahami ED vs BUD:</h3>
            <div class="edu-grid-cards">
                <div class="edu-subcard">
                    <h4>📅 ED (Expiration Date)</h4>
                    <p>Tanggal batas kedaluwarsa resmi dari pabrik farmasi <strong>selama segel kemasan asli belum pernah dibuka</strong> dan disimpan pada suhu yang tepat sesuai petunjuk kemasan.</p>
                </div>
                <div class="edu-subcard">
                    <h4>⏳ BUD (Beyond Use Date)</h4>
                    <p>Batas waktu obat boleh digunakan <strong>setelah segel primernya dibuka, diracik, atau dilarutkan</strong>. Batas BUD umumnya jauh lebih singkat daripada tanggal ED pabrik!</p>
                </div>
            </div>

            <h3>Batas Aman Penggunaan Setelah Kemasan Dibuka (Panduan BUD):</h3>
            <ul>
                <li>👁️ <strong>Tetes Mata & Tetes Telinga Botol Multidosis:</strong> Maksimal <strong>28 sampai 30 hari</strong> setelah segel tutup botol pertama kali dibuka. Setelah 30 hari, cairan rentan tercemar bakteri yang bisa membutakan mata.</li>
                <li>💊 <strong>Sirup Kering Antibiotik (yang dicampur air):</strong> Hanya bertahan <strong>7 hingga 14 hari</strong> saja. Sisa sirup antibiotik wajib dibuang setelahnya!</li>
                <li>🧴 <strong>Sirup Batuk / Demam Biasa (tanpa dilarutkan air):</strong> Maksimal <strong>6 bulan</strong> setelah botol dibuka, dengan catatan tutup selalu rapat dan tidak ada perubahan warna/bau.</li>
                <li>🩹 <strong>Salep / Krim Kulit Tube:</strong> Maksimal <strong>3 bulan</strong> setelah segel dibuka.</li>
                <li>📦 <strong>Puyer / Kapsul Racikan Apotek:</strong> Maksimal <strong>25 sampai 30 hari</strong> sejak tanggal peracikan pada etiket.</li>
            </ul>

            <h3>Cara Membuang Obat Kedaluwarsa yang Aman di Rumah:</h3>
            <ol class="edu-checklist">
                <li>Keluarkan tablet/kapsul dari kemasannya, lalu hancurkan.</li>
                <li>Campurkan serbuk obat dengan zat yang tidak menarik seperti ampas bubuk kopi, tanah, atau kotoran kucing agar tidak dimakan anak/hewan.</li>
                <li>Masukkan campuran ke dalam kantong plastik tertutup rapat, lalu buang ke tong sampah keluarga.</li>
                <li>Coret atau robek etiket identitas pasien dan gunting botol plastik obat agar tidak disalahgunakan oleh sindrom pemalsu obat ilegal.</li>
            </ol>
        `
    }

};


/* =====================================================
   HELPER FUNCTIONS (BADGE CLASS & OFFICIAL LOGO)
===================================================== */

function getCategoryClass(category) {
    if (category === "Obat Bebas") return "badge-free";
    if (category === "Obat Bebas Terbatas") return "badge-limited";
    if (category === "Obat Keras") return "badge-hard";
    return "";
}

function getCategoryLogo(category) {
    if (category === "Obat Bebas") return "images/logo-obat-bebas.svg";
    if (category === "Obat Bebas Terbatas") return "images/logo-obat-bebas-terbatas.svg";
    if (category === "Obat Keras") return "images/logo-obat-keras.svg";
    return "images/logo-obat-bebas.svg";
}


/* =====================================================
   NAVIGATION
===================================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const navMenu = document.getElementById("navMenu");
    if (navMenu) {
        navMenu.classList.remove("show");
    }

    if (pageId === "search") {
        renderDrugs(drugs, "drugList");
    }
}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}


/* =====================================================
   RENDER DRUGS (DILENGKAPI FOTO & LOGO RESMI BPOM)
===================================================== */

function renderDrugs(data, targetId = "drugList") {

    const container = document.getElementById(targetId);
    if (!container) return;

    if (data.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:#78918f;background:white;border-radius:18px;border:1px dashed #d5e6e3">
                <i class="fa-solid fa-prescription-bottle-medical" style="font-size:42px;margin-bottom:15px;color:#94b2ae"></i>
                <h3 style="color:#255c57;margin-bottom:8px;">Obat tidak ditemukan</h3>
                <p style="font-size:13px;max-width:350px;margin:auto;">
                    Tidak ada obat yang cocok dengan kata kunci atau filter yang Anda pilih. Coba gunakan nama obat lain.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = data.map((drug) => {
        const drugIndex = drugs.indexOf(drug);
        const categoryBadgeClass = getCategoryClass(drug.category);
        const categoryLogoUrl = getCategoryLogo(drug.category);

        return `
            <div class="drug-card" onclick="showDrugDetail(${drugIndex})">

                <div class="drug-card-media">
                    <img 
                        src="${drug.image}" 
                        alt="${drug.name}" 
                        class="drug-card-img"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='images/paracetamol.jpg';"
                    >

                    <!-- BADGE GOLONGAN LENGKAP DENGAN LOGO RESMI -->
                    <span class="drug-badge ${categoryBadgeClass}">
                        <img src="${categoryLogoUrl}" alt="Logo" class="drug-badge-logo">
                        <span>${drug.category}</span>
                    </span>
                </div>

                <div class="drug-card-content">
                    <h3 class="drug-card-title">${drug.name}</h3>
                    <p class="drug-card-generic">${drug.generic}</p>

                    <div class="drug-card-specs">
                        <span><i class="fa-solid fa-capsules"></i> ${drug.strength}</span>
                        <span><i class="fa-solid fa-box-archive"></i> ${drug.form.split(',')[0]}</span>
                    </div>

                    <button class="drug-card-cta" type="button">
                        Detail Lengkap <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        `;
    }).join("");
}


/* =====================================================
   POPULAR DRUGS
===================================================== */

function renderPopularDrugs() {
    const popular = drugs.slice(0, 8);
    renderDrugs(popular, "popularDrugs");
}


/* =====================================================
   SEARCH DRUG
===================================================== */

function searchDrug() {

    const keyword = document.getElementById("searchInput")
        ? document.getElementById("searchInput").value.toLowerCase().trim()
        : "";

    const category = document.getElementById("categoryFilter")
        ? document.getElementById("categoryFilter").value
        : "all";

    const filtered = drugs.filter(drug => {
        const matchesKeyword =
            drug.name.toLowerCase().includes(keyword) ||
            drug.generic.toLowerCase().includes(keyword) ||
            drug.brand.toLowerCase().includes(keyword) ||
            drug.indication.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "all" ||
            drug.category === category;

        return matchesKeyword && matchesCategory;
    });

    const resultCountEl = document.getElementById("resultCount");
    if (resultCountEl) {
        resultCountEl.textContent = `${filtered.length} obat ditemukan`;
    }

    renderDrugs(filtered, "drugList");
}


/* =====================================================
   DRUG DETAIL (FOTO BESAR & BADGE LOGO RESMI)
===================================================== */

function showDrugDetail(index) {

    const drug = drugs[index];
    if (!drug) return;

    const container = document.getElementById("drugDetailContent");
    if (!container) return;

    const categoryBadgeClass = getCategoryClass(drug.category);
    const categoryLogoUrl = getCategoryLogo(drug.category);

    container.innerHTML = `
        <div class="drug-detail-card">

            <div class="detail-header-custom">

                <div class="detail-photo-frame">
                    <img 
                        src="${drug.image}" 
                        alt="${drug.name}" 
                        class="detail-large-photo"
                        onerror="this.onerror=null; this.src='images/paracetamol.jpg';"
                    >
                </div>

                <div class="detail-header-info">
                    <div class="detail-category-badge-wrap">
                        <span class="drug-badge ${categoryBadgeClass} detail-badge-large">
                            <img src="${categoryLogoUrl}" alt="Logo ${drug.category}" class="drug-badge-logo large">
                            <span>${drug.category}</span>
                        </span>
                    </div>

                    <h1 class="detail-drug-title">${drug.name}</h1>
                    <p class="detail-generic-title">${drug.generic}</p>

                    <div class="detail-quick-tags">
                        <div class="quick-tag">
                            <i class="fa-solid fa-capsules"></i>
                            <div>
                                <small>Kekuatan Dosis</small>
                                <strong>${drug.strength}</strong>
                            </div>
                        </div>

                        <div class="quick-tag">
                            <i class="fa-solid fa-prescription-bottle-medical"></i>
                            <div>
                                <small>Bentuk Sediaan</small>
                                <strong>${drug.form}</strong>
                            </div>
                        </div>

                        <div class="quick-tag">
                            <i class="fa-solid fa-tag"></i>
                            <div>
                                <small>Contoh Merk</small>
                                <strong>${drug.brand}</strong>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="detail-body">

                <div class="detail-section highlight">
                    <h3>
                        <i class="fa-solid fa-stethoscope"></i>
                        Indikasi / Kegunaan
                    </h3>
                    <p>${drug.indication}</p>
                </div>

                <div class="detail-section">
                    <h3>
                        <i class="fa-solid fa-clock"></i>
                        Cara & Aturan Penggunaan Umum
                    </h3>
                    <p>${drug.usage}</p>
                </div>

                <div class="detail-info-grid">
                    <div class="info-box">
                        <h4>Nama Resmi</h4>
                        <p>${drug.name}</p>
                    </div>

                    <div class="info-box">
                        <h4>Zat Aktif (Generik)</h4>
                        <p>${drug.generic}</p>
                    </div>

                    <div class="info-box">
                        <h4>Klasifikasi Golongan</h4>
                        <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
                            <img src="${categoryLogoUrl}" alt="Logo" style="width:20px;height:20px;object-fit:contain;">
                            <p style="margin:0;">${drug.category}</p>
                        </div>
                    </div>

                    <div class="info-box">
                        <h4>Contoh Merk Terkenal</h4>
                        <p>${drug.brand}</p>
                    </div>
                </div>

                <div class="detail-section">
                    <h3>
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        Efek Samping yang Mungkin Terjadi
                    </h3>
                    <p>${drug.sideEffects}</p>
                </div>

                <div class="detail-section">
                    <h3>
                        <i class="fa-solid fa-ban"></i>
                        Kontraindikasi & Perhatian Khusus
                    </h3>
                    <p>${drug.contraindication}</p>
                </div>

                <div class="detail-section">
                    <h3>
                        <i class="fa-solid fa-box"></i>
                        Petunjuk Penyimpanan
                    </h3>
                    <p>${drug.storage}</p>
                </div>

                <div class="detail-section">
                    <h3>
                        <i class="fa-solid fa-shield-heart"></i>
                        Informasi Keamanan & Swamedikasi
                    </h3>
                    <p>${drug.safety}</p>
                </div>

                <div class="warning-box">
                    <i class="fa-solid fa-circle-info"></i>
                    <div>
                        <strong>Perhatian Penting:</strong>
                        Informasi pada halaman ini disusun untuk edukasi kesehatan masyarakat umum dan tidak menggantikan pemeriksaan, diagnosis, atau anjuran medis dokter dan apoteker Anda.
                    </div>
                </div>

            </div>

        </div>
    `;

    showPage("drugDetail");
}


/* =====================================================
   ARTIKEL DETAIL (TAMPILAN ARTIKEL EDUKASI MENARIK)
===================================================== */

function openArticle(articleId) {

    const article = articles[articleId];
    if (!article) return;

    const contentContainer = document.getElementById("articleContent");
    if (!contentContainer) return;

    contentContainer.innerHTML = `
        <span class="article-category-tag">
            <i class="fa-solid fa-book-medical"></i> ARTIKEL EDUKASI FARMASIKU
        </span>

        <h1 class="article-main-title">${article.title}</h1>

        <div class="article-body-wrapper">
            ${article.content}
        </div>
        
        ${article.youtube ? `
    <div class="youtube-edu-card">
        <div class="youtube-edu-icon">
            <i class="fa-brands fa-youtube"></i>
        </div>

        <div class="youtube-edu-text">
            <h3>Video Edukasi</h3>
            <p>
                Pelajari materi ini melalui video edukasi di YouTube.
            </p>
        </div>

        <a 
            href="${article.youtube}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="youtube-edu-button"
        >
            <i class="fa-brands fa-youtube"></i>
            Tonton di YouTube
        </a>
    </div>
` : ''}

        <div class="warning-box">
            <i class="fa-solid fa-circle-info"></i>
            <div>
                <strong>Catatan Edukasi:</strong>
                Artikel ini merupakan panduan informasi kesehatan umum untuk menambah wawasan masyarakat. Bila Anda memiliki keluhan sakit atau pertanyaan spesifik mengenai resep obat pribadi Anda, selalu konsultasikan secara langsung dengan dokter atau apoteker di apotek terdekat.
            </div>
        </div>
    `;

    showPage("articleDetail");
}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    renderPopularDrugs();
    renderDrugs(drugs, "drugList");
});