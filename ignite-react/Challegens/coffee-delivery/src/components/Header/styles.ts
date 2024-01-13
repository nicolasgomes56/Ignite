import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    gap: 0.25rem;

    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-radius: 0.375rem;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      font-family: 'Roboto', monospace;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.1375rem;

      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    border-radius: 0.375rem;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    background-color: ${({ theme }) => theme.colors['yellow-light']};
  }
`
