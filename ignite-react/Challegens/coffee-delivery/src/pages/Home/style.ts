import styled from 'styled-components'
import { fonts } from '../../styles/themes/fonts'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 6.438rem 10rem;
  gap: 3.5rem;

  color: ${({ theme }) => theme.colors.white};
`

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;
  align-items: flex-start;

  gap: 1rem;
  margin-right: 3.5rem;

  h1 {
    align-self: stretch;
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const HeroItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 0.75rem;
  margin-top: 4.13rem;

  color: ${({ theme }) => theme.colors['base-subtitle']};

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999%;
    }

    > span {
      font-family: 'Roboto';
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }
  }
`
export const CoffeeList = styled.section`
  max-width: 1160px;
  padding-top: 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
