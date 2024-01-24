import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CardActions, CardContainer, CardDescription, CardImage, CardTag, CardTitle } from './style'

import { type ICoffeeProps } from '@/data/coffee'

interface ICardProps {
  coffee: ICoffeeProps
}

export function Card({ coffee }: ICardProps) {
  const theme = useTheme()
  return (
    <CardContainer>
      <CardImage src={coffee.image} alt="Café" />
      <div>
        <CardTag>
          {coffee.type.map(type => (
            <span>{type}</span>
          ))}
        </CardTag>
        <CardTitle>{coffee.name}</CardTitle>
        <CardDescription>{coffee.description}</CardDescription>
        <CardActions>
          <div className="card-price">
            <span>R$</span>
            <span>4,00</span>
          </div>

          <div className="card-counter">
            <Minus size={14} weight="bold" color={theme.colors.purple} />
            <span>1</span>
            <Plus size={14} weight="bold" color={theme.colors.purple} />
          </div>

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardActions>
      </div>
    </CardContainer>
  )
}
