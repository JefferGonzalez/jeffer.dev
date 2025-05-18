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
    sendSuccess:
      'Tu mensaje ha sido enviado, te responderé lo más pronto posible. ❤️😊',
    sendError:
      'Hubo un error al enviar tu mensaje, por favor intenta de nuevo.',
    alternateContact: 'O escríbeme a:',
    copy: 'Copiar',
    copySuccess: 'Copiado al portapapeles',
    footer: 'Hecho con ❤️ por',
    inspiration: 'Inspirado en',
    disclaimer:
      'Aviso: Los logos mostrados son propiedad de sus respectivas compañías y se usan solo con fines ilustrativos. No implica afiliación.'
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
    sendSuccess:
      'Your message has been sent, I will reply as soon as possible. ❤️😊',
    sendError: 'There was an error sending your message, please try again.',
    alternateContact: 'Or write me to:',
    copy: 'Copy',
    copySuccess: 'Copied to clipboard',
    footer: 'Made with ❤️ by',
    inspiration: 'Inspired by',
    disclaimer:
      'Disclaimer: The logos displayed are property of their respective companies and used for illustrative purposes only. No affiliation implied.'
  }
} as const
