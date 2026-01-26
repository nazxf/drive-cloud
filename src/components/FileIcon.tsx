import {
    FileText,
    FileImage,
    FileVideo,
    FileAudio,
    FileArchive,
    File,
    FileSpreadsheet,
    FileCode
} from 'lucide-react'

interface FileIconProps {
    mimeType: string
    fileName: string
    className?: string
}

const FileIcon = ({ mimeType, fileName, className = 'w-6 h-6' }: FileIconProps) => {
    const extension = fileName.split('.').pop()?.toLowerCase() || ''

    // Image files
    if (mimeType.startsWith('image/')) {
        return <FileImage className={className} />
    }

    // Video files
    if (mimeType.startsWith('video/')) {
        return <FileVideo className={className} />
    }

    // Audio files
    if (mimeType.startsWith('audio/')) {
        return <FileAudio className={className} />
    }

    // Archive files
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(extension)) {
        return <FileArchive className={className} />
    }

    // Document files
    if (mimeType.includes('pdf') || ['doc', 'docx'].includes(extension)) {
        return <FileText className={className} />
    }

    // Spreadsheet files
    if (['xls', 'xlsx', 'csv'].includes(extension)) {
        return <FileSpreadsheet className={className} />
    }

    // Code files
    if (['js', 'ts', 'jsx', 'tsx', 'py', 'java', 'cpp', 'c', 'go', 'rs'].includes(extension)) {
        return <FileCode className={className} />
    }

    // Default file icon
    return <File className={className} />
}

export default FileIcon
