export interface ApiError {
  message: string
  status?: number
  code?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ContactPayload {
  name: string
  email: string
  company?: string
  message: string
}

export interface ContactResponse {
  id: string
  message: string
}
