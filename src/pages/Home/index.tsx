import { Funnel } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { ItemCard } from './components/ItemCard'
import { SearchForm } from './components/SearchForm'

import {
  FilterContainer,
  InfoContainer,
  ItemsContainer,
  ItemsTable,
} from './styles'

export function Home() {
  const query = 'item de busca'
  return (
    <div>
      <Header />
      <Summary />

      <ItemsContainer>
        <InfoContainer>
          <FilterContainer>
            {query ? (
              <Funnel size={32} weight="fill" color="#7C7C8A" />
            ) : (
              <Funnel size={32} color="#7C7C8A" />
            )}
            <span>{query}</span>
          </FilterContainer>

          <span>19 itens</span>
        </InfoContainer>

        <SearchForm />

        <ItemsTable>
          <ItemCard
            key={1}
            description="Trilha Ignite ReactJS"
            origin="Rocketseat"
            link="https://app.rocketseat.com.br/ignite/react-js-2022"
            type="course"
            category="front"
            createdAt="04/09/2022"
            id={1}
          />
        </ItemsTable>
      </ItemsContainer>
    </div>
  )
}
