import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface Item {
  id: number
  description: string
  origin: string
  link: string
  type: 'article' | 'course' | 'video'
  category: string
  createdAt: string
}

interface CreateItemInput {
  description: string
  origin: string
  link: string
  category: string
  type: 'article' | 'course' | 'video'
}

interface ItemContextType {
  quantityItems: number
  items: Item[]
  itemsPage: Item[]
  pageCount: number
  fetchItemsPage: (page: number, query?: string) => Promise<void>
  createItem: (data: CreateItemInput) => Promise<void>
  deleteItem: (id: number) => Promise<void>
}

interface ItemProviderProps {
  children: ReactNode
}

export const ItemsContext = createContext({} as ItemContextType)

export function ItemsProvider({ children }: ItemProviderProps) {
  const [items, setItems] = useState<Item[]>([])
  const [itemsPage, setItemsPage] = useState<Item[]>([])
  const [pageCount, setpageCount] = useState(0)
  const [quantityItems, setQuantityItems] = useState(0)

  const fetchItemsPage = useCallback(
    async (page: number = 1, query?: string) => {
      const response = await api.get('items', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          _page: page,
          _limit: 5,
          q: query,
        },
      })

      const totalItens = Number(response.headers['x-total-count'])

      setQuantityItems(totalItens)

      setpageCount(Math.ceil(totalItens / 5))

      setItemsPage(response.data)
    },
    [],
  )

  const fetchItems = useCallback(async () => {
    const response = await api.get('items')

    setItems(response.data)
  }, [])

  const createItem = useCallback(
    async (data: CreateItemInput) => {
      const { description, origin, link, category, type } = data

      await api.post('items', {
        description,
        origin,
        link,
        category,
        type,
        createdAt: new Date(),
      })

      fetchItems()
      fetchItemsPage()
    },
    [fetchItems, fetchItemsPage],
  )

  const deleteItem = useCallback(
    async (id: number) => {
      await api.delete('items/' + id)

      fetchItems()
      fetchItemsPage()
    },
    [fetchItems, fetchItemsPage],
  )

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  useEffect(() => {
    fetchItemsPage()
  }, [fetchItemsPage])

  return (
    <ItemsContext.Provider
      value={{
        quantityItems,
        items,
        itemsPage,
        fetchItemsPage,
        pageCount,
        createItem,
        deleteItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
