import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'VetSys',
    company: 'CarIsa',
    description:
      'Sistema de gestión integral para la clinica veterina para el control de pacientes, historial clínico, citas, facturación y gestión de stock.',
    mainPhoto: '/imgs/projects/VetSys.png',
    photos: [
      '/imgs/projects/Imagen3.jpg',
      '/imgs/projects/Imagen4.jpg',
      '/imgs/projects/Imagen5.jpg',
    ],
    status: 'private',
    link: 'https://example.com/vetsys',
    duration: '8 meses',
    technologies: [
     { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },

    ],
  },
  {
    id: '2',
    title: 'Blog Cristiano',
    company: 'Independiente',
    description:
      'Blog cristiano / Sanando el Corazón, para publicación y consultas sobre consejería cristiana.',
    mainPhoto: '/imgs/projects/blog.png',
    photos: [
      '/imgs/projects/imagen6.jpg',
      '/imgs/projects/Imagen7.jpg',
    ],
    status: 'in-progress',
    link: 'https://example.com/blog',
    duration: '2 meses',
    technologies: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ],
  },
  {
    id: '3',
    title: 'Neuronal Bible',
    company: 'BibleAI',
    description:
      'Plataforma de estudio bíblico con inteligencia artificial para búsqueda contextual, análisis de textos y referencias cruzadas.',
    mainPhoto: '/imgs/projects/neuronalbible.png',
    photos: [
      '/imgs/projects/Imagen8.jpg',
      '/imgs/projects/Imagen9.jpg',
    ],
    status: 'public',
    link: 'https://neuronalbible.vercel.app/',
    duration: '1 mes',
    technologies: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Taildwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'NextJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },

    ],
  },
  {
    id: '4',
    title: 'CarIsa',
    company: 'CarIsaVet',
    description:
      'Sitio web oficial de la clinica veterinaria CarIsa.',
    mainPhoto: '/imgs/projects/carisa.png',
    photos: [
      '/imgs/projects/Imagen10.jpg',
      '/imgs/projects/Imagen11.jpg',
    ],
    status: 'public',
    link: 'https://carisa.onrender.com/',
    duration: '5 meses',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    id: '5',
    title: 'Control de Gastos',
    company: 'FinanzasPro',
    description:
      'App de finanzas personales con categorización automática de gastos, presupuestos mensuales y gráficos de ahorro.',
    mainPhoto: '/imgs/projects/gastos.png',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '3 meses',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
     
    ],
  },
  {
    id: '6',
    title: 'Verde Plants',
    company: 'VerdeLab',
    description:
      'Sitio web completo para la gestión de plantas y vegetación de un contexto determinado.',
    mainPhoto: '/imgs/projects/verdeplants.png',
    photos: [
      '/imgs/projects/Imagen2.jpg',
      '/imgs/projects/Imagen3.jpg',
    ],
    status: 'public',
    link: 'https://verdeplants.onrender.com/',
    duration: '4 meses',
    technologies: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Taildwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'NextJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },

    ],
  },
  {
    id: '7',
    title: 'Mascolive',
    company: 'mascolive',
    description:
      'Plataforma de servicios veterinarios a domicilio con geolocalización, reservas en tiempo real y perfiles de mascotas.',
    mainPhoto: '/imgs/projects/mascolive.png',
    photos: [
      '/imgs/projects/Imagen4.jpg',
      '/imgs/projects/Imagen5.jpg',
    ],
    status: 'public',
    duration: '11 meses',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    id: '8',
    title: 'InfanteSoft',
    company: 'Círculo Infantil "JFCV"',
    description:
      'Sistema web integral, para la gestion de infantes, stock, cursos, trabajadores y más, en un círculo infantil.',
    mainPhoto: '/imgs/projects/Imagen1.png',
    photos: [
      '/imgs/projects/imagen6.jpg',
      '/imgs/projects/Imagen7.jpg',
    ],
    status: 'private',
    duration: '4 meses',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },

    ],
  },
  {
    id: '9',
    title: 'Sitio web de Recetas',
    company: 'UNAH',
    description:
      'Sitio web para consultar recetas cubanas, italianas y españolas en un restaurante.',
    mainPhoto: '/imgs/projects/Imagen5.jpg',
    photos: [
      '/imgs/projects/Imagen8.jpg',
      '/imgs/projects/Imagen9.jpg',
      '/imgs/projects/Imagen10.jpg',
    ],
    status: 'private',
    duration: '3 meses',
    technologies: [
           { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },

    ],
  },
  {
    id: '10',
    title: 'TikTok LOVE',
    company: 'bookingfwi',
    description:
      'Sitio web promocional para diseños LOVE en TikTok',
    mainPhoto: '/imgs/projects/Imagen11.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
      
    ],
  },
   {
    id: '11',
    title: 'Panaderia IToto',
    company: 'PanaderiaIItoto',
    description:
      'Plataforma web para ventas, pedidos en la panaderia ittoto.',
    mainPhoto: '/imgs/projects/panaderia.png',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '1 mes',
    technologies: [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
  {
    id: '12',
    title: 'Ventas Martin',
    company: 'VentasMartin',
    description:
      'Plataforma web para ventas y facturas con afip integración.',
    mainPhoto: '/imgs/projects/ventasmartin.png',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

    ],
  },
  {
    id: '13',
    title: 'Ventas Martin',
    company: 'VentasMartin',
    description:
      'Plataforma web para ventas y facturas con afip integración.',
    mainPhoto: '/imgs/projects/Imagen3.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

    ],
  },
   {
    id: '14',
    title: 'Invitación de boda',
    company: 'Independiente',
    description:
      'Sitio web de invitación para la boda de una hermosa pareja.',
    mainPhoto: '/imgs/projects/Imagen7.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'public',
    link: 'https://invitacionboda-lonh.onrender.com/',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
   {
    id: '15',
    title: 'DM Shop Market',
    company: 'dmshop',
    description:
      'Sitio web de catálogo de productos, con pedidos directos al Whatsapp.',
    mainPhoto: '/imgs/projects/Imagen6.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'public',
    link: 'https://dmmarket.onrender.com/',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
   {
    id: '16',
    title: 'BookingFWI Boats',
    company: 'bookingfwi',
    description:
      'Sitio web de catálogo para alquiler de habitaciones, reserva de aventuras en el caribe, y alquiler de yates.',
    mainPhoto: '/imgs/projects/Imagen8.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'public',
    link: 'https://emotionboatclub.bookingfwi.com/',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    ],
  },
   {  
    id: '17',
    title: 'BookingFWI LOVE Shop',
    company: 'bookingfwi',
    description:
      'Sitio web de catálogo para alquiler de habitaciones, reserva de aventuras en el caribe, y alquiler de yates.',
    mainPhoto: '/imgs/projects/Imagen10.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    ],
  },
  {  
    id: '18',
    title: 'Remesas Sony TopUp',
    company: 'Sony topup',
    description:
      'Sitio web de catálogo para compra de ropa basadas en la marca LOVE.',
    mainPhoto: '/imgs/projects/Imagen12.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'private',
    duration: '1 mes',
    technologies: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
];
