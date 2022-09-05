import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'

import { ItemsContext } from '../../../../contexts/ItemsContexts'

import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormComponentProps {
  setQuery: (state: string) => void
  setPage: (state: number) => void
}

export function SearchForm({ setQuery, setPage }: SearchFormComponentProps) {
  const fetchItems = useContextSelector(ItemsContext, (context) => {
    return context.fetchItemsPage
  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchItems(data: SearchFormInputs) {
    const page = 1
    setQuery(data.query)
    setPage(Math.random())
    await fetchItems(page, data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchItems)}>
      <input
        type="text"
        placeholder="Pesquisar itens..."
        {...register('query')}
      />
      <button disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        <span>Pesquisar</span>
      </button>
    </SearchFormContainer>
  )
}
