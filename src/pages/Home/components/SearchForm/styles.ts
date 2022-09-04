import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['orange-700']};
    color: ${(props) => props.theme['orange-700']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      background: ${(props) => props.theme['orange-700']};
      border-color: ${(props) => props.theme['orange-700']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.5s, color 0.5s, border-color 0.5s;
    }

    @media (max-width: 440px) {
      span {
        display: none;
      }
    }
  }
`
