import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react'

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  iconPosition?: 'top' | 'left'
  bgcolor?: 'green' | 'orange' | 'gray' | 'pink' | 'transparent' | 'white' | 'yellow' | 'blue' | 'lightPink' | 'darkGray'
  color?: 'gray' | 'pink' | 'blue' | 'green'
  textColor?: 'light' | 'dark'
  border?: boolean
  round?: boolean
  active?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  type?: "submit" | "reset" | "button" | undefined
}

export interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
}