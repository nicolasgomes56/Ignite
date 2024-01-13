import { HomeContainer, TitleContainer } from './style'

import coffeeImg from '@/assets/coffee.png'

export function Home() {
  return (
    <HomeContainer>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
      </TitleContainer>
      <div>
        <img src={coffeeImg} alt="Café" />
      </div>
    </HomeContainer>
  )
}
