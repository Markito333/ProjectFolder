import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'VetSys',
    company: 'Veterinaria Central',
    description:
      'Sistema de gestión integral para veterinarias con control de pacientes, historial clínico, citas y facturación.',
    mainPhoto: '/imgs/projects/VetSys.png',
    photos: [
      '/imgs/projects/Imagen3.jpg',
      '/imgs/projects/Imagen4.jpg',
      '/imgs/projects/Imagen5.jpg',
    ],
    status: 'private',
    link: 'https://example.com/vetsys',
    duration: '6 meses',
  },
  {
    id: '2',
    title: 'Blog Cristiano',
    company: 'Independiente',
    description:
      'Blog cristiano, para publicacion y consultas sobre consejería cristiana.',
    mainPhoto: '/imgs/projects/blog.png',
    photos: [
      '/imgs/projects/imagen6.jpg',
      '/imgs/projects/Imagen7.jpg',
    ],
    status: 'in-progress',
    link: 'https://example.com/blog',
    duration: '2 meses',
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
    status: 'in-progress',
    link: 'https://example.com/neuronalbible',
    duration: '8 meses',
  },
  {
    id: '4',
    title: 'Carisa',
    company: 'Carisa Corp',
    description:
      'Aplicación corporativa para gestión de relaciones con clientes, seguimiento de ventas y automatización de marketing.',
    mainPhoto: '/imgs/projects/carisa.png',
    photos: [
      '/imgs/projects/Imagen10.jpg',
      '/imgs/projects/Imagen11.jpg',
    ],
    status: 'public',
    duration: '5 meses',
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
    status: 'public',
    duration: '3 meses',
  },
  {
    id: '6',
    title: 'Verde Plants',
    company: 'VerdeLab',
    description:
      'E-commerce de plantas ornamentales con catálogo interactivo, guía de cuidados y envío a domicilio.',
    mainPhoto: '/imgs/projects/verdeplants.png',
    photos: [
      '/imgs/projects/Imagen2.jpg',
      '/imgs/projects/Imagen3.jpg',
    ],
    status: 'public',
    link: 'https://example.com/verdeplants',
    duration: '4 meses',
  },
  {
    id: '7',
    title: 'MascoLive',
    company: 'PetServices',
    description:
      'Plataforma de servicios veterinarios a domicilio con geolocalización, reservas en tiempo real y perfiles de mascotas.',
    mainPhoto: '/imgs/projects/mascolive.png',
    photos: [
      '/imgs/projects/Imagen4.jpg',
      '/imgs/projects/Imagen5.jpg',
    ],
    status: 'public',
    duration: '7 meses',
  },
  {
    id: '8',
    title: 'Dashboard Financiero',
    company: 'DataFinance',
    description:
      'Dashboard interactivo para análisis financiero con visualización de datos, reportes automatizados y predicciones.',
    mainPhoto: '/imgs/projects/Imagen1.png',
    photos: [
      '/imgs/projects/imagen6.jpg',
      '/imgs/projects/Imagen7.jpg',
    ],
    status: 'public',
    duration: '4 meses',
  },
  {
    id: '9',
    title: 'App de Recetas',
    company: 'CookHub',
    description:
      'Red social de recetas con subida de fotos, valoraciones, lista de ingredientes inteligente y planificador de comidas.',
    mainPhoto: '/imgs/projects/Imagen2.jpg',
    photos: [
      '/imgs/projects/Imagen8.jpg',
      '/imgs/projects/Imagen9.jpg',
      '/imgs/projects/Imagen10.jpg',
    ],
    status: 'public',
    link: 'https://example.com/recetas',
    duration: '3 meses',
  },
  {
    id: '10',
    title: 'Plataforma IoT',
    company: 'SmartHome',
    description:
      'Plataforma de Internet de las Cosas para hogares inteligentes con control remoto de dispositivos, automatización de rutinas y monitoreo en tiempo real mediante sensores.',
    mainPhoto: '/imgs/projects/Imagen11.jpg',
    photos: [
      '/imgs/projects/Imagen12.jpg',
      '/imgs/projects/Imagen1.png',
    ],
    status: 'in-progress',
    duration: '2 meses',
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
  },
];
