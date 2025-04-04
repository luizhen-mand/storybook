import type { InputHTMLAttributes, LabelHTMLAttributes, ChangeEvent, ReactNode, ButtonHTMLAttributes } from 'react'

export interface InputTextRootProps {
  children: ReactNode
  className?: string
  required?: boolean
  inputSize?: 'sm' | 'md' | 'lg'
  childrenPosition?: 'left' | 'right'
  error?: boolean
}

export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  required?: boolean
  children?: ReactNode
  id?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  childrenPosition?: 'left' | 'right'
  mask?: Array<string | RegExp>
}

export interface InputTextLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  required?: boolean
}

export interface InputTextAlertProps {
  children: ReactNode
}

export interface InputTextIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: "submit" | "reset" | "button" | undefined
}
