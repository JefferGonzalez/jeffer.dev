import type { APIRoute } from 'astro'
import { Resend } from 'resend'

interface EmailBody {
  from: string
  html: string
  subject: string
  text: string
}

const API_KEY = import.meta.env.RESEND_API_KEY
const to = import.meta.env.RESEND_TO

const resend = new Resend(API_KEY)

export const POST: APIRoute = async ({ request }) => {
  const body: EmailBody = await request.json()
  const { from, html, subject, text } = body

  if (!from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: 'Did not provide the right data'
    })
  }

  const response = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text
  })

  if (response.data) {
    return new Response(
      JSON.stringify({
        data: response.data
      }),
      {
        status: 200,
        statusText: 'OK'
      }
    )
  } else {
    return new Response(
      JSON.stringify({
        data: response.error
      }),
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    )
  }
}
