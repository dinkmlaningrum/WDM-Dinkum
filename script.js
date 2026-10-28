/**
 * DINA KUMALA NINGRUM - PROFESSIONAL RESUME & CV WEBSITE
 * President of Student Union at Jakarta Business School
 * Interactive Functionalities & Bilingual Localization
 */

// -----------------------------------------------------------------------------
// 1. Bilingual Translations Dictionary (Indonesian & English)
// -----------------------------------------------------------------------------
const translations = {
  id: {
    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_leadership: "Kepemimpinan",
    nav_projects: "Proyek & Prestasi",
    nav_gallery: "Galeri Kegiatan",
    nav_education: "Pendidikan",
    nav_skills: "Keahlian",
    nav_contact: "Kontak",
    btn_download_cv: "Unduh CV",
    btn_download_cv_full: "Unduh Resume Lengkap (PDF)",

    // Hero
    hero_badge: "Mahasiswa Bisnis Digital • Jakarta Business School",
    hero_greeting: "Halo, Saya",
    hero_subtitle_static: "Fokus Bidang:",
    hero_bio: "Mahasiswi Bisnis Digital yang berdedikasi tinggi dengan pengalaman praktis dalam koordinasi acara, strategi konten digital, dan pemberdayaan komunitas generasi muda. Terampil memimpin inisiatif kampus serta membangun kolaborasi eksternal strategis untuk mendorong dampak sosial positif dan pengembangan potensi mahasiswa.",
    hero_cta_explore: "Eksplorasi Profil",
    hero_cta_preview_pdf: "Lihat Dokumen PDF",
    hero_cta_contact: "Hubungi Saya",
    hero_connect_label: "Terhubung:",
    status_active: "Mahasiswa Aktif & Pemimpin BEM",
    card_role: "Mahasiswa S1 Bisnis Digital",
    card_sub_role: "President of Student Union",
    stat_dept_title: "Program Studi",
    stat_dept_val: "S1 Bisnis Digital (2023)",
    stat_tenure_title: "Amanah Kampus",
    stat_tenure_val: "President of Student Union",
    stat_loc_title: "Lokasi",
    stat_label_dedication: "Dedikasi Kemahasiswaan",
    stat_label_leadership: "Pengalaman Organisasi",
    stat_label_events: "Program & Event Terlaksana",
    stat_label_cert: "Pelatihan & Konferensi Global",

    // About
    about_tag: "Tentang Saya",
    about_title: "Kepemimpinan Transformatif & Passion Bisnis Digital",
    about_heading: "Profil Singkat",
    about_p1: "Sebagai mahasiswa Program Sarjana (S1) Bisnis Digital di <strong>Jakarta Business School</strong> yang tengah menempuh pendidikan sejak September 2023, saya mengintegrasikan wawasan analitis bisnis dengan keterampilan kepemimpinan strategis.",
    about_p2: "Dalam amanah sebagai <strong>President of Student Union</strong>, fokus utama saya adalah membangun ekosistem kampus yang inklusif, progresif, dan sinergis. Saya memiliki keahlian teruji dalam mengoordinasikan berbagai divisi kerja, merancang agenda berbasis dampak nyata, mengelola kemitraan lintas organisasi, serta menjembatani aspirasi mahasiswa dengan pemangku kebijakan kampus.",
    about_p3: "Kombinasi latar belakang <em>digital marketing</em>, manajemen acara berskala besar, komunikasi publik, serta keterlibatan forum internasional seperti <em>Global Student Summit di Malaysia</em> membentuk karakter kepemimpinan adaptif dan berorientasi solusi di era transformasi digital.",
    pillar_1_title: "Inovasi Digital",
    pillar_1_desc: "Memanfaatkan teknologi dan strategi konten kreatif dalam pemberdayaan civitas akademika.",
    pillar_2_title: "Kepemimpinan Empatik",
    pillar_2_desc: "Mengedepankan komunikasi terbuka, transparansi kepengurusan, dan aspirasi inklusif.",
    pillar_3_title: "Dampak Nyata",
    pillar_3_desc: "Setiap agenda dan program kerja dirancang memiliki parameter keberhasilan yang terukur.",

    // Info aside
    info_card_title: "Informasi Pribadi & Kontak",
    info_name: "Nama Lengkap",
    info_role: "Status & Posisi",
    info_role_val: "Mahasiswa S1 Bisnis Digital & President of Student Union",
    info_campus: "Institusi",
    info_email: "Email",
    info_phone: "No. Telepon / WA",
    info_social: "Instagram",
    info_lang: "Bahasa",
    btn_copy_email: "Salin Alamat Email",

    // Leadership Experience
    exp_tag: "Rekam Jejak Kepemimpinan",
    exp_title: "Pengalaman Organisasi & Manajerial",
    exp_subtitle: "Perjalanan memimpin organisasi mahasiswa, menggerakkan tim lintas divisi, dan menciptakan program kerja berorientasi pemberdayaan di Jakarta Business School.",
    badge_current_role: "Amanah Berjalan • Periode Aktif",
    period_pres: "Mei 2025 – Sekarang",
    pres_desc: "Memimpin seluruh badan eksekutif mahasiswa di Jakarta Business School dalam menyusun arah gerak strategis, mewadahi aspirasi mahasiswa, serta memperkuat sinergi antara mahasiswa, akademisi, dan stakeholder eksternal.",
    key_responsibilities: "Tanggung Jawab & Inisiatif Kunci:",
    pres_point_1: "<strong>Arah Strategis & Kepemimpinan Eksekutif:</strong> Menahkodai kepengurusan Student Union dengan prinsip transparansi, akuntabilitas, dan kolaboratif.",
    pres_point_2: "<strong>Pemberdayaan Komunitas Mahasiswa:</strong> Menginisiasi program-program pengembangan karir, kewirausahaan digital, dan kesehatan mental mahasiswa.",
    pres_point_3: "<strong>Advokasi & Diplomasi Kampus:</strong> Berfungsi sebagai jembatan komunikasi formal antara aspirasi seluruh angkatan mahasiswa dengan pimpinan rektorat/fakultas.",
    pres_point_4: "<strong>Kemitraan Strategis Eksternal:</strong> Membuka ruang kolaborasi dengan organisasi kepemudaan, komunitas bisnis, dan asosiasi mahasiswa antar-kampus.",

    badge_past_role: "Pengalaman Organisasi",
    period_staff: "Februari 2024 – Mei 2025",
    staff_desc: "Bertanggung jawab dalam merancang serta mengeksekusi program-program kepedulian sosial, keakraban mahasiswa, dan kolaborasi pengabdian masyarakat guna menumbuhkan solidaritas tinggi di lingkungan kampus.",
    key_achievements: "Kontribusi Utama:",
    staff_point_1: "Menggalang kegiatan pengabdian masyarakat dan program kepedulian lingkungan yang melibatkan mahasiswa aktif JBS.",
    staff_point_2: "Memfasilitasi integrasi sosial bagi mahasiswa baru melalui inisiatif interaktif dan komunikasi multikanal.",
    staff_point_3: "Bekerja sama erat dengan divisi internal untuk memastikan setiap program terlaksana sesuai tenggat waktu dan target partisipasi.",

    // Projects & Achievements
    proj_tag: "Portofolio & Pencapaian",
    proj_title: "Proyek Unggulan & Pengalaman Acara",
    proj_subtitle: "Bukti nyata kepemimpinan lapangan dalam memanajemeni acara skala kampus dan produksi acara kreatif kolaboratif.",
    makrab_badge: "Ketua Panitia / Project Lead",
    makrab_title: "Student Welcoming Gathering – “Malam Keakraban” (Makrab)",
    makrab_desc: "Memimpin seluruh komite kepanitiaan dalam menyelenggarakan kegiatan penyambutan dan keakraban mahasiswa baru Jakarta Business School.",
    makrab_p1: "Menahkodai koordinasi terpadu antar divisi: Acara, Logistik, Konsumsi, Medis, dan Keamanan.",
    makrab_p2: "Mengelola manajemen risiko, alur anggaran operasional, serta kelancaran rundown selama 2 hari 1 malam.",
    makrab_p3: "Mencapai tingkat kepuasan peserta yang luar biasa dan membangun ikatan solid lintas angkatan.",

    concert_badge: "Scriptwriter & Event Coordinator",
    concert_title: "Mini Concert & Perayaan 17 Agustus",
    concert_desc: "Bertindak sebagai penulis naskah (scriptwriter) dan koordinator konser akustik mini dalam rangka peringatan HUT Republik Indonesia, mengangkat tema seni dan pelestarian budaya lokal.",
    concert_p1: "Menginisiasi kolaborasi resmi dengan komunitas musik lokal ternama: Taman Suropati Chamber.",
    concert_p2: "Menyusun konsep narasi naskah pertunjukan, mengawasi alur panggung, dan interaksi audiens.",
    concert_p3: "Mendorong keterlibatan pemuda dalam mengapresiasi musik seni akustik serta pelestarian budaya bangsa.",

    summit_badge: "Delegasi Internasional",
    summit_title: "Global Student Summit 3.0",
    summit_desc: "Terpilih sebagai delegasi dalam forum konferensi mahasiswa internasional di Malaysia, mendiskusikan kepemimpinan pemuda, inovasi bisnis, dan kolaborasi kawasan regional ASEAN.",
    summit_p1: "Mewakili suara mahasiswa dalam diskusi panel kepemimpinan dan pembangunan berkelanjutan.",
    summit_p2: "Membangun jejaring koneksi akademik dengan mahasiswa dari berbagai universitas di Asia Tenggara.",
    summit_p3: "Memperluas perspektif global terkait dinamika bisnis digital regional.",

    mda_badge: "Peserta Terpilih / Scholar",
    mda_title: "Thriving in the Digital Age : Mental Health & Career Growth",
    mda_desc: "Mengikuti program intensif pengembangan kapabilitas kepemimpinan digital yang diselenggarakan oleh Bank Mandiri, menyeimbangkan akselerasi karir dengan ketahanan psikologis mental.",
    mda_p1: "Memperdalam strategi resiliensi dan work-life integration bagi profesional muda di era serba cepat.",
    mda_p2: "Mempelajari metodologi perencanaan karir berbasis kompetensi industri perbankan & teknologi terkini.",

    // Gallery
    gallery_tag: "Dokumentasi Visual",
    gallery_title: "Galeri Kegiatan & Rekam Jejak",
    gallery_subtitle: "Kumpulan momen penting kepemimpinan, kepanitiaan acara berskala kampus, delegasi internasional, dan inisiatif pengabdian mahasiswa.",
    filter_all: "Semua Kegiatan",
    filter_leadership: "Kepemimpinan BEM",
    filter_events: "Event & Kepanitiaan",
    filter_global: "Forum Internasional",
    filter_community: "Sosial & Komunitas",
    btn_view_photo: "Lihat Detail",
    btn_open_img: "Buka Ukuran Penuh",

    badge_event: "Event Kampus",
    badge_art: "Seni & Budaya",
    badge_global: "Internasional",
    badge_academy: "Digital Academy",
    badge_lead: "Amanah Eksekutif",
    badge_community: "Sosial Kampus",

    makrab_role_card: '<i class="fa-solid fa-crown"></i> Ketua Panitia (Project Lead)',
    concert_role_card: '<i class="fa-solid fa-pen-nib"></i> Scriptwriter & Coordinator',
    summit_role_card: '<i class="fa-solid fa-earth-americas"></i> Delegasi Internasional',
    mda_role_card: '<i class="fa-solid fa-award"></i> Selected Scholar / Cohort',
    pres_role_card: '<i class="fa-solid fa-crown"></i> President of Student Union',
    comm_role_card: '<i class="fa-solid fa-hands-holding-heart"></i> Staff Social & Community',

    gallery_title_1: "Malam Keakraban (Makrab) Mahasiswa 2024",
    gallery_desc_1: "Memimpin koordinasi terpadu 5 divisi kepanitiaan dalam penyelenggaraan malam keakraban mahasiswa baru Jakarta Business School.",
    gallery_title_2: "Mini Concert & HUT Kemerdekaan RI Ke-79",
    gallery_desc_2: "Kolaborasi artistik pertunjukan konser akustik bersama musisi lokal Taman Suropati Chamber untuk merayakan kemerdekaan bangsa.",
    gallery_title_3: "Global Student Summit 3.0 - Universiti Putra Malaysia",
    gallery_desc_3: "Mewakili Indonesia dalam dialog kepemimpinan mahasiswa Asia Tenggara mengenai inovasi bisnis digital dan keberlanjutan.",
    gallery_title_4: "Thriving in the Digital Age: Mental Health & Growth",
    gallery_desc_4: "Pelatihan kapabilitas kepemimpinan digital intensif oleh Bank Mandiri untuk penguatan resiliensi karir dan kesiapan profesional.",
    gallery_title_5: "Pelantikan & Rapat Kerja BEM Jakarta Business School",
    gallery_desc_5: "Peresmian amanah ketua badan eksekutif mahasiswa dan perumusan blueprint program kerja strategis sinergi kampus.",
    gallery_title_6: "Inisiatif Sosial & Pengabdian Komunitas Mahasiswa",
    gallery_desc_6: "Menggerakkan partisipasi mahasiswa dalam aksi kepedulian lingkungan dan keakraban sosial civitas akademika JBS.",

    // Education & Certifications
    edu_tag: "Landasan Akademik",
    edu_title: "Pendidikan & Sertifikasi Profesional",
    degree_level: "Program Sarjana (S1)",
    degree_name: "Bachelor's Degree in Business (S1 Bisnis Digital)",
    degree_desc: "Mempelajari ekosistem bisnis modern, transformasi digital perusahaan, pemasaran berbasis data, manajemen finansial, serta strategi pertumbuhan startup dan korporasi.",
    cert_heading: "Kursus & Pengembangan Kompetensi",

    // Skills
    skills_tag: "Kompetensi Utama",
    skills_title: "Keahlian & Kemahiran Profesional",
    skills_subtitle: "Kombinasi keahlian kepemimpinan manajerial, strategi konten digital, kemampuan komunikasi, dan penguasaan perangkat kerja.",
    skill_cat_1: "Kepemimpinan & Manajemen Acara",
    skill_cat_2: "Strategi Konten & Bisnis Digital",
    skill_cat_3: "Software, Tools & Bahasa",

    // PDF Banner
    pdf_banner_title: "Butuh Salinan Berkas Resmi CV?",
    pdf_banner_desc: "Unduh dokumen asli Curriculum Vitae resmi Dina Kumala Ningrum dalam format PDF siap cetak.",
    btn_view_pdf: "Buka PDF di Tab Baru",
    btn_download_now: "Unduh PDF Sekarang",

    // Contact
    contact_tag: "Mari Berkolaborasi",
    contact_title: "Hubungi Dina Kumala",
    contact_subtitle: "Terbuka untuk audiensi kemahasiswaan, kemitraan sponsorship, pembicara seminar/talkshow, dan kolaborasi strategis bisnis digital.",
    click_to_email: "Klik untuk mengirim surel →",
    click_to_wa: "Klik untuk membuka chat WhatsApp →",
    click_to_ig: "Kunjungi profil Instagram →",
    form_title: "Kirim Pesan Langsung",
    form_desc: "Silakan isi formulir di bawah ini untuk memulai obrolan, mengundang sebagai pembicara, atau menawarkan inisiatif kerja sama.",
    form_name_label: "Nama Lengkap / Instansi *",
    form_email_label: "Alamat Email *",
    form_phone_label: "Nomor WhatsApp",
    form_subject_label: "Topik Keperluan *",
    form_message_label: "Pesan Anda *",
    form_submit_btn: "Kirim via WhatsApp / Email",

    // Footer
    footer_tagline: "\"Memberdayakan Mahasiswa, Menggerakkan Dampak Positif, Menginspirasi Perubahan Melalui Inovasi Digital.\"",
    footer_quick_links: "Tautan Cepat",
    footer_doc_title: "Dokumen Resmi",
    footer_doc_desc: "Akses dan simpan curriculum vitae resmi dalam bentuk file digital."
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_leadership: "Leadership",
    nav_projects: "Projects & Achievements",
    nav_gallery: "Activity Gallery",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_contact: "Contact",
    btn_download_cv: "Download CV",
    btn_download_cv_full: "Download Full Resume (PDF)",

    // Hero
    hero_badge: "Digital Business Student • Jakarta Business School",
    hero_greeting: "Hello, I am",
    hero_subtitle_static: "Specialization:",
    hero_bio: "A passionate Digital Business student with hands-on experience in event coordination, digital content strategy, and youth community engagement. Adept in leading campus initiatives and building external collaborations to support social impact and student development.",
    hero_cta_explore: "Explore Profile",
    hero_cta_preview_pdf: "View PDF Document",
    hero_cta_contact: "Contact Me",
    hero_connect_label: "Connect:",
    status_active: "Active Student & Student Union President",
    card_role: "Digital Business Undergraduate",
    card_sub_role: "President of Student Union",
    stat_dept_title: "Field of Study",
    stat_dept_val: "B.Sc. Digital Business (2023)",
    stat_tenure_title: "Campus Office",
    stat_tenure_val: "President of Student Union",
    stat_loc_title: "Location",
    stat_label_dedication: "Student Body Dedication",
    stat_label_leadership: "Leadership Roles",
    stat_label_events: "Programs Executed",
    stat_label_cert: "Certifications & Summits",

    // About
    about_tag: "About Me",
    about_title: "Transformative Leadership & Digital Business Passion",
    about_heading: "Executive Summary",
    about_p1: "As a Bachelor of Business student in Digital Business at <strong>Jakarta Business School</strong> studying since September 2023, I combine data-driven business acumen with strategic, empathetic leadership.",
    about_p2: "In my role as <strong>President of Student Union</strong>, my primary vision is fostering an inclusive, forward-thinking, and empowering campus ecosystem. I bring proven experience in orchestrating cross-divisional teams, formulating high-impact programs, negotiating external partnerships, and advocating for student welfare with institutional leaders.",
    about_p3: "The synergy of my background in digital content strategy, large-scale event governance, public communication, and international exposure at the <em>Global Student Summit in Malaysia</em> shapes an adaptive, solution-focused leadership style tailored for the digital era.",
    pillar_1_title: "Digital Innovation",
    pillar_1_desc: "Leveraging technology and creative content frameworks to empower the student community.",
    pillar_2_title: "Empathetic Leadership",
    pillar_2_desc: "Prioritizing open governance, transparent communication, and student-first initiatives.",
    pillar_3_title: "Measurable Impact",
    pillar_3_desc: "Ensuring every event and strategic program delivers clear, tangible outcomes.",

    // Info aside
    info_card_title: "Contact & Profile Details",
    info_name: "Full Name",
    info_role: "Status & Position",
    info_role_val: "Digital Business Student & President of Student Union",
    info_campus: "Institution",
    info_email: "Email Address",
    info_phone: "Phone / WhatsApp",
    info_social: "Instagram",
    info_lang: "Languages",
    btn_copy_email: "Copy Email Address",

    // Leadership Experience
    exp_tag: "Leadership Journey",
    exp_title: "Executive & Organizational Experience",
    exp_subtitle: "Track record of presiding over the student government, aligning cross-functional teams, and championing campus-wide empowerment initiatives at Jakarta Business School.",
    badge_current_role: "Current Office • Active Term",
    period_pres: "May 2025 – Present",
    pres_desc: "Leading the executive student government at Jakarta Business School in setting strategic priorities, voicing student aspirations, and cultivating strong ties between students, academia, and industry partners.",
    key_responsibilities: "Key Executive Responsibilities:",
    pres_point_1: "<strong>Strategic Governance & Executive Direction:</strong> Steering the Student Union executive board with a strong emphasis on transparency, integrity, and collective growth.",
    pres_point_2: "<strong>Student Community Empowerment:</strong> Spearheading initiatives across career acceleration, digital entrepreneurship, and youth mental well-being.",
    pres_point_3: "<strong>Institutional Advocacy:</strong> Serving as the official representative and primary liaison between students and campus executive leadership.",
    pres_point_4: "<strong>External Strategic Partnerships:</strong> Fostering relationships with youth forums, business communities, and nationwide collegiate networks.",

    badge_past_role: "Organizational Experience",
    period_staff: "February 2024 – May 2025",
    staff_desc: "Orchestrated and executed social welfare drives, campus welcoming events, and civic engagement projects to cultivate solidarity across the student community.",
    key_achievements: "Key Contributions:",
    staff_point_1: "Organized impactful social outreach and community service events engaging active JBS students.",
    staff_point_2: "Facilitated seamless social onboarding and orientation for incoming freshman cohorts.",
    staff_point_3: "Collaborated closely with internal divisions to ensure timely execution and high attendee participation.",

    // Projects & Achievements
    proj_tag: "Portfolio & Milestones",
    proj_title: "Featured Projects & Event Operations",
    proj_subtitle: "Demonstrated track record in managing campus-scale event logistics and creative cultural productions.",
    makrab_badge: "Committee Head / Project Lead",
    makrab_title: "Student Welcoming Gathering – “Malam Keakraban” (Makrab)",
    makrab_desc: "Led the entire organizing committee and ensured seamless inter-divisional execution for the annual Jakarta Business School student orientation camp.",
    makrab_p1: "Supervised and coordinated across five distinct operational divisions: Programs, Logistics, Catering, Medical, and Security.",
    makrab_p2: "Managed comprehensive risk assessment, budgeting, and 48-hour event scheduling without operational hiccups.",
    makrab_p3: "Achieved outstanding participant satisfaction scores and built enduring bonds among students.",

    concert_badge: "Scriptwriter & Event Coordinator",
    concert_title: "Mini Concert & Indonesian Independence Day",
    concert_desc: "Served as scriptwriter and operational coordinator for a mini acoustic concert commemorating Indonesian Independence Day, highlighting national cultural heritage.",
    concert_p1: "Initiated and cemented an artistic collaboration with local chamber music group Taman Suropati Chamber.",
    concert_p2: "Penned the show's creative script, supervised stage transitions, and engaged live attendees.",
    concert_p3: "Championed youth participation in celebrating indigenous music and cultural arts.",

    summit_badge: "International Delegate",
    summit_title: "Global Student Summit 3.0",
    summit_desc: "Selected as an official international delegate at Universiti Putra Malaysia, engaging in pan-Asian dialogues on youth leadership, business agility, and ASEAN regional synergy.",
    summit_p1: "Represented student voices in policy panels exploring sustainable youth entrepreneurship.",
    summit_p2: "Built international networks with collegiate delegates from across Southeast Asia.",
    summit_p3: "Expanded global insights into emerging digital business ecosystems.",

    mda_badge: "Selected Scholar / Participant",
    mda_title: "Thriving in the Digital Age : Mental Health & Career Growth",
    mda_desc: "Completed an intensive future-readiness program hosted by Bank Mandiri, exploring sustainable career acceleration alongside mental resilience.",
    mda_p1: "Deepened practical strategies for work-life integration and resilience in fast-moving industries.",
    mda_p2: "Acquired insights into corporate digital transformation and human capital development in banking.",

    // Gallery
    gallery_tag: "Visual Documentation",
    gallery_title: "Activity Gallery & Milestone Archive",
    gallery_subtitle: "Curated moments of student union leadership, campus event productions, international conferences, and civic community engagement.",
    filter_all: "All Activities",
    filter_leadership: "Student Union Leadership",
    filter_events: "Campus Events",
    filter_global: "Global Forums",
    filter_community: "Social & Community",
    btn_view_photo: "View Details",
    btn_open_img: "Open Full Size",

    badge_event: "Campus Event",
    badge_art: "Arts & Culture",
    badge_global: "International",
    badge_academy: "Digital Academy",
    badge_lead: "Executive Office",
    badge_community: "Social Outreach",

    makrab_role_card: '<i class="fa-solid fa-crown"></i> Committee Head (Project Lead)',
    concert_role_card: '<i class="fa-solid fa-pen-nib"></i> Scriptwriter & Coordinator',
    summit_role_card: '<i class="fa-solid fa-earth-americas"></i> International Delegate',
    mda_role_card: '<i class="fa-solid fa-award"></i> Selected Scholar / Cohort',
    pres_role_card: '<i class="fa-solid fa-crown"></i> President of Student Union',
    comm_role_card: '<i class="fa-solid fa-hands-holding-heart"></i> Staff Social & Community',

    gallery_title_1: "Student Welcoming Gathering (Makrab) 2024",
    gallery_desc_1: "Led comprehensive coordination across 5 committees for the annual Jakarta Business School student orientation camp.",
    gallery_title_2: "Mini Acoustic Concert & 79th Independence Day",
    gallery_desc_2: "Artistic production and acoustic stage scriptwriting in collaboration with Taman Suropati Chamber musicians.",
    gallery_title_3: "Global Student Summit 3.0 - Universiti Putra Malaysia",
    gallery_desc_3: "Represented Indonesia in regional collegiate dialogues on youth leadership, digital commerce, and ASEAN synergy.",
    gallery_title_4: "Thriving in the Digital Age: Mental Health & Growth",
    gallery_desc_4: "Intensive digital capability and resilience fellowship by Bank Mandiri preparing next-generation corporate leaders.",
    gallery_title_5: "Inauguration & Strategic Plenary of JBS Student Union",
    gallery_desc_5: "Official oath-taking and blueprint formulation as President of Student Union uniting the student body.",
    gallery_title_6: "Civic Outreach & Community Development Initiative",
    gallery_desc_6: "Championed student volunteer participation in social advocacy and sustainable collegiate solidarity drives.",

    // Education & Certifications
    edu_tag: "Academic Foundation",
    edu_title: "Education & Professional Certifications",
    degree_level: "Bachelor's Degree (Undergraduate)",
    degree_name: "Bachelor's Degree in Business (Digital Business)",
    degree_desc: "Studying modern digital commerce frameworks, corporate digital transformation, data analytics in marketing, financial modeling, and venture growth.",
    cert_heading: "Professional Training & Certifications",

    // Skills
    skills_tag: "Core Competencies",
    skills_title: "Professional Skills & Tool Mastery",
    skills_subtitle: "A balanced synergy of organizational leadership, digital marketing strategy, public speaking, and productivity tool proficiency.",
    skill_cat_1: "Leadership & Event Governance",
    skill_cat_2: "Digital Strategy & Content",
    skill_cat_3: "Software, Tools & Languages",

    // PDF Banner
    pdf_banner_title: "Need an Official Copy of the CV?",
    pdf_banner_desc: "Download the original Curriculum Vitae document of Dina Kumala Ningrum in high-resolution, print-ready PDF format.",
    btn_view_pdf: "Open PDF in New Tab",
    btn_download_now: "Download PDF Now",

    // Contact
    contact_tag: "Let's Collaborate",
    contact_title: "Get in Touch with Dina Kumala",
    contact_subtitle: "Available for student union dialogues, event sponsorships, keynote speaking / panel moderation, and digital business initiatives.",
    click_to_email: "Click to send an email →",
    click_to_wa: "Click to start WhatsApp chat →",
    click_to_ig: "Visit Instagram profile →",
    form_title: "Send a Direct Message",
    form_desc: "Fill in the details below to initiate a conversation, discuss a partnership, or invite Dina as a speaker.",
    form_name_label: "Full Name / Organization *",
    form_email_label: "Email Address *",
    form_phone_label: "WhatsApp Phone Number",
    form_subject_label: "Inquiry Topic *",
    form_message_label: "Your Message *",
    form_submit_btn: "Send via WhatsApp / Email",

    // Footer
    footer_tagline: "\"Empowering Students, Driving Positive Impact, Inspiring Change through Digital Innovation.\"",
    footer_quick_links: "Quick Links",
    footer_doc_title: "Official Documents",
    footer_doc_desc: "Access and preserve the official curriculum vitae in digital format."
  }
};

