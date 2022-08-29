import styled, { css } from 'styled-components'

const mapTheme = {
  underline: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid;
  `,
}

export interface IContainer {
  schema?: 'underline' | 'default'
}

export const Container = styled.button<IContainer>`
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  ${({ schema }) => schema && mapTheme[schema]}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: initial;
    `}
`
