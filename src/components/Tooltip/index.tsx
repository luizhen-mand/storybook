import React, { useState, createContext, useContext, useEffect, JSX } from 'react'
import type { TooltipContentProps, TooltipRootProps, TooltipTriggerProps } from './types'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import styles from './tooltip.module.css'

const TooltipContext = createContext<{ onClick: boolean, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }>({ onClick: true, open: true, setOpen: () => {} })

function TooltipRoot({ children, onClick = true, ...props }: TooltipRootProps): JSX.Element {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (open && onClick) {
      timeout = setTimeout(() => setOpen(false), 7000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [open, onClick])

  return (
    <TooltipContext.Provider value={{ open, setOpen, onClick }}>
      <TooltipRadix.Provider disableHoverableContent={onClick} {...props}>
        <TooltipRadix.Root open={open}>
          {children}
        </TooltipRadix.Root>
      </TooltipRadix.Provider>
    </TooltipContext.Provider>
  )
}

function TooltipTrigger({ children, ...props }: TooltipTriggerProps): JSX.Element {
  const { open, setOpen, onClick } = useContext(TooltipContext)

  return (
    <TooltipRadix.Trigger asChild {...props}>
      <div
        className={styles['tooltip__trigger']}
        onClick={() => {
          if (onClick) setOpen(!open)
        }}
        onMouseEnter={() => {
          if (!onClick) setOpen(true)
        }}
        onMouseLeave={() => {
          if (!onClick) setOpen(false)
        }}
      >
        {children}
      </div>
    </TooltipRadix.Trigger>
  )
}

function TooltipContent({ children, color = 'light', side = 'right', ...props }: TooltipContentProps): JSX.Element {
  return (
    <TooltipRadix.Portal>
      <TooltipRadix.Content
        data-testid='TooltipTest'
        className={`${styles['tooltip__content']} ${styles[`tooltip__content--${color}`]}`}
        side={side}
        sideOffset={2}
        {...props}
      >
        {children}
      </TooltipRadix.Content>
    </TooltipRadix.Portal>
  )
}

function TooltipArrow(): JSX.Element {
  return (
    <TooltipRadix.Arrow className={styles['tooltip__arrow']} />
  )
}

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow
}