// -----------------------------------------------------------------------------
// 2. Application State & DOM Ready
// -----------------------------------------------------------------------------
let currentLang = localStorage.getItem('dina_lang') || 'id';
let currentTheme = localStorage.getItem('dina_theme') || 'light';

// Animated Typing Words
const typingPhrases = {
  id: [
    "Mahasiswi Bisnis Digital",
    "President of Student Union",
    "Event Strategist & Koordinator",
    "Youth Community Advocate",
    "Pemimpin Mahasiswa JBS"
  ],
  en: [
    "Digital Business Student",
    "President of Student Union",
    "Event Strategist & Coordinator",
    "Youth Community Advocate",
    "Student Leader at JBS"
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize Language & Theme
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // Setup Event Listeners
  setupThemeToggle();
  setupLanguageToggle();
  setupMobileMenu();
  setupScrollSpy();
  setupStatsCounter();
  setupTypingEffect();
  setupGalleryFilters();
  setupGalleryLightbox();
  setupContactForm();
  setupBackToTop();
});

// -----------------------------------------------------------------------------
// 3. Theme Toggle (Dark / Light)
// -----------------------------------------------------------------------------
function setupThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('dina_theme', currentTheme);
    showToast(currentLang === 'id' ? `Mode ${currentTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan` : `Switched to ${currentTheme} mode`);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
      themeIcon.style.color = '#fbbf24';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      themeIcon.style.color = '';
    }
  }
}

