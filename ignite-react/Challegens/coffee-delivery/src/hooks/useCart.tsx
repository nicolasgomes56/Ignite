import { useContext } from 'react'

import { CartContext } from '../contexts/CardProvider'

export function useCart() {
  return useContext(CartContext)
}
