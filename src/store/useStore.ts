import { create } from 'zustand'

export interface FileItem {
  id: string
  name: string
  type: 'file'
  size: number
  mimeType: string
  modifiedAt: string
  thumbnailUrl?: string
}

export interface FolderItem {
  id: string
  name: string
  type: 'folder'
  modifiedAt: string
  itemCount: number
}

export type StorageItem = FileItem | FolderItem

interface UploadProgress {
  fileName: string
  progress: number
  isUploading: boolean
}

interface StoreState {
  // View state
  viewMode: 'grid' | 'list'
  setViewMode: (mode: 'grid' | 'list') => void
  
  // Storage items
  items: StorageItem[]
  setItems: (items: StorageItem[]) => void
  
  // Upload state
  uploadProgress: UploadProgress | null
  setUploadProgress: (progress: UploadProgress | null) => void
  
  // Modal state
  isUploadModalOpen: boolean
  setUploadModalOpen: (isOpen: boolean) => void
  
  // Current path
  currentPath: string
  setCurrentPath: (path: string) => void
}

export const useStore = create<StoreState>((set) => ({
  // View state
  viewMode: 'grid',
  setViewMode: (mode) => set({ viewMode: mode }),
  
  // Storage items
  items: [],
  setItems: (items) => set({ items }),
  
  // Upload state
  uploadProgress: null,
  setUploadProgress: (progress) => set({ uploadProgress: progress }),
  
  // Modal state
  isUploadModalOpen: false,
  setUploadModalOpen: (isOpen) => set({ isUploadModalOpen: isOpen }),
  
  // Current path
  currentPath: '/',
  setCurrentPath: (path) => set({ currentPath: path }),
}))
