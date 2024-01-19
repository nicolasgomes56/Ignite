import { styled } from 'styled-components'
import { fonts } from '../../styles/themes/fonts'

export const CartContainer = styled.main`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${fonts.titleXS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const FormsBase = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const CartFormContainer = styled(FormsBase)`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
    p {
      ${fonts.titleS}
    }
  }
`

export const CartFormHeading = styled.div`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const CartFormAddress = styled.div``
