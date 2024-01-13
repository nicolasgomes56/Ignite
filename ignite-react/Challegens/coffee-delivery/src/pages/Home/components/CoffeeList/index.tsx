import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeesCard, CoffeesCardContainer, CoffeesContainer } from './style'

import { coffeeItens } from '../../../../data/coffee'

export function CoffeeList() {
  return (
    <CoffeesContainer>
      <h1>Nossos cafés</h1>

      <CoffeesCardContainer>
        {coffeeItens.map(coffee => (
          <CoffeesCard>
            <img src={coffee.image} alt={coffee.name} />
            <div className="coffee-tag">
              {coffee.type.map(type => (
                <span>{type}</span>
              ))}
            </div>
            <h1>{coffee.name}</h1>
            <p>{coffee.description}</p>
            <div className="coffee-buy">
              <div>
                <span>
                  R$ <p>{coffee.price}</p>
                </span>
              </div>

              <div className="coffee-counter">
                <button>
                  <Minus size={14} weight="bold" />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </div>

              <button className="coffee-actions">
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </CoffeesCard>
        ))}
      </CoffeesCardContainer>
    </CoffeesContainer>
  )
}
