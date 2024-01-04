import type { common } from '@i18n/ui'
import { useTranslations } from '@i18n/utils'
import React, { useState, type PropsWithChildren } from 'react'
import { Toaster, toast } from 'sonner'

interface ContactProps extends PropsWithChildren<unknown> {
  lang?: keyof typeof common
}

export default function Contact({ children, lang = 'es' }: ContactProps) {
  const [loading, setLoading] = useState(false)
  const t = useTranslations(lang)

  const getHtml = (name: string, email: string, message: string): string => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="font-size: 1.5rem; font-weight: 600; color: #000;">¡Hola!</h1>
        <p style="font-size: 1rem; color: #000;">Has recibido un mensaje de ${name}.</p>
        <div style="background-color: #fff; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem;">
          <p style="font-size: 1rem; color: #000;">${message}</p>
        </div>
        <p style="font-size: 1rem; color: #000;">Puedes responderle a ${name} a través de este correo: ${email}</p>
      </div>
    `
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)

    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, message, name } = Object.fromEntries(formData)

    const data = {
      from: '👻 Portfolio <onboarding@resend.dev>',
      subject: `🤑 Nuevo mensaje de ${name}`,
      text: `${name} te ha enviado un mensaje: ${message}. Puedes responderle a ${name} a través de este correo: ${email}`,
      html: getHtml(name.toString(), email.toString(), message.toString())
    }

    const response = await fetch('/api/sendEmail.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let alertMessage =
      'Tu mensaje ha sido enviado, te responderé lo más pronto posible. ❤️😊'

    if (!response.ok)
      alertMessage =
        'Hubo un error al enviar tu mensaje, por favor intenta de nuevo.'

    toast(alertMessage)

    form.reset()

    setLoading(false)
  }

  return (
    <section id="contact">
      <Toaster theme="dark" duration={5000} />

      <h2 className="text-3xl font-semibold flex gap-x-3 justify-center items-center my-4">
        {children}
        {t('contactMe')}
      </h2>
      <form className="p-5" onSubmit={handleSubmit} method="POST">
        <div className="flex flex-col gap-4 mb-4">
          <label className="text-neutral-100 font-semibold" htmlFor="name">
            {t('name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="rounded-lg p-3 w-full bg-neutral-900 focus:ring-2 focus:ring-gray-900"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <label className="text-neutral-100 font-semibold" htmlFor="email">
            {t('email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-lg p-3 w-full bg-neutral-900 focus:ring-2 focus:ring-gray-900"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <label className="text-neutral-100 font-semibold" htmlFor="message">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-lg p-3 w-full h-32 max-h-32 resize-none bg-neutral-900 focus:ring-2 focus:ring-gray-900"
            placeholder={t('messagePlaceholder')}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            id="btn-send"
            type="submit"
            disabled={loading}
            className={
              'py-2 px-8 font-semibold rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-300' +
              (loading ? ' animate-bounce' : '')
            }
          >
            {t('send')}
          </button>
        </div>
      </form>
    </section>
  )
}
