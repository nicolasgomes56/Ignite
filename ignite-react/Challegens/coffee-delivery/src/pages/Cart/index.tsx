import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine } from 'phosphor-react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { useCart } from '../../hooks/useCart'
import {
  CartContainer,
  CartFormAddress,
  CartFormContainer,
  CartFormHeading,
  CartInfoContainer,
} from './style'

interface CartFormInput {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  city: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'money'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o Cep' }),
  rua: z.string().min(1, 'Informe a Rua'),
  numero: z.number().min(1, 'Informe o número'),
  complemento: z.string(),
  bairro: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().min(1, 'Informe o Estado'),
  paymentMethod: z.enum(['credit', 'debit', 'money'], {
    invalid_type_error: 'Informe o método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Cart() {
  const { cart } = useCart()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CartFormInput>({
    resolver: zodResolver(newOrder),
  })

  const handleOrderCart: SubmitHandler<CartFormInput> = data => {
    console.log(data)
  }

  return (
    <CartContainer>
      <CartInfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCart)}>
          <CartFormContainer>
            <CartFormHeading>
              <MapPinLine size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </CartFormHeading>

            <CartFormAddress>
              <h1>Endereços</h1>
            </CartFormAddress>
          </CartFormContainer>
        </form>
      </CartInfoContainer>
      <CartInfoContainer>
        <h2>Cafés selecionados</h2>
      </CartInfoContainer>
    </CartContainer>
  )
}
