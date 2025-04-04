import { type ReactNode } from 'react'

export interface TooltipRootProps {
  children: ReactNode
  color?: 'light' | 'dark'
  side?: 'bottom' | 'top' | 'left' | 'right'
  onClick?: boolean
}

export interface TooltipTriggerProps {
  children: ReactNode
}

export interface TooltipContentProps {
  children: ReactNode
  color?: 'light' | 'dark'
  side?: 'bottom' | 'top' | 'left' | 'right'
}
