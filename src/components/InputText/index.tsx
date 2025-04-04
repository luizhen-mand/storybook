import React, { JSX } from 'react'
import MaskedInput from 'react-text-mask'
import type { InputTextInputProps, InputTextLabelProps, InputTextRootProps, InputTextAlertProps, InputTextIconProps } from './types'
import styles from './inputtext.module.css'

function InputTextRoot({ children, inputSize, className, ...props }: InputTextRootProps): JSX.Element {
  return (
    <div
      className={`${styles['ds-inputtext']}${inputSize ? ` ${styles[`ds-inputtext--${inputSize}`]}` : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

function InputTextInput({ children, error, childrenPosition, mask = [], ...props }: InputTextInputProps): JSX.Element {
  const value = props.value
  const handleChange = props.onChange

  const InputComponent = mask.length
    ? (
      <MaskedInput
        {...props}
        mask={mask}
        value={value}
        onChange={handleChange}
        className={`${styles['ds-inputtext__input']}${error ? ` ${styles['ds-inputtext__input--error']}` : ''}`}
      />
    )
    : (
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className={`${styles['ds-inputtext__input']}${error ? ` ${styles['ds-inputtext__input--error']}` : ''}`}
      />
    )

  return (
    <div
      className={`${styles['ds-inputtext__wrapper']}${childrenPosition ? ` ${styles[`ds-inputtext__wrapper--${childrenPosition}`]}` : ''}`}
    >
      {InputComponent}
      {children}
    </div>
  )
}

function InputTextLabel({ children, required, ...props }: InputTextLabelProps): JSX.Element {
  return (
    <label
      className={styles['ds-inputtext__label']}
      {...props}
    >
      {children}
      {required && (
        <span className={styles['ds-inputtext__label--required']}>*</span>
      )}
    </label>
  )
}

function InputTextMessage({ children, ...props }: InputTextAlertProps): JSX.Element {
  return (
    <p
      className={styles['ds-inputtext__alert']}
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
      className={styles['ds-inputtext__icon']}
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
