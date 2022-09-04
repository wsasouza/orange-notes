import styled from 'styled-components'

interface ItemContainerCardProps {
  color?: string
}

export const ItemCardContainer = styled.div<ItemContainerCardProps>`
  min-width: 100%;
  display: grid;
  grid-template-columns: 48% 15% 16% 16% 5%;
  grid-template-areas: 'description value category date delete';
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
    grid-area: value;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme['gray-300']};
  }

  .category {
    grid-area: category;
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      color: ${({ color }) => color};
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
