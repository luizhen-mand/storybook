import React, { JSX } from 'react'
import './inputtext.css'

type InputTextRootProps = {
  children: React.ReactNode
  className?: string
  required?: boolean
  inputSize?: 'sm' | 'md' | 'lg'
  childrenPosition?: 'left' | 'right'
  error?: boolean
}

type InputTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  required?: boolean
  children?: React.ReactNode
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  childrenPosition?: 'left' | 'right'
  mask?: Array<string | RegExp>
}

type InputTextLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode
  required?: boolean
}

type InputTextAlertProps = {
  children: React.ReactNode
}

type InputTextIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
}

function InputTextRoot({ children, inputSize, className, ...props }: InputTextRootProps): JSX.Element {
  return (
    <div
      className={`ds-inputtext${inputSize ? ` ds-inputtext--${inputSize}` : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

function InputTextInput({ children, error, childrenPosition, mask = [], ...props }: InputTextInputProps): JSX.Element {
  const value = props.value
  const handleChange = props.onChange

  // Função para aplicar a máscara (exemplo de telefone)
  const applyMask = (input: string) => {
    let cleanedInput = input.replace(/\D/g, '') // Remove caracteres não numéricos

    if (cleanedInput.length <= 2) {
      return cleanedInput.replace(/(\d{2})/, '($1')
    }
    if (cleanedInput.length <= 6) {
      return cleanedInput.replace(/(\d{2})(\d{4})/, '($1) $2')
    }
    if (cleanedInput.length <= 10) {
      return cleanedInput.replace(/(\d{2})(\d{4})(\d{1,4})/, '($1) $2-$3')
    }
    return cleanedInput.replace(/(\d{2})(\d{4})(\d{4})(\d{1,4})/, '($1) $2-$3')
  }

  // Função chamada sempre que o valor do input muda
  const handleMaskedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyMask(event.target.value)
    if (handleChange) {
      handleChange(event)  // Apenas passa o evento para a função onChange
    }
  }

  const InputComponent = mask.length
    ? (
      <input
        {...props}
        value={value}
        onChange={handleMaskedChange}
        className={`ds-inputtext__input${error ? ' ds-inputtext__input--error' : ''}`}
      />
    )
    : (
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className={`ds-inputtext__input${error ? ' ds-inputtext__input--error' : ''}`}
      />
    )

  return (
    <div
      className={`ds-inputtext__wrapper${childrenPosition ? ` ds-inputtext__wrapper--${childrenPosition}` : ''}`}
    >
      {InputComponent}
      {children}
    </div>
  )
}

function InputTextLabel({ children, required, ...props }: InputTextLabelProps): JSX.Element {
  return (
    <label
      className="ds-inputtext__label"
      {...props}
    >
      {children}
      {required && (
        <span className="ds-inputtext__label--required">*</span>
      )}
    </label>
  )
}

function InputTextMessage({ children, ...props }: InputTextAlertProps): JSX.Element {
  return (
    <p
      className="ds-inputtext__alert"
      {...props}
    >
      {children}
    </p>
  )
}

function InputTextIcon({ children, type = 'button', ...props }: InputTextIconProps): JSX.Element {
  return (
    <button
      type={type}
      className="ds-inputtext__icon"
      data-testid="InputTextIcon"
      {...props}
    >
      {children}
    </button>
  )
}

export const InputText = {
  Root: InputTextRoot,
  Input: InputTextInput,
  Label: InputTextLabel,
  Message: InputTextMessage,
  Icon: InputTextIcon
}
