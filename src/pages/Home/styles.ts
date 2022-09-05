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
        background: ${(props) => props.theme['orange-700']};
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

export const NoResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    display: block;
    max-width: 12.5rem;
    margin: 3rem auto 2rem;
  }
`

export const PaginateContainer = styled.div`
  .pagination {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .page-item.active .page-link {
    background-color: ${(props) => props.theme['orange-700']};
    color: ${(props) => props.theme['gray-100']};
  }

  .page-item.active :focus {
    box-shadow: none;
  }

  .chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    color: ${(props) => props.theme['orange-700']};
    cursor: pointer;
  }

  .chevron.disabled {
    color: ${(props) => props.theme['gray-600']};
    cursor: not-allowed;
  }

  .chevron :focus {
    box-shadow: none;
  }

  .chevron:not(.disabled):hover {
    color: ${(props) => props.theme['orange-500']};
    transition: color 0.5s;
  }

  .page-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    min-width: 2.5rem;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-400']};
    background: ${(props) => props.theme['gray-600']};
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  .page-link:hover {
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['orange-500']};
    transition: 0.5s;
  }

  .break {
    display: none;
  }
`
