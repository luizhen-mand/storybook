import React, { JSX } from 'react'
import type { FooterProps, FooterTextProps } from './types'
import styles from './footer.module.css'

function FooterRoot({ children, className, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={`${styles.footer} ${className ? className : ''}`.trim()} {...props}>
      {children}
    </footer>
  )
}

function FooterText({ children, ...props }: FooterTextProps): JSX.Element {
  return (
    <span className={styles.footer__text} {...props}>
      {children}
    </span>
  )
}

export const Footer = {
  Root: FooterRoot,
  Text: FooterText,
}





