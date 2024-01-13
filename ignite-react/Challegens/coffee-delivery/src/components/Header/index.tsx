import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoSvg from '@/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="" />
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </div>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </nav>
    </HeaderContainer>
  )
}
