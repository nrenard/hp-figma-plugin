import * as React from 'react'

import { EVENTS } from '../../../enums'
import { ILayer } from '../../../interfaces'

import Button from '../../components/Button'
import ColorBox from '../../components/ColorBox'
import TestBox from '../../components/TestBox'

import { Container, WrapperButtons, WrapperColor, WrapperName, WrapperTexts } from './styles'

const ContrastChecker: React.FC = () => {
  const [text, setText] = React.useState<ILayer>()
  const [layer, setLayer] = React.useState<ILayer>()

  const onGoToWebAIM = () => {
    window.open(
      `https://webaim.org/resources/contrastchecker/?fcolor=${text.color}&bcolor=${layer.color}`,
    )
  }

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: EVENTS.CLOSE } }, '*')
  }

  React.useEffect(() => {
    window.onmessage = (event) => {
      const data = event.data.pluginMessage

      if (data.type === EVENTS.CHANGE_SELECTION) {
        setLayer(data.layer)
        setText(data.text)
      }
    }
  }, [])

  const buttonCheckerIsAvailable = !!layer && !!text
  const undefinedValue = 'N/A'

  const renderLabelName = React.useCallback(
    (name?: string) => (
      <WrapperName>
        Name: <span>{name || undefinedValue}</span>
      </WrapperName>
    ),
    [],
  )

  const renderLabelColor = React.useCallback(
    (color?: string) => (
      <WrapperColor>
        Color:
        <span>
          <ColorBox color={color} />
          {color ? `#${color}` : undefinedValue}
        </span>
      </WrapperColor>
    ),
    [],
  )

  return (
    <Container>
      <h1>Contrast Checker</h1>

      <TestBox layer={layer} text={text} />

      <WrapperTexts>
        <div>
          <strong>Foreground</strong>

          <div>
            {renderLabelName(text?.name)}
            {renderLabelColor(text?.color)}
          </div>
        </div>

        <div>
          <strong>Background</strong>

          <div>
            {renderLabelName(layer?.name)}
            {renderLabelColor(layer?.color)}
          </div>
        </div>
      </WrapperTexts>

      <WrapperButtons>
        <Button onClick={onGoToWebAIM} disabled={!buttonCheckerIsAvailable}>
          Check Contrast on WebAIM
        </Button>

        <Button onClick={onCancel} schema='underline'>
          Cancel
        </Button>
      </WrapperButtons>
    </Container>
  )
}

export default ContrastChecker
