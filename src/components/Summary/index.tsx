import { ArticleMedium, MonitorPlay, Queue } from 'phosphor-react'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Artigo</span>
          <ArticleMedium size={32} color="#fff" />
        </header>
        <strong>9 itens</strong>
        <p>Último artigo adicionado em 04/09/2022</p>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Curso</span>
          <Queue size={32} color="#fff" />
        </header>
        <strong>10 itens</strong>
        <p>Último curso adicionado em 02/09/2022</p>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Vídeo-Aula</span>
          <MonitorPlay size={32} color="#fff" />
        </header>
        <strong>Nenhum item</strong>
        <p>Nenhuma vídeo aula adicionada ainda</p>
      </SummaryCard>
    </SummaryContainer>
  )
}
