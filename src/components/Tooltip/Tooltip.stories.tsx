import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './index'
import { Button } from '../Button'
import "../style.css";

const meta: Meta<typeof Tooltip.Root> = {
  title: 'Componentes/Tooltip',
  component: Tooltip.Root,
  tags: ['autodocs'],

  args: {
    color: 'light',
    side: 'right'
  },

  argTypes: {
    side: {
      options: ['bottom', 'top', 'left', 'right'],
      control: {
        type: 'select'
      }
    },
    color: {
      options: ['light', 'dark'],
      control: {
        type: 'select'
      }
    }
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
      url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/82b44248-2678-4bf6-9517-9d8c941424bf/'
    }
  },
};

export default meta

type Story = StoryObj<typeof Tooltip.Root>

export const SemSeta: Story = {
  render: (args: any) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>
        <Button.Root color="gray">
          <Button.Icon size="sm">
            <span className="material-symbols-outlined">
              info
            </span>
          </Button.Icon>
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content {...args}>
        Beltrana da Silva
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

export const ComSeta: Story = {
  render: (args: any) => (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button.Root color="gray">
          <Button.Icon size="sm">
            <span className="material-symbols-outlined">
              info
            </span>
          </Button.Icon>
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content {...args}>
        <Tooltip.Arrow />
        Beltrana da Silva
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
