import { type ReactNode } from 'react'

export interface HeaderProps {
  children: ReactNode
  isFull: boolean
  className?: string
}

export interface HeaderBrandProps {
  children: ReactNode
  url: string
  ariaLabel?: string
}

export interface HeaderContentProps {
  children: ReactNode
}

export interface HeaderIconsProps {
  children: ReactNode
}
