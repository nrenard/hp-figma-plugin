import { node } from '../components/test'

export default async () => {
  figma.showUI(__html__)
  figma.ui.resize(350, 380)

  figma.currentPage.appendChild(await node)
}
