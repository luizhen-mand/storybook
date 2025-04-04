import { type ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export interface CardTitleProps {
  children: ReactNode
}

export interface CardDescriptionProps {
  children: ReactNode
}
