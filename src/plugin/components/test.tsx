const { Image, AutoLayout, Text, Frame, Line } = figma.widget

const AutoLayoutElement: any = AutoLayout
const LineElement: any = Line
const ImageElement: any = Image
const SpanElement: any = Text

export const node = figma.createNodeFromJSXAsync(
  <AutoLayoutElement fill='#ccc' padding={20} direction='vertical'>
    <SpanElement fill='#fff' fontSize={30}>
      Title
    </SpanElement>
    <LineElement />
    <AutoLayoutElement width='500'>
      <ImageElement src='https://picsum.photos/200' width={200} height={200} />
    </AutoLayoutElement>
  </AutoLayoutElement>,
)
