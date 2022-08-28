import styled from 'styled-components';

interface IContainer {
  background?: string;
  color?: string;
}

export const Container = styled.div<IContainer>`
  background-color: ${({ background, theme }) => background ? `#${background}` : theme.colors.grey};
  color: ${({ color, theme }) => color ? `#${color}` : theme.colors.black};
  border-radius: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px;
`;
