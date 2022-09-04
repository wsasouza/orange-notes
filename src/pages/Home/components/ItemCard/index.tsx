import { CalendarBlank, TagSimple, Trash } from 'phosphor-react'

import { categories } from '../../../../utils/categories'
import { itemTypes } from '../../../../utils/itemTypes'

import { ItemCardContainer } from './styles'

interface ItemCardProps {
  id: number
  description: string
  origin: string
  link: string
  category: string
  type: 'article' | 'course' | 'video'
  createdAt: string
}

export function ItemCard(item: ItemCardProps) {
  const category = categories.find((category) => category.key === item.category)

  const type = itemTypes.find((type) => type.key === item.type)

  return (
    <ItemCardContainer color={category?.color}>
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
        04/09/2022
      </div>

      <button className="delete" title="Apagar Item">
        <Trash size={20} />
      </button>
    </ItemCardContainer>
  )
}
