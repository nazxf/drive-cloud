import { FolderItem, FileItem } from '../store/useStore'

export const mockFolders: FolderItem[] = [
  {
    id: '1',
    name: 'Vacation Photos',
    type: 'folder',
    modifiedAt: '2026-01-20',
    itemCount: 45,
  },
  {
    id: '2',
    name: 'Documents',
    type: 'folder',
    modifiedAt: '2026-01-25',
    itemCount: 12,
  },
  {
    id: '7',
    name: 'Music Library',
    type: 'folder',
    modifiedAt: '2026-01-18',
    itemCount: 125,
  },
]

export const mockFiles: FileItem[] = [
  {
    id: '3',
    name: 'presentation.pdf',
    type: 'file',
    size: 2457600,
    mimeType: 'application/pdf',
    modifiedAt: '2026-01-24',
  },
  {
    id: '4',
    name: 'video-tutorial.mp4',
    type: 'file',
    size: 45678900,
    mimeType: 'video/mp4',
    modifiedAt: '2026-01-23',
  },
  {
    id: '5',
    name: 'project-archive.zip',
    type: 'file',
    size: 12345678,
    mimeType: 'application/zip',
    modifiedAt: '2026-01-22',
  },
  {
    id: '6',
    name: 'banner-design.png',
    type: 'file',
    size: 987654,
    mimeType: 'image/png',
    modifiedAt: '2026-01-21',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
  },
  {
    id: '8',
    name: 'meeting-notes.docx',
    type: 'file',
    size: 45678,
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    modifiedAt: '2026-01-26',
  },
]

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`
}

export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || ''
}