// -----------------------------------------------------------------------------
// 4. Language Switcher (ID / EN)
// -----------------------------------------------------------------------------
function setupLanguageToggle() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    applyLanguage(currentLang);
    localStorage.setItem('dina_lang', currentLang);
    showToast(currentLang === 'id' ? "Bahasa diubah ke Bahasa Indonesia" : "Language switched to English");
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  const dict = translations[lang] || translations.id;

  // Translate all elements with data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // If it contains HTML markup (like <strong>, <em>), update innerHTML, else textContent
      if (dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Re-sync typing animation phrases
  resetTypingEffect();

  // Re-sync open lightbox if active
  if (typeof renderLightboxContent === 'function') {
    const modal = document.getElementById('galleryLightbox');
    if (modal && modal.classList.contains('active')) {
      renderLightboxContent();
    }
  }
}

// -----------------------------------------------------------------------------
// 5. Dynamic Typing Effect in Hero
// -----------------------------------------------------------------------------
let typingTimeout = null;
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function setupTypingEffect() {
  typePhrase();
}

function resetTypingEffect() {
  if (typingTimeout) clearTimeout(typingTimeout);
  charIndex = 0;
  isDeleting = false;
  typePhrase();
}

function typePhrase() {
  const typingEl = document.getElementById('typingText');
  if (!typingEl) return;

  const phrases = typingPhrases[currentLang] || typingPhrases.id;
  const currentPhrase = phrases[phraseIndex % phrases.length];

  if (isDeleting) {
    typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2000; // Pause at full phrase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    typeSpeed = 400; // Pause before next word
  }

  typingTimeout = setTimeout(typePhrase, typeSpeed);
}

