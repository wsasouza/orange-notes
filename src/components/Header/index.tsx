import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderContent, NewItemButton } from './styles'
import { NewItemModal } from '../NewItemModal'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <NewItemButton>Novo Item</NewItemButton>
            </Dialog.Trigger>
            <NewItemModal setOpen={setOpen} />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
