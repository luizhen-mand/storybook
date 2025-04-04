
import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './index'

const meta: Meta<typeof Footer.Root> = {
  title: 'Componentes/Footer',
  component: Footer.Root,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer.Root>

export const ComTexto: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Text>© 2025 "Minha Empresa". Todos os direitos reservados.</Footer.Text>
    </Footer.Root>
  ),
}
