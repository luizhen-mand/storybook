import React, { createContext, useContext, useState, useEffect, useRef, JSX } from 'react'
import type { SidebarProps, SidebarTabProps, SidebarAsideProps, SidebarItemsProps, SidebarFooterProps } from './types'
import { Button } from '../Button'
import styles from './sidebar.module.css'

const SidebarContext = createContext<{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({ open: true, setOpen: () => { } })

function SidebarRoot({ children, className, sidebarRef, ...props }: SidebarProps): JSX.Element {
    const [open, setOpen] = useState(false)
    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            <section
                ref={sidebarRef}
                className={`${styles.container} ${open ? styles.open : ''} ${className ? className : ''}`}
                data-testid='SidebarTest'
                {...props}
            >
                {children}
            </section>
        </SidebarContext.Provider>
    )
}

function SidebarAside({ children, className, ...props }: SidebarAsideProps): JSX.Element {
    const { open, setOpen } = useContext(SidebarContext)
    const asideRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                asideRef.current &&
                !asideRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className={styles.wrapper} ref={asideRef}>
            <aside
                {...props}
                className={styles.sidebar}
                data-testid='SidebarAsideTest'
                aria-label='Sidebar'
            >
                <div className={`${styles.sidebarContent} ${className ? className : ''}`}>
                    {children}
                </div>
            </aside>
            <div className={styles.sidebarButton}>
                <Button.Root
                    bgcolor='pink'
                    onClick={() => {
                        setOpen((open) => !open)
                    }}
                >
                    <Button.Icon>
                        <span className='material-symbols-outlined'>
                            {open ? 'close' : 'menu'}
                        </span>
                    </Button.Icon>
                </Button.Root>
            </div>
        </div>
    )
}

function SidebarItems({ children, className, ...props }: SidebarItemsProps): JSX.Element {
    return (
        <div
            className={`${styles.sidebarItems} ${className ? className : ''}`}
            data-testid='SidebarItemsTest'
            {...props}
        >
            {children}
        </div>
    )
}

function SidebarFooter({ children, className, ...props }: SidebarFooterProps): JSX.Element {
    return (
        <div
            className={`${styles.sidebarFooter} ${className ? className : ''}`}
            data-testid='SidebarFooterTest'
            {...props}
        >
            {children}
        </div>
    )
}

function SidebarTab({ children, className, activeTab, ...props }: SidebarTabProps): JSX.Element {
    return (
        <div
            className={`${styles.tab} ${activeTab ? styles.tabVisible : ''} ${className ? className : ''}`}
            data-testid='SidebarTabTest'
            {...props}
        >
            <div className={styles.tabContent}>{children}</div>
        </div>
    )
}

function SidebarButton({ ...props }): JSX.Element {
    return (
        <button
            className={styles.closeTab}
            {...props}
        >
            <span className='material-symbols-outlined'>
                right_panel_open
            </span>
        </button>
    )
}

export const Sidebar = {
    Root: SidebarRoot,
    Tab: SidebarTab,
    Items: SidebarItems,
    Footer: SidebarFooter,
    Aside: SidebarAside,
    CloseTab: SidebarButton
}
