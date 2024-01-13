import { HomeContainer } from './style'

import coffeeImg from '@/assets/coffee.png'

export function Home() {
  return (
    <HomeContainer>
      <p>Encontre o café perfeito para qualquer hora do dia</p>
      <div></div>
      <div>
        <img src={coffeeImg} alt="Café" />
      </div>
    </HomeContainer>
  )
}