// -----------------------------------------------------------------------------
// 6. Mobile Navigation Drawer & Navbar Scroll Effect
// -----------------------------------------------------------------------------
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupScrollSpy() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Navbar glass effect on scroll
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// -----------------------------------------------------------------------------
// 7. Stats Counter Animation on Viewport Entry
// -----------------------------------------------------------------------------
function setupStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          animateNumber(stat, target, suffix, 1800);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.hero-stats-container');
  if (statsSection) observer.observe(statsSection);
}

function animateNumber(element, target, suffix, duration) {
  let start = 0;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic formula
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);

    element.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  }

  requestAnimationFrame(updateCount);
}

// -----------------------------------------------------------------------------
// 8. Contact Form Handling (Interactive WhatsApp & Email Redirection)
// -----------------------------------------------------------------------------
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const phone = document.getElementById('senderPhone').value.trim();
    const subject = document.getElementById('messageSubject').value;
    const message = document.getElementById('messageText').value.trim();

    if (!name || !email || !message) {
      showToast(currentLang === 'id' ? "Mohon lengkapi semua kolom yang bertanda bintang (*)" : "Please complete all mandatory fields (*)");
      return;
    }

    // Compose formatted message for WhatsApp / Email
    const waText = encodeURIComponent(
      `Halo Dina Kumala,\n\nNama / Instansi: ${name}\nEmail: ${email}\nNo. HP: ${phone || '-'}\nTopik: ${subject}\n\nPesan:\n${message}\n\n[Dikirim melalui Web CV Dina Kumala]`
    );

    const waUrl = `https://wa.me/6285819303998?text=${waText}`;

    showToast(currentLang === 'id' ? "Membuka WhatsApp untuk mengirim pesan..." : "Opening WhatsApp to send your message...");

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 800);
  });
}

