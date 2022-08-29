import styled from 'styled-components'

export interface IContainer {
  color?: string
}

export const Container = styled.div<IContainer>`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: ${({ color, theme }) => (color ? `#${color}` : theme.colors.grey)};
`
