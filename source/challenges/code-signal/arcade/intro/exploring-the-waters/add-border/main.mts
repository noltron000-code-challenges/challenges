const addBorder = (picture: Array<string>) => {
  let framedPicture = [...picture]

  for (let index = 0; index < picture.length; index ++) {
    framedPicture[index] = `*${framedPicture[index]}*`
  }

  const horizontalRule = '*'.repeat(framedPicture.at(0)?.length ?? 0)
  framedPicture.unshift(horizontalRule)
  framedPicture.push(horizontalRule)

  return framedPicture
}

export default addBorder
