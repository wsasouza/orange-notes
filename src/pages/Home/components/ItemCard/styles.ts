import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

interface ItemContainerCardProps {
  color?: string
  colorType?: string
}

export const ItemCardContainer = styled.div<ItemContainerCardProps>`
  min-width: 100%;
  display: grid;
  grid-template-columns: 43% 20% 16% 16% 5%;
  grid-template-areas: 'description origin category date delete';
  padding: 1.125rem 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-700']};
  border-left: 5px solid ${({ color }) => color};

  .description {
    grid-area: description;
    display: flex;
    align-items: center;
  }

  .origin {
    grid-area: origin;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme['gray-400']};

    &:hover {
      color: ${(props) => props.theme.white};
      transition: 0.5s;
    }
  }

  .category {
    grid-area: category;
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      color: ${({ colorType }) => colorType};
    }
  }

  .date {
    grid-area: date;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .delete {
    grid-area: delete;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  .delete:hover {
    svg {
      color: ${(props) => props.theme['red-300']};
      transition: color 0.5s;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 1.5rem 1.5rem auto;
    grid-template-areas:
      'description description description delete'
      'origin origin origin origin'
      'category category date date';
    padding: 1.5rem;

    .delete {
      text-align: right;
    }

    .origin {
      margin-top: 1.5rem;
      font-size: 1.25rem;
    }

    .category {
      margin-top: 1.5rem;
    }

    .date {
      margin-top: 1.5rem;
      justify-content: flex-end;
    }
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const DialogContent = styled(Dialog.Content)`
  width: 22rem;
  border-radius: 6px;
  padding: 1.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const DialogDescription = styled(Dialog.Description)`
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-400']};
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  &:hover {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const DialogAction = styled.div`
  margin: 1.5rem 0 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CancelButton = styled(Dialog.Close)`
  border: 0;
  padding: 0.5rem 1rem;
  min-width: 7rem;
  background: ${(props) => props.theme['blue-700']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    transition: 0.5s;
  }
`

export const DeleteButton = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
  min-width: 7rem;
  background: ${(props) => props.theme['orange-700']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['orange-500']};
    color: ${(props) => props.theme.white};
    transition: 0.5s;
  }
`
