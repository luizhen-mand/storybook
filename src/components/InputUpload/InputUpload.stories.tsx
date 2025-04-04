import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputUpload } from './index'

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
            <span className='material-symbols-outlined'>upload</span>
            Clique aqui ou arraste os arquivos
          </InputUpload.Button>
        </InputUpload.Container>
      </InputUpload.Root>
    </div>
  )
}