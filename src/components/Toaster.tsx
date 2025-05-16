import { Toaster as Toast } from 'sonner'

import '@/assets/sonner-style.css'

export default function Toaster() {
  return <Toast theme="dark" duration={5000} />
}
