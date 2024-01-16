import CopyIcon from '@components/icons/Copy'
import type { common } from '@i18n/ui'
import { useTranslations } from '@i18n/utils'
import React, { useState, type PropsWithChildren } from 'react'
import { toast } from 'sonner'

const MAIL = 'jeffersongonzalezcely@hotmail.com'
const ALLOW_COPY = !!window.navigator.clipboard
const position = 'bottom-left'

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

    let alertMessage = t('sendSuccess')

    if (!response.ok) alertMessage = t('sendError')

    toast(alertMessage, { position })

    form.reset()

    setLoading(false)
  }

  const handleCopy = () => {
    window.navigator.clipboard.writeText(MAIL)
    toast(t('copySuccess'), { position })
  }

  return (
    <section id="contact">
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
            autoComplete="name"
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
            autoComplete="email"
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
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <button
              id="btn-send"
              type="submit"
              title={t('send')}
              disabled={loading}
              className={
                'py-2 px-8 font-semibold rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-300' +
                (loading ? ' animate-bounce' : '')
              }
            >
              <span className="sr-only">{t('send')}</span>
              {t('send')}
            </button>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <span>{t('alternateContact')}</span>
            <div className="flex gap-2 items-center">
              <p className="bg-neutral-900 rounded-lg px-3 py-2 text-xs md:text-base">
                {MAIL}
              </p>
              {ALLOW_COPY && (
                <button
                  type="button"
                  className="size-8 md:size-auto flex items-center p-1 rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 transition-all duration-300"
                  title={t('copy')}
                  onClick={handleCopy}
                >
                  <span className="sr-only">{t('copy')}</span>
                  <CopyIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
