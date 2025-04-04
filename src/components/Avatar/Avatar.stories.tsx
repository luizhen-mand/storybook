import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './index'
import { expect, within } from '@storybook/test'

const meta: Meta<typeof Avatar.Root> = {
  title: 'Componentes/Avatar',
  component: Avatar.Root,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }]
      }
    },
    design: {
      type: 'link',
      url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/82b44248-2678-4bf6-9517-9d8c941424bf/'
    }
  }
}

export default meta

type Story = StoryObj<typeof Avatar.Root>

export const ComHover: Story = {

  render: () => (
    <Avatar.Root>
      <Avatar.Image
        size={60}
        alt="avatar"
        url="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Luiz Henrique"
        email="luizhenrique.lima@mandarin.com.br"
        role="Desenvolvedor"
        hover
      />
    </Avatar.Root>
  )
}

export const ComLabel: Story = {

  render: () => (
    <Avatar.Root>
      <Avatar.Image
        size={60}
        alt="avatar"
        url="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Fulana da Silva"
        email="fulana@email.com"
        role="Atendimento"
      />
      <Avatar.InfosContainer>
        <Avatar.Name>Luiz Henrique Lima</Avatar.Name>
        <Avatar.Email>luizhenrique.lima@mandarin.com.br</Avatar.Email>
        <Avatar.Role>Desenvolvedor</Avatar.Role>
      </Avatar.InfosContainer>
    </Avatar.Root>
  )
}

export const ComStatus: Story = {
  args: {
    status: 'ativo'
  },

  argTypes: {
    status: {
      options: ['ativo', 'inativo', 'bloqueado'],
      control: {
        type: 'select'
      }
    }
  },

  render: (args) => (
    <Avatar.Root>
      <Avatar.Image
        size={40}
        alt="avatar"
        url="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Luiz Henrique Lima"
        email="luizhenrique.lima@mandarin.com.br"
        role="Desenvolvedor"
      />
      <Avatar.Status size={20} {...args} />
    </Avatar.Root>
  )
}

export const ComEditar: Story = {
  args: {
    edit: true
  },

  render: (args) => (
    <Avatar.Root>
      <Avatar.Edit {...args}>
        <Avatar.Image
          size={70}
          alt="Logo"
          url="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Avatar.Image>
      </Avatar.Edit>
    </Avatar.Root>
  )
}
