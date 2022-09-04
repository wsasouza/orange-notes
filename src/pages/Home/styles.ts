import styled, { css } from 'styled-components'

export const ItemsContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;

  > span {
    color: ${(props) => props.theme['gray-500']};
  }
`
interface FilterContainerProps {
  variant?: string
}

export const FilterContainer = styled.div<FilterContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.variant &&
    css`
      span {
        font-size: 0.875rem;
        padding: 8px 16px;
        border-radius: 6px;
        background: ${(props) => props.theme['green-700']};
        color: ${(props) => props.theme['gray-100']};
      }
    `};
`

export const ItemsTable = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
