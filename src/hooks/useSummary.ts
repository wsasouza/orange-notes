import { useContextSelector } from 'use-context-selector'

import { ItemsContext } from '../contexts/ItemsContexts'

interface Item {
  id: number
  description: string
  origin: string
  link: string
  type: 'article' | 'course' | 'video'
  category: string
  createdAt: string
}

export function useSummary() {
  const items = useContextSelector(ItemsContext, (context) => {
    return context.items
  })

  function getLastItemDate(
    collection: Item[],
    type: 'article' | 'course' | 'video',
  ) {
    const collectionFilttered = collection.filter((item) => item.type === type)

    if (collectionFilttered.length === 0) return 0

    const lastItemDate = new Date(
      Math.max.apply(
        Math,
        collectionFilttered.map((item) => new Date(item.createdAt).getTime()),
      ),
    )

    return lastItemDate
  }

  const lastItemArticle = getLastItemDate(items, 'article')

  const lastItemCourse = getLastItemDate(items, 'course')

  const lastItemVideo = getLastItemDate(items, 'video')

  const summary = items.reduce(
    (acc, item) => {
      if (item.type === 'article') {
        acc.article += 1
      } else if (item.type === 'course') {
        acc.course += 1
      } else {
        acc.video += 1
      }
      return acc
    },
    { article: 0, course: 0, video: 0 },
  )

  return {
    summary,
    lastItemArticle,
    lastItemCourse,
    lastItemVideo,
  }
}
