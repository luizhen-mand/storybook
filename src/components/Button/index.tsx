import React, { JSX } from 'react'
import type { ButtonIconProps, ButtonRootProps } from './types'
import './button.css'

function ButtonRoot ({ children, color, bgcolor = 'gray', type = 'button', iconPosition, textColor, active, round, border, className, ...props }: ButtonRootProps): JSX.Element {
  return (
    <button
      className={`ds-button${color ? ` ds-button--textcolor${color}` : ''}${` ds-button--${bgcolor}`}${iconPosition ? ` ds-button--${iconPosition}` : ''}${textColor ? ` ds-button--${textColor}` : ''}${border ? ' ds-button--border' : ''}${round ? ' ds-button--round' : ''}${active ? ' ds-button--active' : ''}${className ? ` ${className}` : ''}`}
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
      className={`ds-button__icon${` ds-button__icon--${size}`}`}
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