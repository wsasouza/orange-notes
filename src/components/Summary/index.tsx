import { TagSimple } from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary'
import { dateFormatter } from '../../utils/formatter'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { summary, lastItemArticle, lastItemCourse, lastItemVideo } =
    useSummary()

  const quantityItemsDisplay = (quantityItems: number) => {
    if (quantityItems === 0) return 'Nenhum item'
    else if (quantityItems === 1) {
      return `${`${quantityItems}`.padStart(2, '0')} item`
    } else return `${`${quantityItems}`.padStart(2, '0')} itens`
  }

  const lastDateItemArticle =
    lastItemArticle === 0
      ? 'Nenhum artigo adicionado'
      : `Último artigo adicionado em ${dateFormatter.format(lastItemArticle)}`

  const lastDateItemCourse =
    lastItemCourse === 0
      ? 'Nenhum curso adicionado'
      : `Último curso adicionado em ${dateFormatter.format(lastItemCourse)}`

  const lastDateItemVideo =
    lastItemVideo === 0
      ? 'Nenhuma videoaula adicionada'
      : `Última videoaula adicionada em ${dateFormatter.format(lastItemVideo)}`

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Artigo</span>
          <TagSimple size={32} color="#F5FF03" weight="fill" />
        </header>
        <strong>{quantityItemsDisplay(summary.article)}</strong>
        <p>{lastDateItemArticle}</p>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Curso</span>
          <TagSimple size={32} color="#0CFF03" weight="fill" />
        </header>
        <strong>{quantityItemsDisplay(summary.course)}</strong>
        <p>{lastDateItemCourse}</p>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Videoaula</span>
          <TagSimple size={32} color="#FE4400" weight="fill" />
        </header>
        <strong>{quantityItemsDisplay(summary.video)}</strong>
        <p>{lastDateItemVideo}</p>
      </SummaryCard>
    </SummaryContainer>
  )
}
