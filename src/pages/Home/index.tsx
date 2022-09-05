/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import ReactPaginate from 'react-paginate'
import { CaretLeft, CaretRight, Funnel } from 'phosphor-react'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { ItemCard } from './components/ItemCard'
import { SearchForm } from './components/SearchForm'
import { ItemsContext } from '../../contexts/ItemsContexts'
import noResult from '../../assets/no-result.svg'

import {
  FilterContainer,
  InfoContainer,
  ItemsContainer,
  ItemsTable,
  NoResultContainer,
  PaginateContainer,
} from './styles'

interface PageClickProps {
  selected: number
}

export function Home() {
  const [query, setQuery] = useState('')
  const [remountComponent, setRemountComponent] = useState(0)

  const itemsPerPage = useContextSelector(ItemsContext, (context) => {
    return context.itemsPage
  })

  const fetchItemsPage = useContextSelector(ItemsContext, (context) => {
    return context.fetchItemsPage
  })

  const pageCount = useContextSelector(ItemsContext, (context) => {
    return context.pageCount
  })

  const quantityItems = useContextSelector(ItemsContext, (context) => {
    return context.quantityItems
  })

  const deleteItem = useContextSelector(ItemsContext, (context) => {
    return context.deleteItem
  })

  const quantityItemsDisplay = (quantityItems: number) => {
    if (quantityItems === 0) return 'Não há registros'
    else if (quantityItems === 1) {
      return `${`${quantityItems}`.padStart(2, '0')} item`
    } else return `${`${quantityItems}`.padStart(2, '0')} itens`
  }

  const handlePageClick = async ({ selected }: PageClickProps) => {
    const currentPage = selected + 1

    await fetchItemsPage(currentPage, query)
  }

  const hasItem = !!quantityItems
  console.log(hasItem)

  const handleDeleteItem = async (id: number) => {
    await deleteItem(id)

    setRemountComponent(Math.random())
  }

  return (
    <div>
      <Header />
      <Summary />

      <div key={remountComponent}>
        <ItemsContainer>
          <InfoContainer>
            <FilterContainer variant={query}>
              {query ? (
                <Funnel size={32} weight="fill" color="#7C7C8A" />
              ) : (
                <Funnel size={32} color="#7C7C8A" />
              )}
              <span>{query}</span>
            </FilterContainer>

            <span>{quantityItemsDisplay(quantityItems)}</span>
          </InfoContainer>

          <SearchForm setQuery={setQuery} setPage={setRemountComponent} />

          <ItemsTable>
            {itemsPerPage.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  description={item.description}
                  origin={item.origin}
                  link={item.link}
                  type={item.type}
                  category={item.category}
                  createdAt={item.createdAt}
                  id={item.id}
                  onDeleteCard={handleDeleteItem}
                />
              )
            })}
          </ItemsTable>
          {hasItem ? (
            <PaginateContainer>
              <ReactPaginate
                previousLabel={<CaretLeft size={24} weight="bold" />}
                nextLabel={<CaretRight size={24} weight="bold" />}
                breakClassName={'break'}
                pageCount={pageCount}
                marginPagesDisplayed={0}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'chevron'}
                previousLinkClassName={'chevron-link'}
                nextClassName={'chevron'}
                nextLinkClassName={'chevron-link'}
                activeClassName={'active'}
              />
            </PaginateContainer>
          ) : (
            <NoResultContainer>
              <img src={noResult} alt="" />
              <span>Sem registros</span>
            </NoResultContainer>
          )}
        </ItemsContainer>
      </div>
    </div>
  )
}
