export const getColorSelection = (type, color, colorIndex, selection) => {
  const isGradient = type === 'gradient'
  const isFill = type === 'fill'
  let gradients
  if (isGradient) {
    gradients = selection || []
    gradients.splice(Number(colorIndex), 1, color.hex)
  }
  // eslint-disable-next-line prettier/prettier
  return isGradient ? gradients : isFill ? [color] : [color.hex]
}
