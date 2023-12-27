export interface Project {
  title: string
  subtitle?: string
  description: string
  image: string
  link: string
  github?: string
  tags: string[]
}

export const Projects: Project[] = [
  {
    title: 'Escape The QA Maze',
    description:
      'Juego para aprender conceptos de control de calidad. Hecho para un proyecto de la universidad.',
    link: 'https://jeffergonzalez.github.io/escape-the-qa-maze/',
    image: 'Escape The QA Maze.webp',
    github: 'https://github.com/JefferGonzalez/escape-the-qa-maze',
    tags: ['React', 'CSS', 'JavaScript', 'HTML']
  },
  {
    title: 'Reading List App',
    description:
      'Basado en el reto de pruebas técnicas de <a class="text-blue-500" href="https://pruebastecnicas.com/" target="_blank" rel="noreferrer noopener">Midudev.</a>',
    link: 'https://jeffergonzalez.github.io/reading-list/',
    image: 'Reading List App.webp',
    github: 'https://github.com/JefferGonzalez/reading-list',
    tags: ['React', 'Bootstrap', 'Drag & Drop', 'LocalStorage', 'Driver.js']
  },
  {
    title: 'XUE',
    subtitle: 'Control de Proveedores Clínicos',
    description:
      'Proyecto inicial que surgió al tratar la solucionar la necesidad que me plantearon en mi experiencia como aprendiz en <a class="text-blue-500" href="https://www.segurossura.com.co/paginas/inicio.aspx" target="_blank" rel="noreferrer noopener">SURA.</a>',
    link: 'https://drive.google.com/file/d/18AYDGbfU18rV5sJeYdtfs-HJyqNtBg2i/view?usp=sharing',
    image: 'XUE.webp',
    tags: ['HTML', 'Bootstrap', 'jQuery', 'PHP', 'MySQL']
  },
  {
    title: 'Portfolio',
    description: 'Primera versión de mi portafolio.',
    link: 'https://jeffergonzalez.github.io/portfolio/',
    image: 'PortfolioV1.webp',
    github: 'https://github.com/JefferGonzalez/portfolio',
    tags: ['React', 'i18n', 'Bootstrap', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'ABM OF OPERATIONS',
    subtitle: 'Challenge FullStack JS de Alkemy',
    description:
      'Hecho para el Challenge Fullstack JS de <a class="text-blue-500" href="https://www.alkemy.org/" target="_blank" rel="noreferrer noopener">Alkemy.</a>',
    link: 'https://drive.google.com/file/d/1syzFWLNpZ_Du91er0uPTi95B25CXDf8m/view?usp=sharing',
    image: 'ABM OF OPERATIONS.webp',
    github: 'https://github.com/JefferGonzalez/Challenge_Alkemy',
    tags: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MySQL', 'Auth0']
  },
  {
    title: 'Task List App',
    description:
      'Basado en el video de <a class="text-blue-500" href="https://www.youtube.com/watch?v=_zGL_MU29zs" target="_blank" rel="noreferrer noopener">Fazt Code.</a>',
    link: 'https://drive.google.com/file/d/1Bdyx0acQwDW_O2EmVMYVLg7LZV8Ifrf4/view?usp=sharing',
    image: 'Task List App.webp',
    github: 'https://github.com/JefferGonzalez/Task-List',
    tags: ['React', 'Material UI', ' Node.js', 'Express.js', 'MySQL']
  }
]

export interface Experience {
  initialDate: string
  finalDate: string
  title: string
  company: string
  description: string
  link?: string
  latest?: boolean
}

export const Experiences: Experience[] = [
  {
    initialDate: 'Enero 2023',
    finalDate: 'Actualidad...',
    title: 'Consultor SCP',
    company: 'MQA Business Consultant S.A.',
    description:
      'Desarrollo de soluciones empresariales con tecnologías como Java y Javascript.',
    latest: true
  },
  {
    initialDate: 'Agosto 2021',
    finalDate: 'Febrero 2022',
    title: 'Analista de Sistemas - Aprendiz',
    company: ' Seguros de Vida Suramericana',
    description:
      'Lleve a cabo el desarrollo de una aplicación web de estar manera mejorando la velocidad de trabajo en el área de Talento Humano.'
  }
]