// -----------------------------------------------------------------------------
// 9. Copy to Clipboard Utility
// -----------------------------------------------------------------------------
window.copyContactInfo = function(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || (currentLang === 'id' ? "Teks berhasil disalin!" : "Copied to clipboard!"));
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
};

function fallbackCopy(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(currentLang === 'id' ? "Teks berhasil disalin!" : "Copied to clipboard!");
}

// -----------------------------------------------------------------------------
// 10. Toast Notification Manager
// -----------------------------------------------------------------------------
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// -----------------------------------------------------------------------------
// 11. Back to Top Button
// -----------------------------------------------------------------------------
function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0.5';
    }
  });
}

// -----------------------------------------------------------------------------
// 12. Activity Gallery Filters
// -----------------------------------------------------------------------------
function setupGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// -----------------------------------------------------------------------------
// 13. Gallery Lightbox Modal
// -----------------------------------------------------------------------------
const galleryItemsData = [
  {
    id: 1,
    img: 'assets/images/gallery-makrab.svg',
    date: '28–29 Nov 2024',
    badgeKey: 'badge_event',
    roleKey: 'makrab_role_card',
    roleIcon: 'fa-crown',
    titleKey: 'gallery_title_1',
    descKey: 'gallery_desc_1'
  },
  {
    id: 2,
    img: 'assets/images/gallery-concert.svg',
    date: 'Agustus 2024',
    badgeKey: 'badge_art',
    roleKey: 'concert_role_card',
    roleIcon: 'fa-pen-nib',
    titleKey: 'gallery_title_2',
    descKey: 'gallery_desc_2'
  },
  {
    id: 3,
    img: 'assets/images/gallery-summit.svg',
    date: 'Nov–Des 2024',
    badgeKey: 'badge_global',
    roleKey: 'summit_role_card',
    roleIcon: 'fa-earth-americas',
    titleKey: 'gallery_title_3',
    descKey: 'gallery_desc_3'
  },
  {
    id: 4,
    img: 'assets/images/gallery-mandiri.svg',
    date: 'Februari 2025',
    badgeKey: 'badge_academy',
    roleKey: 'mda_role_card',
    roleIcon: 'fa-award',
    titleKey: 'gallery_title_4',
    descKey: 'gallery_desc_4'
  },
  {
    id: 5,
    img: 'assets/images/gallery-bem-president.svg',
    date: 'Mei 2025',
    badgeKey: 'badge_lead',
    roleKey: 'pres_role_card',
    roleIcon: 'fa-crown',
    titleKey: 'gallery_title_5',
    descKey: 'gallery_desc_5'
  },
  {
    id: 6,
    img: 'assets/images/gallery-community.svg',
    date: '2024–2025',
    badgeKey: 'badge_community',
    roleKey: 'comm_role_card',
    roleIcon: 'fa-hands-holding-heart',
    titleKey: 'gallery_title_6',
    descKey: 'gallery_desc_6'
  }
];

