import { EVENTS } from '../../enums'

export default () => {
  figma.ui.onmessage = (msg) => {
    if (msg.type === EVENTS.CLOSE) figma.closePlugin()
  }
}
