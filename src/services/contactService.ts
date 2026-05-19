import { api } from './api'
import { FEATURE_FLAGS } from '@/constants/appConfig'
import type { ApiResponse, ContactPayload, ContactResponse } from '@/types/api'

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ?? '/contact'

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResponse> {
  if (FEATURE_FLAGS.enableMockApi || !import.meta.env.VITE_API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    return {
      id: `mock-${Date.now()}`,
      message: 'Thank you! We will get back to you shortly.',
    }
  }

  const { data } = await api.post<ApiResponse<ContactResponse>>(
    CONTACT_ENDPOINT,
    payload,
  )
  return data.data
}