let currentLightboxIndex = 0;

function setupGalleryLightbox() {
  const modal = document.getElementById('galleryLightbox');
  if (!modal) return;

  const closeBtn = document.getElementById('lightboxCloseBtn');
  const backdrop = document.getElementById('lightboxBackdrop');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  const downloadBtn = document.getElementById('lightboxDownloadBtn');
  const cards = document.querySelectorAll('.gallery-card');

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightboxItem);
  if (nextBtn) nextBtn.addEventListener('click', nextLightboxItem);

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const item = galleryItemsData[currentLightboxIndex];
      if (item && item.img) {
        window.open(item.img, '_blank');
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightboxItem();
    if (e.key === 'ArrowRight') nextLightboxItem();
  });
}

function openLightbox(index) {
  const modal = document.getElementById('galleryLightbox');
  if (!modal) return;

  currentLightboxIndex = index;
  renderLightboxContent();

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('galleryLightbox');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function prevLightboxItem() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryItemsData.length) % galleryItemsData.length;
  renderLightboxContent();
}

function nextLightboxItem() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryItemsData.length;
  renderLightboxContent();
}

function renderLightboxContent() {
  const item = galleryItemsData[currentLightboxIndex];
  if (!item) return;

  const dict = translations[currentLang] || translations.id;

  const imgEl = document.getElementById('lightboxImg');
  const badgeEl = document.getElementById('lightboxBadge');
  const dateEl = document.getElementById('lightboxDate');
  const titleEl = document.getElementById('lightboxTitle');
  const roleEl = document.getElementById('lightboxRole');
  const descEl = document.getElementById('lightboxDesc');
  const counterEl = document.getElementById('lightboxCounter');

  if (imgEl) {
    imgEl.src = item.img;
    imgEl.alt = dict[item.titleKey] || 'Dokumentasi Kegiatan';
  }
  if (badgeEl) badgeEl.textContent = dict[item.badgeKey] || 'Event';
  if (dateEl) dateEl.textContent = item.date;
  if (titleEl) titleEl.textContent = dict[item.titleKey] || '';
  if (roleEl) {
    const roleHtml = dict[item.roleKey] || '';
    roleEl.innerHTML = roleHtml;
  }
  if (descEl) descEl.textContent = dict[item.descKey] || '';
  if (counterEl) {
    const ofText = currentLang === 'id' ? 'dari' : 'of';
    counterEl.textContent = `${currentLightboxIndex + 1} ${ofText} ${galleryItemsData.length}`;
  }
}

