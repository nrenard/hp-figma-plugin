import * as React from 'react'

import { ILayer } from '../../../interfaces'

import { Container } from './styles'

interface IProps {
  text?: ILayer
  layer?: ILayer
}

const TestBox: React.FC<IProps> = (props) => {
  const { text, layer } = props

  return (
    <Container background={layer?.color} color={text?.color}>
      <p>{text?.text || 'Please make a selection'}</p>
    </Container>
  )
}

export default TestBox
