import { ActionsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoSvg from '@/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="" />
      <ActionsContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </div>

        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </ActionsContainer>
    </HeaderContainer>
  )
}
