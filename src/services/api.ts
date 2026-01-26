import axios from 'axios'

// Base API client for future backend integration
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API endpoints (ready for backend integration)
export const api = {
  // Auth
  login: async (_email: string, _password: string) => {
    // Mock for now, will connect to Golang backend
    return { token: 'mock-token', user: { email: _email } }
  },
  
  register: async (_email: string, _password: string, _name: string) => {
    // Mock for now
    return { message: 'Registration successful' }
  },
  
  // Files
  getFiles: async (_path = '/') => {
    // Mock for now, will call GET /files?path={path}
    return []
  },
  
  uploadFile: async (file: File, _onProgress?: (progress: number) => void) => {
    // Mock for now, will call POST /files/upload
    return { id: 'mock-id', name: file.name }
  },
  
  deleteFile: async (_fileId: string) => {
    // Mock for now, will call DELETE /files/:id
    return { message: 'File deleted' }
  },
  
  downloadFile: async (_fileId: string) => {
    // Mock for now, will call GET /files/:id/download
    return { url: 'mock-url' }
  },
}
