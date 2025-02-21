import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputUpload } from './index'
import { expect, userEvent, within, logRoles } from '@storybook/test'
import { MdUpload } from 'react-icons/md';

const meta: Meta<typeof InputUpload.Root> = {
  title: 'Componentes/InputUpload',
  component: InputUpload.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    logRoles(canvasElement)

    const buttonElement = canvas.getByRole('button', {
      name: /upload clique aqui ou arraste os arquivos/i,
    })
    await expect(buttonElement).toBeInTheDocument()

    await userEvent.click(buttonElement)

    const inputElement = canvasElement.querySelector('input[type="file"]') as HTMLInputElement
    if (!inputElement) throw new Error('Input file element not found')

    const file = new File(['file content'], 'example.txt', { type: 'text/plain' })
    await userEvent.upload(inputElement, file)

    expect(inputElement.files).toHaveLength(1)
    expect(inputElement.files?.[0].name).toBe('example.txt')

    const inputId = inputElement.id
    const labelElement = canvas.getByLabelText('Upload file')
    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveAttribute('id', inputId)
  },
}

export default meta

type Story = StoryObj<typeof InputUpload.Root>

export const ComTextoEIcone: Story = {
  render: () => (
    <div style={{ width: '70vw' }}>
      <InputUpload.Root>
        <InputUpload.Container
          onFilesSelected={(files) => {
            console.log('Arquivos selecionados:', files)
          }}
        >
          <InputUpload.Button>
            <MdUpload color="#EF339F" size={20} />
            Clique aqui ou arraste os arquivos
          </InputUpload.Button>
        </InputUpload.Container>
      </InputUpload.Root>
    </div>
  )
}