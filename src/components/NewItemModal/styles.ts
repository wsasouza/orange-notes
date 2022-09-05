import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Radio from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 35rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      font-size: 1rem;
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      &:error :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
      }
    }

    button[type='submit'] {
      height: 3.625rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['orange-700']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['orange-500']};
        transition: background-color 0.5s;
      }
    }
  }

  @media (max-width: 512px) {
    max-width: 24rem;
    padding: 1.5rem 2rem 3rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border-radius: 50%;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  &:hover {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const ItemType = styled(Radio.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`

export const ItemTypeButton = styled(Radio.Item)`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) => props.theme.white};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.5s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['blue-700']};

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const SelectCategory = styled.select`
  margin-top: 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  cursor: pointer;
`
