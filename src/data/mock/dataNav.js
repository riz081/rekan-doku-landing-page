import { Materai, Sign, MateraiSign, CorporateBusiness } from '../../assets'

export const NavbarMenu = [
  {
    id: 1,
    title: "Beranda",
    link: "/",
  },
  {
    id: 2,
    title: "Doku-Stamp",
    link: "#",
    children: [
      {
        id: 1,
        title: "e-Materai",
        icon: Materai,
        desc: 'e-Materai resmi terverifikasi oleh PERURI',
        link: "/doku-stamp/e-materai"
      },
      {
        id: 2,
        title: "e-Sign",
        icon: Sign,
        desc: 'Tanda Tangan Digital Terautentikasi',
        link: "/doku-stamp/e-sign"
      },
      {
        id: 3,
        title: "e-Materai + Sign",
        icon: MateraiSign,
        desc: 'Integrasi e-Materai dan Tanda Tangan Digital',
        link: "/doku-stamp/fitur3"
      },
      {
        id: 4,
        title: "Corporate Business",
        icon: CorporateBusiness,
        desc: 'Rekan Doku dengan workflow perusahaan',
        link: "/doku-stamp/fitur4"
      },
    ],
  },
  {
    id: 3,
    title: "Bantuan",
    link: "#",
    children: [
      {
        id: 1,
        title: "Panduan",
        icon: Materai,
        desc: 'Panduan penggunaan layanan Rekan Doku',
        link: "/panduan"
      },
      {
        id: 2,
        title: "Verifikasi PDF",
        icon: MateraiSign,
        desc: 'Verifikasi dokumen PDF anda disini',
        link: "/verifikasi-pdf"
      },
      {
        id: 3,
        title: "F.A.Q",
        icon: Sign,
        desc: 'Pertanyaan yang sering ditanyakan',
        link: "/faq"
      },
    ],
  },
  {
    id: 4,
    title: "Hubungi Kami",
    link: "/hubungi-kami",
  },
];
