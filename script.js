const hm = document.getElementById('hm');
const about = document.querySelectorAll('#changeAbout');
const edu = document.querySelectorAll('#changeEdu');
const skil = document.querySelectorAll('#changeSkil');
const pro = document.querySelectorAll('#changePro');
const hub = document.querySelectorAll('#changeHub');

const desk = document.getElementById('desk');
const jur = document.getElementById('changejur');
const gpa = document.getElementById('changegpa');
const footer = document.getElementById('footer');


const head = document.querySelectorAll('#proHead');
const body = document.querySelectorAll('#proBody');


// for (let x in head){
//   const selectHead = head[x];
//   selectHead.innerText = Apro.vakantie;
// }


const chage = document.getElementById("lang");
chage.addEventListener("change", handleSelectChange);

let lang = {
  id: {
    home: "Beranda",
    about: "Tentang Saya",
    edu: "Pendidikan",
    skil: "Kemampuan",
    pro: "Proyek",
    hub: "Hubungi Saya",
    jur: "teknik informatika",
    gpa: "IPK",
    desk: "Lulusan S1 dari Universitas Pasundan dengan program studi Informatika memilikikemampuan berkomunikasi yang baik, mampu bekerja dalam tim, memahami logika pemrograman, menyukai tantangan, senang belajar hal baru, selalu mencari cara untuk memecahkan masalah.",
    footer: "Website portofolio ini dibangun oleh Dik Dik Nur Illahi menggunakan framework Bootstrap"
  },
  en: {
    home: "Home",
    about: "About Me",
    edu: "Education",
    skil: "Skill",
    pro: "Project",
    hub: "Contact Me",
    jur: "informatics engineering",
    gpa: "GPA",
    desk: "A graduate with a Bachelor's degree in Informatics from Universitas Pasundan, possessing strong communication skills, the ability to work well in a team, a solid understanding of programming logic, a passion for challenges, a love for learning new things, and a constant drive to find solutions to problems.",
    footer: "This Website portfolio made by Dik Dik Nur Illahi Using framework Bootstrap"
  }
}

function handleSelectChange(event) {
  const valueLang = event.target.value;
  // console.log(valueLang);
  function ganti(target, bahasa) {
    // console.log(bahasa);
    for (let item of target) {
      item.innerText = bahasa;
    }
  }

  const idHead = [
    "Blog Post Pariwisata Vakantie",
    "Website Penggajian PT Wahana Baja Gemilang",
    "Website Profil Esport"
  ];

  const idBody = [
    "Website Blog Post ini dibangun menggunakan framework Laravel dan Tailwind. Website ini merupakan salah satu tugas kuliah yang saya buat untuk memenuhi tugas mata kuliah Praktikum Pemrograman",
    "Website Penggajian ini dibangun menggunakan framework Laravel dan Tailwind. Website ini merupakan Tugas Akhir saya, website ini menghitung jam kerja karyawan dan melakukan perhitungan gaji dengan cara memasukan jam masuk dan pulang karyawan.",
    "Website ini dibangun menggunakan framework Bootstrap. Website ini merupakan salah satu tugas kuliah saya."
  ];

  const enHead = [
    "Vakantie Tourism Blog Post",
    "Payroll Website for PT Wahana Baja Gemilang",
    "Esports Profile Website"
  ];

  const enBody = [
    "This blog post website was built using the Laravel and Tailwind frameworks. It is one of the college assignments I created for the Programming Practicum course.",
    "This payroll website was built using the Laravel and Tailwind frameworks. It is my final project. The website calculates employee working hours and processes payroll by inputting check-in and check-out times.",
    "This website was built using the Bootstrap framework. It is one of my college assignments."
  ];

  function Head(target, bahasa) {
    for (let x in target) {
      const selecttarget = target[x];
      selecttarget.innerText = bahasa[x];
    }
  }

  function Body(target, bahasa) {
    for (let x in target) {
      const selecttarget = target[x];
      selecttarget.innerText = bahasa[x];
    }
  }

  if (valueLang == 'id') {
    // console.log(lang.id.about);
    hm.innerText = lang.id.home;
    ganti(about, lang.id.about);
    ganti(edu, lang.id.edu);
    ganti(skil, lang.id.skil);
    ganti(pro, lang.id.pro);
    ganti(hub, lang.id.hub);

    Head(head, idHead);
    Body(body, idBody);
    // Head(head, lang.id.gaji);
    desk.innerText = lang.id.desk;
    jur.innerText = lang.id.jur;
    gpa.innerText = lang.id.gpa;
    footer.innerText = lang.id.footer;
  } else {
    // console.log(lang.en)
    hm.innerText = lang.en.home;
    ganti(about, lang.en.about);
    ganti(edu, lang.en.edu);
    ganti(skil, lang.en.skil);
    ganti(pro, lang.en.pro);
    ganti(hub, lang.en.hub);

    Head(head, enHead);
    Body(body, enBody);

    desk.innerText = lang.en.desk;
    jur.innerText = lang.en.jur;
    gpa.innerText = lang.en.gpa;
    footer.innerText = lang.en.footer;
  }
}