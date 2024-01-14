import { styled } from 'styled-components'

import { fonts } from '../../styles/themes/fonts'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 256px;
  height: 310px;

  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  > div {
    padding: 0 1.25rem;
  }
`

export const CardImage = styled.img`
  margin-top: -20px;
  width: 120px;
  height: 120px;
`
export const CardTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  margin-top: 0.75rem;

  > span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors['yellow-dark']};
    background-color: ${({ theme }) => theme.colors['yellow-light']};
  }
`

export const CardTitle = styled.h1`
  margin-top: 1rem;

  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const CardDescription = styled.p`
  margin-top: 0.5rem;
  text-align: center;

  font-family: 'Roboto';
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  color: ${({ theme }) => theme.colors['base-label']};
`

export const CardBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .card-price {
    display: flex;
    align-items: baseline;
    gap: 4px;

    span:first-child {
      ${fonts.textS};
      color: ${({ theme }) => theme.colors['base-text']};
    }

    span:last-child {
      ${fonts.titleM};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  > .card-counter {
    display: flex;
    height: 38px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-button']};

    > span {
      ${fonts.textM};
      color: ${({ theme }) => theme.colors['base-title']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    border-radius: 0.375rem;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const CardActions = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
