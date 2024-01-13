import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  padding: 2rem 10rem;
  gap: 16rem;

  background-color: ${({ theme }) => theme.colors.background};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 588px;

  h1 {
    font-family: 'Baloo 2', monospace;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;

    align-self: stretch;

    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    font-family: 'Roboto', monospace;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;

    color: ${({ theme }) => theme.colors['base-text']};
  }
`
