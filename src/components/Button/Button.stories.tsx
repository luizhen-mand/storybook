import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'
import { expect, userEvent, within } from '@storybook/test'

const meta: Meta<typeof Button.Root> = {
  title: 'Componentes/Button',
  component: Button.Root,
  tags: ['autodocs'],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const buttonElement = canvas.getByTestId('ButtonTest')
    await expect(buttonElement).toBeInTheDocument()
    await userEvent.click(buttonElement)
  },

  parameters: {
    layout: 'centered',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }]
      }
    },
    design: {
      type: 'link',
      url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/707aad8b-a0d7-435e-8173-b048c3edfd79/'
    }
  }
}

export default meta

type Story = StoryObj<typeof Button.Root>

export const IconeLateral: Story = {
  args: {
    bgcolor: 'green'
  },

  argTypes: {
    bgcolor: {
      options: ['green', 'orange', 'gray', 'pink', 'transparent'],
      control: {
        type: 'select'
      }
    }
  },

  render: (args) => (
    <Button.Root {...args}>
      <Button.Icon>
        <span className="material-symbols-outlined">folder_open</span>
      </Button.Icon>
      CLIQUE AQUI
    </Button.Root>
  )
}

export const IconeAcima: Story = {
  args: {
    bgcolor: 'green'
  },

  argTypes: {
    bgcolor: {
      options: ['green', 'orange', 'gray', 'pink', 'transparent'],
      control: {
        type: 'select'
      }
    }
  },

  render: (args) => (
    <div style={{ padding: '25px 50px'}}>
      <Button.Root iconPosition='top' {...args}>
        <Button.Icon>
          <span className="material-symbols-outlined">comment</span>
        </Button.Icon>
        Clique aqui
      </Button.Root>
    </div>
  )
}

export const SemIcone: Story = {
  args: {
    bgcolor: 'green',
    active: true
  },

  argTypes: {
    bgcolor: {
      options: ['green', 'orange', 'gray', 'pink', 'transparent'],
      control: {
        type: 'select'
      }
    },
    active: {
      control: {
        type: 'boolean'
      }
    }
  },

  render: (args) => (
    <Button.Root {...args}>
      CLIQUE AQUI
    </Button.Root>
  )
}

export const SemTexto: Story = {
  args: {
    bgcolor: 'green'
  },

  argTypes: {
    bgcolor: {
      options: ['green', 'orange', 'gray', 'pink', 'transparent'],
      control: {
        type: 'select'
      }
    }
  },

  render: (args) => (
    <div>
      <Button.Root {...args}>
        <Button.Icon size='lg'>
          <span className="material-symbols-outlined">notifications</span>
        </Button.Icon>
      </Button.Root>
    </div>
  )
}

export const SemTextoRedondo: Story = {
  args: {
    bgcolor: 'green',
    round: true,
    size: 'xs'
  },

  argTypes: {
    bgcolor: {
      options: ['white', 'green', 'pink', 'yellow', 'blue', 'lightPink', 'darkGray', 'orange'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    }
  },

  render: (args) => (
    <div>
      <Button.Root {...args}>
        <Button.Icon>
          <span className="material-symbols-outlined">person_remove</span>
        </Button.Icon>
      </Button.Root>
    </div>
  )
}
