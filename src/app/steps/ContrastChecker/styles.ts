import styled from 'styled-components'

import { simpleFlex, simpleTextTreeDots } from '../../styles/tools'

export const Container = styled.div``

export const WrapperTexts = styled.div`
  margin-top: 10px;

  p {
    ${simpleFlex}

    span {
      ${simpleTextTreeDots}
      color: ${({ theme }) => theme.colors.greyMedium};
      margin-left: 10px;

      div {
        margin-right: 10px;
      }
    }
  }
`

export const WrapperButtons = styled.div`
  ${simpleFlex}
  justify-content: center;
  margin-top: 20px;

  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`

export const WrapperName = styled.p`
  * {
    ${simpleTextTreeDots}
  }
`

export const WrapperColor = styled.p`
  span {
    ${simpleFlex}
  }
`
