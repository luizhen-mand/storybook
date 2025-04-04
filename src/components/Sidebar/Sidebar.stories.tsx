import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './index'
import './sidebar.module.css'
import { Button } from '../Button'
import { Avatar } from '../Avatar'
import { useEffect, useRef, useState } from 'react'

const meta: Meta<typeof Sidebar.Root> = {
    title: 'Componentes/Sidebar',
    component: Sidebar.Root,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        a11y: {
            config: {
                rules: [{ id: 'color-contrast', enabled: true }]
            }
        },
        design: {
            type: 'link',
            url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/7db28f81-2b9a-4e94-be5e-4a374adf8014/'
        }
    }
}

export default meta

type Story = StoryObj<typeof Sidebar.Root>

export const SideBar: Story = {
    render: (args: any) => {
        const [open, setOpen] = useState(false)
        const sidebarRef = useRef<HTMLDivElement | null>(null)

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    sidebarRef.current &&
                    !sidebarRef.current.contains(event.target as Node)
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
            <Sidebar.Root {...args} sidebarRef={sidebarRef}>
                <Sidebar.Aside>
                    <Avatar.Root>
                        <Avatar.Image
                            size={55}
                            alt="avatar"
                            url="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Avatar.Root>
                    <Sidebar.Items>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">insert_chart</span>
                            </Button.Icon>
                            Item 1
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">request_quote</span>
                            </Button.Icon>
                            Item 2
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">work</span>
                            </Button.Icon>
                            Item 3
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">person_search</span>
                            </Button.Icon>
                            Item 4
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">person_search</span>
                            </Button.Icon>
                            Item 5
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">person_search</span>
                            </Button.Icon>
                            Item 6
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">person_search</span>
                            </Button.Icon>
                            Item 7
                        </Button.Root>
                        <Button.Root
                            iconPosition="top"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <Button.Icon>
                                <span className="material-symbols-outlined">settings</span>
                            </Button.Icon>
                            Item 8
                        </Button.Root>
                    </Sidebar.Items>
                </Sidebar.Aside>
            </Sidebar.Root>
        )
    }
}
