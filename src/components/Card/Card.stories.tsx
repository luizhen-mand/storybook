import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'

const meta: Meta<typeof Card.Root> = {
  title: 'Componentes/Card',
  component: Card.Root,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    design: {
      type: 'link',
      url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/a205023e-41cc-4895-b293-890be8076093/'
    }
  }
}

export default meta

type Story = StoryObj<typeof Card.Root>

export const ComTítulo: Story = {
  render: () => (
    <Card.Root>
      <Card.Title>23</Card.Title>
    </Card.Root>
  ),
}

export const ComDescrição: Story = {
  render: () => (
    <Card.Root>
      <Card.Title>23</Card.Title>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur
      </Card.Description>
    </Card.Root>
  ),
}
