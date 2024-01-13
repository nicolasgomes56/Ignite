import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 90rem;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
`
