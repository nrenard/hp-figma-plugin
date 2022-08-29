interface IRgbFigmaToRgbWEB {
  colors: {
    r: number
    g: number
    b: number
  }
  opacity: number
}

const mutiplePer255 = (num: number) => Math.round(num * 255)

export const rgbaFigmaToRgbaWEB = (data: IRgbFigmaToRgbWEB) => {
  const { colors, opacity } = data
  return `${mutiplePer255(colors.r)},${mutiplePer255(colors.g)},${mutiplePer255(
    colors.b,
  )},${opacity}`
}

export function figmaRGBAToHex(data: IRgbFigmaToRgbWEB): string {
  const rgba = rgbaFigmaToRgbaWEB(data)

  const rgbaConcat = rgba.split(',').map((item) => Number.parseFloat(item))

  let hex = ''

  hex += ((1 << 24) + (rgbaConcat[0] << 16) + (rgbaConcat[1] << 8) + rgbaConcat[2])
    .toString(16)
    .slice(1)

  if (rgbaConcat[3] !== undefined) {
    const a = Math.round(rgbaConcat[3] * 255).toString(16)
    if (a.length === 1) {
      hex += `0${a}`
    } else if (a !== 'ff') hex += a
  }

  return hex
}
