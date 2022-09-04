import { MagnifyingGlass } from 'phosphor-react'

import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Pesquisar itens..." />
      <button>
        <MagnifyingGlass size={20} weight="bold" />
        <span>Pesquisar</span>
      </button>
    </SearchFormContainer>
  )
}
