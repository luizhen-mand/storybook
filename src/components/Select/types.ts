import type { ReactNode } from 'react'

export interface SelectRootProps {
  children: ReactNode
  color?: 'gray' | 'pink' | 'orange' | 'green'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export interface SelectLabelProps {
  children: ReactNode
  required?: boolean
}

export interface SelectAlertProps {
  children: ReactNode
}

export interface SelectInputProps {
  children?: ReactNode
  options: Option[]
  value: string
  onValueChange: (value: string) => void
  defaultValue?: string
  placeholder?: string
  search?: boolean
  color?: 'gray' | 'pink' | 'orange' | 'green'
}

export interface Option {
  value: string
  label: string
  color?: string
}