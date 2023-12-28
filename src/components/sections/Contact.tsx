import type { PropsWithChildren } from 'react'

interface ContactProps extends PropsWithChildren<unknown> {}

export default function Contact({ children }: ContactProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section id="contact">
      <h2 className="text-3xl font-semibold flex gap-x-3 justify-center items-center my-4">
        {children}
        Contáctame
      </h2>
      <form className="p-5" onSubmit={handleSubmit} method="POST">
        <div className="flex flex-col gap-4 mb-4">
          <label className="text-neutral-100 font-semibold" htmlFor="name">
            Nombre
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
            Correo
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
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-lg p-3 w-full h-32 max-h-32 resize-none bg-neutral-900 focus:ring-2 focus:ring-gray-900"
            placeholder="Escribe aquí tu mensaje..."
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            id="btn-send"
            type="submit"
            className="py-2 px-8 font-semibold rounded-full bg-blue-500 hover:bg-blue-700 transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}
