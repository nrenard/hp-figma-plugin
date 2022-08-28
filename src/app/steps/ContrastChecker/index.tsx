import * as React from 'react';

import { EVENTS } from '../../../enums';
import { ILayer } from '../../../interfaces';

import Button from '../../components/Button';
import TestBox from '../../components/TestBox';

import { Container, WrapperButtons, WrapperTexts} from './styles';

const ContrastChecker: React.FC = () => {
  const [text, setText] = React.useState<ILayer>();
  const [layer, setLayer] = React.useState<ILayer>()

  const onGoToWebAIM = () => {
    window.open(`https://webaim.org/resources/contrastchecker/?fcolor=${text.color}&bcolor=${layer.color}`);
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const data = event.data.pluginMessage;

      if (data.type === EVENTS.CHANGE_SELECTION) {
        setLayer(data.layer);
        setText(data.text);
      }
    };
  }, []);


  const buttonCheckerIsAvailable = !!layer && !!text;

  return (
    <Container>
      <h1>Contrast Checker</h1>

      <TestBox layer={layer} text={text} />

      <WrapperTexts>
        <div>
          <strong>Foreground</strong>
          <div>
            <p>Name: <span>{text?.name || 'N/A'}</span></p>
            <p>Color: <span>{text?.color || 'N/A'}</span></p>
          </div>
        </div>

        <div>
          <strong>Background</strong>
          <div>
            <p>Name: <span>{layer?.name || 'N/A'}</span></p>
            <p>Color: <span>{layer?.color || 'N/A'}</span></p>
          </div>
        </div>
      </WrapperTexts>

      <WrapperButtons>
        <Button onClick={onGoToWebAIM} disabled={!buttonCheckerIsAvailable}>
          Check Contrast on WebAIM
        </Button>

        <Button onClick={onCancel} schema="underline">
          Cancel
        </Button>
      </WrapperButtons>
    </Container>
  )
}

export default ContrastChecker;
