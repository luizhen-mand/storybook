import { type HTMLAttributes, type ReactNode } from 'react'

export interface InputUploadRootProps {
  children: ReactNode
  className?: string
}

export interface InputUploadContainerProps {
  children: ReactNode
  onFilesSelected: (files: File[]) => void
}

export interface InputUploadButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}