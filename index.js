const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value })
}

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign(object, { [key]: value })
}

const deleteFromObjectByKey = (object, key) => {
  return Object.assign({}, object, { [key]: {} } )
}

const destructivelyDeleteFromObjectByKey = (object, key) => {
  return delete object[key]
}