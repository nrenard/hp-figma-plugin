import { EVENTS, TYPES } from '../../enums'
import { ILayer } from '../../interfaces'

import { figmaRGBAToHex } from '../utils/rgbFigmaToRgbWEB'

figma.showUI(__html__)
figma.ui.resize(350, 380)

figma.on('selectionchange', () => {
  const { selection } = figma.currentPage

  const layers = []
  const texts = []

  selection.forEach((item: any) => {
    const { color, opacity } = item.fills[0]

    const data: ILayer = {
      id: item.id,
      name: item.name,
      text: item.characters,
      type: item.type,
      color: figmaRGBAToHex({ colors: color, opacity }),
    }

    if (data.type === TYPES.TEXT) texts.push(data)
    else layers.push(data)
  })

  const principalLayer = layers[0]
  const principalText = texts[0]

  figma.ui.postMessage({
    type: EVENTS.CHANGE_SELECTION,
    layer: principalLayer,
    text: principalText,
  })
})

figma.ui.onmessage = (msg) => {
  if (msg.type === EVENTS.CLOSE) figma.closePlugin()
}
