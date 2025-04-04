import { type ReactNode } from 'react'

export interface AvatarProps {
  children?: ReactNode
  onClick?: () => void
  className?: string
  status?: 'ativo' | 'bloqueado' | 'inativo'
  edit?: boolean
}

export interface AvatarImageProps {
  url: string
  size: number
  alt: string
  border?: boolean
  hover?: boolean
  name?: string
  email?: string
  role?: string
  edit?: boolean
}

export interface AvatarStatusProps {
  status?: 'ativo' | 'bloqueado' | 'inativo'
  size: number
}

export interface AvatarInfosContainerProps {
  children?: ReactNode
}

export interface AvatarNameProps extends React.HTMLProps<HTMLSpanElement> {
  children: React.ReactNode;
}

export interface EditAvatarProps {
  edit?: boolean
  children: ReactNode
  onClick?: () => void
}

export interface AvatarEmailProps extends React.HTMLProps<HTMLSpanElement> {
  children: React.ReactNode;
}

export interface AvatarRoleProps extends React.HTMLProps<HTMLSpanElement> {
  children: React.ReactNode;
}

