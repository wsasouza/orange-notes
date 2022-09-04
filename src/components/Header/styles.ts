import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewItemButton = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme['orange-700']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['orange-500']};
    transition: background 0.5s;
  }

  @media (max-width: 440px) {
    font-size: 1rem;
    height: 2.5rem;
    padding: 0 1rem;
  }
`
