export const getToggleOptions = (options, option, index, type) => {
  const { subcolors, ...color } = option
  const typeIndex = options.findIndex(opt => opt.type === type)

  const newColorsArray = [...options[typeIndex].options]
  const newColorOptionsArray = [...options]

  newColorsArray.splice(index, 1, color)
  newColorsArray.splice(index + 1, 0, ...subcolors)

  newColorOptionsArray.splice(typeIndex, 1, {
    ...options[typeIndex],
    options: newColorsArray
  })

  return newColorOptionsArray
}
