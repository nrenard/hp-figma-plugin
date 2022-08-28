import * as React from 'react';

import { Container, IContainer } from './styles';

interface IProps extends IContainer {
  onClick: (e?: React.MouseEvent) => any;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  const { children, onClick, type = 'button', schema, disabled } = props;

  return (
    <Container onClick={onClick} type={type} schema={schema} disabled={disabled}>
      {children}
    </Container>
  );
}

export default Button;
