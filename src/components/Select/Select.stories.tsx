import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './index'
import { useState } from 'react'

const meta: Meta<typeof Select.Root> = {
  title: 'Componentes/Select',
  component: Select.Root,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }]
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Select.Root>

const samplePeople = [
  { value: '1', label: 'betania@example.com' },
  { value: '2', label: 'beltrana@example.com' },
  { value: '3', label: 'beltrana@example.com' }
]

export const SemLabel: Story = {
  args: {
    color: 'gray'
  },

  argTypes: {
    color: {
      options: ['green', 'orange', 'gray', 'pink'],
      control: {
        type: 'select'
      }
    }
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('')
    const handleChange = (value: string) => {
      setSelectedValue(value)
    }

    return (
      <div style={{ width: '50vw' }}>
        <Select.Root>
          <Select.Input
            {...args}
            options={samplePeople}
            value={selectedValue}
            onValueChange={handleChange}
            search
          />
        </Select.Root>
      </div>
    )
  }
}

export const SemBusca: Story = {
  args: {
    color: 'gray'
  },

  argTypes: {
    color: {
      options: ['green', 'orange', 'gray', 'pink'],
      control: {
        type: 'select'
      }
    }
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('')
    const handleChange = (value: string) => {
      setSelectedValue(value)
    }

    return (
      <div style={{ width: '50vw' }}>
        <Select.Root>
          <Select.Label>Selecione aqui</Select.Label>
          <Select.Input
            {...args}
            options={samplePeople}
            value={selectedValue}
            onValueChange={handleChange}
            aria-label="Selecione um valor"
          />
        </Select.Root>
      </div>
    )
  }
}

export const ComBusca: Story = {
  args: {
    color: 'gray'
  },

  argTypes: {
    color: {
      options: ['green', 'orange', 'gray', 'pink'],
      control: {
        type: 'select'
      }
    }
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('')
    const handleChange = (value: string) => {
      setSelectedValue(value)
    }
    
    return (
      <div style={{ width: '50vw' }}>
        <Select.Root>
          <Select.Label>Selecione aqui</Select.Label>
          <Select.Input
            {...args}
            options={samplePeople}
            value={selectedValue}
            onValueChange={handleChange}
            search
          />
        </Select.Root>
      </div>
    )
  }
}

export const ComTextoErro: Story = {
  args: {
    color: 'gray'
  },

  argTypes: {
    color: {
      options: ['green', 'orange', 'gray', 'pink'],
      control: {
        type: 'select'
      }
    }
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('')
    const handleChange = (value: string) => {
      setSelectedValue(value)
    }

    return (
      <div style={{ width: '50vw' }}>
        <Select.Root>
          <Select.Label required>Selecione aqui</Select.Label>
          <Select.Input
            {...args}
            options={samplePeople}
            value={selectedValue}
            onValueChange={handleChange}
            search
          />
          <Select.Alert>Preenchimento obrigatório.</Select.Alert>
        </Select.Root>
      </div>
    )
  }
}