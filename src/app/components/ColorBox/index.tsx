import * as React from 'react'

import { Container, IContainer } from './styles'

type IProps = IContainer

const ColorBox: React.FC<IProps> = ({ color }) => <Container color={color} />

export default ColorBox
