import { type ReactNode } from 'react'

export interface SidebarProps {
    children: ReactNode
    activeTab?: boolean
    className?: string
    sidebarRef: React.RefObject<HTMLDivElement>
}

export interface SidebarAsideProps {
    children: ReactNode
    className?: string
}

export interface SidebarItemsProps {
    children: ReactNode
    className?: string
}

export interface SidebarFooterProps {
    children: ReactNode
    className?: string
}

export interface SidebarTabProps {
    children: ReactNode
    activeTab?: boolean
    className?: string
}
