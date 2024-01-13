import { styled } from 'styled-components'

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;
  gap: 3.375rem;

  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;

    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CoffeesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.375rem;
  flex-shrink: 0;
`

export const CoffeesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 256px;
  height: 310px;
  flex-shrink: 0;

  padding: 0 1.25rem;

  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }

  .coffee-tag {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 0.75rem;
    gap: 0.25rem;

    span {
      padding: 0.25rem 0.5rem;

      border-radius: 100px;

      font-family: 'Roboto', 'sans-serif';
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 0.8125rem;
      text-transform: uppercase;

      color: ${({ theme }) => theme.colors['yellow-dark']};
      background-color: ${({ theme }) => theme.colors['yellow-light']};
    }
  }

  h1 {
    margin-top: 1rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;

    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    margin-top: 0.5rem;

    font-family: 'Roboto', 'sans-serif';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1375rem;

    color: ${({ theme }) => theme.colors['base-text']};
  }

  .coffee-buy {
    display: flex;
    width: 208px;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      text-align: right;

      font-family: 'Roboto';
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    span > p {
      font-family: 'Baloo 2', 'sans-serif';
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.1375rem;
    }

    .coffee-counter {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 2.375rem;
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;

      margin: 0 0.5rem 0 auto;

      background-color: ${({ theme }) => theme.colors['base-button']};

      span {
        text-align: center;

        font-family: 'Roboto';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

        color: ${({ theme }) => theme.colors['base-title']};
      }

      svg {
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    .coffee-actions {
      display: flex;
      align-items: center;

      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.375rem;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`
