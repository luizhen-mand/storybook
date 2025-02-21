import type { Meta, StoryObj } from '@storybook/react'
import { InputText } from './index'
import './inputtext.css'
import { expect, userEvent, within } from '@storybook/test'
import { FaSearch } from 'react-icons/fa'; // Importando o ícone do react-icons


const meta: Meta<typeof InputText.Root> = {
  title: 'Componentes/InputText',
  component: InputText.Root,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    required: false,
    error: false
  },
  argTypes: {
    inputSize: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    required: {
      control: {
        type: 'boolean'
      }
    },
    error: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'link',
      url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/707aad8b-a0d7-435e-8173-b048c3edfd79/'
    }
  }
}

export default meta

type Story = StoryObj<typeof InputText.Root>

export const ComLabel: Story = {
  render: (args) => (
    <InputText.Root {...args}>
      <InputText.Label {...args} htmlFor='test'>
        Valor
      </InputText.Label >
      <InputText.Input required id='test'  {...args} />
    </InputText.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Valor')
    await userEvent.type(input, '12345')
    await expect(input).toHaveValue('12345')
  }
}

export const ComLabelETexto: Story = {
  args: {
    childrenPosition: 'left',
    required: true
  },
  argTypes: {
    childrenPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select'
      }
    }
  },
  render: (args) => (
    <InputText.Root {...args}>
      <InputText.Label  htmlFor='test'>
        Valor
      </InputText.Label>
      <InputText.Input {...args} id='test'>
        <b>R$</b>
      </InputText.Input>
    </InputText.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Valor')
    await userEvent.type(input, '500')
    await expect(input).toHaveValue('500')
  }
}

export const ComTextoErro: Story = {
  args: {
    error: true
  },
  render: (args) => (
    <InputText.Root {...args}>
      <InputText.Label {...args} htmlFor='test'>
        Valor
      </InputText.Label>
      <InputText.Input id='test' />
      <InputText.Message>Algo está errado</InputText.Message>
    </InputText.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Valor')
    await userEvent.type(input, 'test')
    await expect(input).toHaveValue('test')
    const alert = canvas.getByText('Algo está errado')
    await expect(alert).toBeVisible()
  }
}

export const ComIcone: Story = {
  render: (args) => (
    <InputText.Root {...args}>
      <InputText.Label>
        <InputText.Input id='test'>
          <InputText.Icon>
          <FaSearch />
          </InputText.Icon>
        </InputText.Input>
      </InputText.Label>
    </InputText.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'test')
    await expect(input).toHaveValue('test')
  }
}

export const Disabled: Story = {
  render: (args) => (
    <InputText.Root {...args}>
      <InputText.Label {...args} htmlFor='test'>
        Valor
      </InputText.Label>
      <InputText.Input id='test' readOnly />
    </InputText.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'test')
    await expect(input).not.toHaveValue('test')
  }
}