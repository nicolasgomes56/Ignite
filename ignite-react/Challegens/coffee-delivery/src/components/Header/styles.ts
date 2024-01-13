import { styled } from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  background-color: ${({ theme }) => theme.colors.background};

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.375rem;
      gap: 0.25rem;
      padding: 0.5rem;

      color: ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors['purple-light']};
    }

    span {
      font-family: 'Roboto', monospace;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.1375rem;

      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 8px;
      gap: 4px;
      border-radius: 0.5rem;

      color: ${({ theme }) => theme.colors['yellow-dark']};
      background-color: ${({ theme }) => theme.colors['yellow-light']};
    }
  }
`
