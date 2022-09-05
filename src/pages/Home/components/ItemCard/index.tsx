import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CalendarBlank, TagSimple, Trash, X } from 'phosphor-react'

import { categories } from '../../../../utils/categories'
import { itemTypes } from '../../../../utils/itemTypes'

import {
  CancelButton,
  CloseButton,
  DeleteButton,
  DialogAction,
  DialogContent,
  DialogDescription,
  ItemCardContainer,
  Overlay,
} from './styles'
import { dateFormatter } from '../../../../utils/formatter'

interface ItemCardProps {
  id: number
  description: string
  origin: string
  link: string
  category: string
  type: 'artigo' | 'curso' | 'videoaula'
  createdAt: string
  onDeleteCard: (id: number) => void
}

export function ItemCard(item: ItemCardProps) {
  const [open, setOpen] = useState(false)

  const category = categories.find((category) => category.key === item.category)

  const type = itemTypes.find((type) => type.key === item.type)

  return (
    <ItemCardContainer color={category?.color} colorType={type?.color}>
      <span className="description">{item.description}</span>

      <a href={item.link} target="_blank" rel="noreferrer" className="origin">
        {item.origin}
      </a>

      <div className="category">
        <TagSimple size={16} weight="fill" />
        <span>{type?.name}</span>
      </div>
      <div className="date">
        <CalendarBlank size={16} color="#7C7C8A" />
        {dateFormatter.format(new Date(item.createdAt))}
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="delete" title="Apagar Item">
            <Trash size={20} />
          </button>
        </Dialog.Trigger>
        <Overlay />
        <DialogContent>
          <Dialog.Title>Apagar item</Dialog.Title>
          <CloseButton asChild>
            <X size={24} />
          </CloseButton>
          <DialogDescription>
            Tem certeza que deseja apagar este item?
          </DialogDescription>
          <DialogAction>
            <CancelButton>Cancelar</CancelButton>
            <DeleteButton onClick={() => item.onDeleteCard(item.id)}>
              Confirmar
            </DeleteButton>
          </DialogAction>
        </DialogContent>
      </Dialog.Root>
    </ItemCardContainer>
  )
}
