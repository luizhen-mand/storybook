import React, { JSX } from 'react'
import type { CardProps, CardTitleProps, CardDescriptionProps } from './types'
import styles from './card.module.css'

function CardRoot({ children, className, onClick, ...props }: CardProps): JSX.Element {
  return (
    <div
      className={`${styles.card} ${className ? className : ''}`.trim()}
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
      className={styles.card__title}
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
      className={styles.card__description}
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
