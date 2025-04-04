import React, { JSX } from 'react'
import Link from 'next/link'
import type { HeaderProps, HeaderBrandProps, HeaderContentProps, HeaderIconsProps } from './types'
import styles from './header.module.css'

function HeaderRoot({ children, isFull, className, ...props }: HeaderProps): JSX.Element {
  return (
    <header
      className={`${styles.header} ${isFull ? styles['header--full'] : ''} ${className || ''}`.trim()}
      data-testid='HeaderTest'
      {...props}
    >
      {children}
    </header>
  )
}

function HeaderBrand({ children, url, ariaLabel, ...props }: HeaderBrandProps): JSX.Element {
  return (
    <Link
      href={url}
      className={styles.header__brand}
      data-testid='HeaderBrandTest'
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  )
}

function HeaderContent({ children, ...props }: HeaderContentProps): JSX.Element {
  return (
    <div
      className={styles.header__content}
      data-testid='HeaderContentTest'
      {...props}
    >
      {children}
    </div>
  )
}

function HeaderIcons({ children, ...props }: HeaderIconsProps): JSX.Element {
  return (
    <div
      className={styles['header__container-icons']}
      data-testid='HeaderIconTest'
      {...props}
    >
      {children}
    </div>
  )
}

export const Header = {
  Root: HeaderRoot,
  Content: HeaderContent,
  Brand: HeaderBrand,
  Icons: HeaderIcons
}
