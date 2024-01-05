export const defaultLang = 'es'
export const showDefaultLang = false

export const languages: Record<string, { language: string; flag: string }> = {
  es: {
    language: 'Español',
    flag: 'CO'
  },
  en: {
    language: 'English',
    flag: 'US'
  }
} as const

export const common = {
  es: {
    description:
      'Portfolio de Jefferson González. Full Stack Developer, apasionado por la tecnología y el desarrollo de software.',
    menu: 'Menú',
    selectLanguage: 'Selecciona un idioma',
    home: 'Inicio',
    cv: 'Descargar CV',
    experience: 'Experiencia',
    latest: 'Último',
    projects: 'Proyectos',
    goToRepository: 'Ir al repositorio',
    seeProject: 'Ver proyecto',
    contact: 'Contacto',
    contactMe: 'Contáctame',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    messagePlaceholder: 'Escribe aquí tu mensaje...',
    send: 'Enviar',
    footer: 'Hecho con ❤️ por'
  },
  en: {
    description:
      'Jefferson González Portfolio. Full Stack Developer, passionate about technology and software development.',
    menu: 'Menu',
    selectLanguage: 'Select a language',
    home: 'Home',
    cv: 'Download CV',
    experience: 'Experience',
    latest: 'Latest',
    projects: 'Projects',
    goToRepository: 'Go to repository',
    seeProject: 'See project',
    contact: 'Contact',
    contactMe: 'Get in touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    send: 'Send',
    footer: 'Made with ❤️ by'
  }
} as const
