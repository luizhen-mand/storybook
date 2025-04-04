import React, { JSX } from 'react'
import type { ButtonIconProps, ButtonRootProps } from './types'
import styles from './button.module.css'

function ButtonRoot ({ children, color, bgcolor = 'gray', type = 'button', iconPosition, textColor, active, round, border, className, ...props }: ButtonRootProps): JSX.Element {
  return (
    <button
      className={`${styles['ds-button']}${color ? ` ${styles[`ds-button--textcolor${color}`]}` : ''}${` ${styles[`ds-button--${bgcolor}`]}`}${iconPosition ? ` ${styles[`ds-button--${iconPosition}`]}` : ''}${textColor ? ` ${styles[`ds-button--${textColor}`]}` : ''}${border ? ` ${styles['ds-button--border']}` : ''}${round ? ` ${styles['ds-button--round']}` : ''}${active ? ` ${styles['ds-button--active']}` : ''}${className ? ` ${className}` : ''}`}
      data-testid="ButtonTest"
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

function ButtonIcon ({ children, size = 'sm', ...props }: ButtonIconProps): JSX.Element {
  return (
    <div
      className={`${styles['ds-button__icon']} ${styles[`ds-button__icon--${size}`]}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon
}
