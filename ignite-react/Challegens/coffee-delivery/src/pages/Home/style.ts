import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;

  padding: 2rem 10rem;

  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.background};

  p {
    font-family: 'Baloo 2', monospace;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;

    align-self: stretch;

    color: ${({ theme }) => theme.colors['base-title']};
  }
`
