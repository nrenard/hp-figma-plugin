import { EVENTS, TYPES} from "../enums";
import { ILayer } from "../interfaces";

import { figmaRGBAToHex } from "../utils/rgbFigmaToRgbWEB";

figma.showUI(__html__);

figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;

  const layers = [];
  const texts = [];
  
  selection.forEach((item: any) => {
    const { color, opacity } = item?.fills[0]

    const data: ILayer = { 
      id: item.id, 
      name: item.name, 
      type: item.type, 
      color: figmaRGBAToHex({ colors: color, opacity })
    };

    if (data.type === TYPES.TEXT) texts.push(data);
    else layers.push(data)
  })

  const principalLayer = layers[0];
  const principalText = texts[0];


  figma.ui.postMessage({
    type: EVENTS.CHANGE_SELECTION,
    layer: principalLayer,
    text: principalText,
  });
})

figma.ui.onmessage = (msg) => {
  console.log('onmessage msg: ', msg);

  const createRectangle = () => {
    const nodes = [];
  
    for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
    }
  
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  
    // This is how figma responds back to the ui
    figma.ui.postMessage({
        type: 'create-rectangles',
        message: `Created ${msg.count} Rectangles`,
    });
  }

  if (msg.type === EVENTS.CREATE_RECTANGLES) createRectangle();

  figma.closePlugin();
};
