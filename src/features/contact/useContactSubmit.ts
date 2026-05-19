import { useState } from 'react'
import { submitContact } from '@/services/contactService'
import { useAppStore } from '@/store/useAppStore'
import type { ContactFormValues } from './contactSchema'
import type { ApiError } from '@/types/api'

export function useContactSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const showToast = useAppStore((s) => s.showToast)

  const submit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const response = await submitContact(data)
      showToast({ message: response.message, type: 'success' })
      return true
    } catch (err) {
      const error = err as ApiError
      showToast({
        message: error.message ?? 'Failed to send message. Please try again.',
        type: 'error',
      })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submit, isSubmitting }
}
