/* eslint-disable react/no-unknown-property */
import { useContextSelector } from 'use-context-selector'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { TagSimple, X } from 'phosphor-react'

import { ItemsContext } from '../../contexts/ItemsContexts'
import { categories } from '../../utils/categories'

import {
  CloseButton,
  Content,
  Overlay,
  SelectCategory,
  ItemType,
  ItemTypeButton,
} from './styles'

const newItemFormSchema = z.object({
  description: z.string(),
  origin: z.string(),
  link: z.string(),
  type: z.enum(['artigo', 'curso', 'videoaula']),
  category: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
}

type NewItemFormInputs = z.infer<typeof newItemFormSchema>

export function NewItemModal({ setOpen }: NewItemModalProps) {
  const createTransaction = useContextSelector(ItemsContext, (context) => {
    return context.createItem
  })

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewItemFormInputs>({
    resolver: zodResolver(newItemFormSchema),
  })

  async function handleCreateNewItem(data: NewItemFormInputs) {
    const { description, origin, link, type, category } = data

    await createTransaction({
      description,
      origin,
      link,
      type,
      category,
    })

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Item</Dialog.Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewItem)}>
          <input
            type="text"
            placeholder="Título"
            {...register('description')}
            required
          />

          <input
            type="text"
            placeholder="Origem"
            required
            {...register('origin')}
          />

          <input
            type="text"
            placeholder="Link"
            required
            {...register('link')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <ItemType onValueChange={field.onChange} value={field.value}>
                  <ItemTypeButton value="artigo">
                    <TagSimple size={20} weight="fill" color="#F5FF03" />
                    Artigo
                  </ItemTypeButton>

                  <ItemTypeButton value="curso">
                    <TagSimple size={20} weight="fill" color="#0CFF03" />
                    Curso
                  </ItemTypeButton>

                  <ItemTypeButton value="videoaula">
                    <TagSimple size={20} weight="fill" color="#FE4400" />
                    Videoaula
                  </ItemTypeButton>
                </ItemType>
              )
            }}
          />

          <SelectCategory {...register('category')}>
            <option value="no" hidden>
              Selecione a categoria
            </option>
            {categories.map((category) => {
              return (
                <option key={category.key} value={category.key}>
                  {category.name}
                </option>
              )
            })}
          </SelectCategory>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
