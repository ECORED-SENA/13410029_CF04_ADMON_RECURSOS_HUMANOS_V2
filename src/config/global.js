export default {
  global: {
    Name: 'El proceso de la nómina y prestaciones sociales en la administración del talento humano',
    Description:
      'Este componente formativo aborda la gestión de la nómina y las prestaciones sociales en la administración del talento humano. Explica el devengado, las deducciones y las apropiaciones, así como los aportes a seguridad social, los aportes parafiscales y las obligaciones del empleador. También presenta las disposiciones sobre jornada laboral, horas extras y recargos, incluidos los cambios introducidos por la Ley 2466 de 2025, para orientar la liquidación de la nómina conforme a la normativa colombiana.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El proceso de la nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de la nómina',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Seguridad social, aportes parafiscales y prestaciones sociales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El salario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fijación del salario mínimo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Salario mínimo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Jornada laboral, horas extras y recargos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Jornada laboral máxima semanal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Recargo nocturno y horas extras',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Recargos por trabajo en días de descanso obligatorio y festivos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Apropiaciones',
      significado:
        'aportes y provisiones a cargo del empleador para cubrir sus obligaciones de seguridad social, aportes parafiscales, prestaciones sociales y vacaciones.',
    },
    {
      termino: 'Deducciones',
      significado:
        'valores que se descuentan del devengado del trabajador, como los aportes a salud y pensión, la retención en la fuente, las libranzas y los embargos.',
    },
    {
      termino: 'Devengado',
      significado:
        'total de ingresos del trabajador durante un período de pago, antes de aplicar las deducciones.',
    },
    {
      termino: 'Jornada nocturna',
      significado:
        'horario comprendido entre las 7:00 p. m. y las 6:00 a. m. del día siguiente, conforme a la Ley 2466 de 2025.',
    },
    {
      termino: 'Nómina',
      significado:
        'registro de los ingresos, las deducciones y el valor neto por pagar a los trabajadores durante un período determinado.',
    },
    {
      termino: 'Recargo por trabajo en días de descanso obligatorio o festivos',
      significado:
        'porcentaje adicional que se reconoce al trabajador por laborar en un día de descanso obligatorio o festivo, según la tarifa y la fecha de aplicación establecidas en la ley.',
    },
    {
      termino: 'Salario mínimo',
      significado:
        'remuneración mínima legal que debe recibir el trabajador, de acuerdo con la jornada laboral y las condiciones de su vinculación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1996). <i>Ley 278 de 1996, por la cual se reglamenta la composición y funcionamiento de la Comisión Permanente de Concertación de Políticas Salariales y Laborales</i>.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). <i>Ley 1607 de 2012, por la cual se expiden normas en materia tributaria y se dictan otras disposiciones</i>.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). <i>Ley 2101 de 2021, por medio de la cual se reduce la jornada laboral semanal de manera gradual, sin disminuir el salario de los trabajadores y se dictan otras disposiciones</i>.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=166506',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2025). <i>Ley 2466 de 2025, por medio de la cual se modifica parcialmente normas laborales y se adopta una reforma laboral para el trabajo decente y digno en Colombia</i>.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1950, 5 de agosto). <i>Decreto 2663 de 1950, Código Sustantivo del Trabajo</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Orlando Vidal Perdomo',
          cargo: 'Experto temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Experto temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
