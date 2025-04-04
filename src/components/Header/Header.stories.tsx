import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './index'
import { expect, within } from '@storybook/test'
import { Button } from '../Button'
import Image from 'next/image'
import logoDark from '../../../public/images/pokemon.png'

const meta: Meta<typeof Header.Root> = {
  title: 'Componentes/Header',
  component: Header.Root,
  args: {
    isFull: true
  },

  tags: ['autodocs'],

  parameters: {
    design: {
      type: 'link',
      url: 'https://xd.adobe.com/view/acc20d30-5caf-45cf-bef9-28198cff2b7e-f991/screen/b6c78c82-b231-48c6-ba33-53358ea3c45e/'
    }
  }
}

export default meta

type Story = StoryObj<typeof Header.Root>

export const ComLogo: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const headerElement = canvas.getByTestId('HeaderTest')
    await expect(headerElement).toBeInTheDocument()
    const headerBrandElement = canvas.getByTestId('HeaderBrandTest')
    await expect(headerBrandElement).toBeInTheDocument()

  },
  render: (args) => (
    <Header.Root {...args}>
      <Header.Brand url="/" ariaLabel='Página inicial'>
        <Image src={logoDark} alt='' width={80} height={80} />
      </Header.Brand>
    </Header.Root>
  )
}

export const ComIcone: Story = {
  render: (args) => (
    <Header.Root {...args}>
      <Header.Brand url='/' ariaLabel='Página inicial'>
        <Image src={logoDark} alt='' width={80} height={80} />
      </Header.Brand>
      <Header.Icons>
      <Button.Root bgcolor='transparent'>
          <Button.Icon size='lg'>
            <span className='material-symbols-outlined'>notifications</span>
          </Button.Icon>
        </Button.Root>
      </Header.Icons>
    </Header.Root>
  )
}

export const ComTitulo: Story = {
  render: (args) => (
    <Header.Root {...args}>
      <Header.Brand url='/' ariaLabel='Página inicial'>
        <Image src={logoDark} alt='' width={80} height={80} />
      </Header.Brand>
      <Header.Content>
        <h3>Header Pokemon</h3>
      </Header.Content>
      <Header.Icons>
        <Button.Root bgcolor='transparent'>
          <Button.Icon size='lg'>
            <span className='material-symbols-outlined'>notifications</span>
          </Button.Icon>
        </Button.Root>
      </Header.Icons>
    </Header.Root>
  )
}
