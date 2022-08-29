import styled from 'styled-components'

import { simpleFlex, simpleTextTreeDots } from '../../styles/tools'

interface IContainer {
  background?: string
  color?: string
}

export const Container = styled.div<IContainer>`
  border-radius: 5px;
  height: 50px;
  ${simpleFlex}
  justify-content: center;

  background-color: ${({ background, theme }) =>
    background ? `#${background}` : theme.colors.grey};
  color: ${({ color, theme }) => (color ? `#${color}` : theme.colors.black)};

  p {
    padding: 10px;
    ${simpleTextTreeDots}
  }
`
