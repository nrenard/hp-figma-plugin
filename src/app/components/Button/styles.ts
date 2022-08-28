import styled, { css } from 'styled-components';

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
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  ${({ schema }) => schema && mapTheme[schema]}
`;
