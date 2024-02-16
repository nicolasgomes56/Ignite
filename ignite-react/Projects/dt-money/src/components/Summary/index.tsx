import { ArrowCircleDown, ArrowCircleUp, CurrencyDollarSimple } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './style'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$500,00</strong>
      </SummaryCard>
      <SummaryCard className="highlight-background" variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollarSimple size={32} color="#fff" />
        </header>
        <strong>R$500,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
