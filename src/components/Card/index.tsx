import React, { JSX } from 'react'
import type { CardProps, CardTitleProps, CardDescriptionProps } from './types'
import './card.css'

function CardRoot({ children, className, onClick, ...props }: CardProps): JSX.Element {
  return (
    <div
      className={`ds-card${className ? ` ${className}` : ''}`}
      data-testid='CardTest'
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

function CardTitle({ children, ...props }: CardTitleProps): JSX.Element {
  return (
    <span
      className='ds-card__title'
      data-testid='CardTitleTest'
      {...props}
    >
      {children}
    </span>
  )
}

function CardDescription({
  children,
  ...props
}: CardDescriptionProps): JSX.Element {
  return (
    <span
      className='ds-card__description'
      data-testid='CardDescriptionTest'
      {...props}
    >
      {children}
    </span>
  )
}

export const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription
}