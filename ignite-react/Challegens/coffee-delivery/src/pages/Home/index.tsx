import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeList, HeroContainer, HeroContent, HeroItems, HomeContainer } from './style'
// import { CoffeeList } from './components/CoffeeList'
import { useTheme } from 'styled-components'

import coffeeImg from '@/assets/coffee.png'
import { Card } from '../../components/Card'

import { coffeeItens as coffees } from '../../data/coffee'

export function Home() {
  const theme = useTheme()

  return (
    <HomeContainer>
      <HeroContainer>
        <HeroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <HeroItems>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </HeroItems>
        </HeroContent>
        <img src={coffeeImg} alt="Café" />
      </HeroContainer>
      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map(coffee => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </HomeContainer>
  )
}
