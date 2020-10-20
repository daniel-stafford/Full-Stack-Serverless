export function isEmpty(obj: object) {
  return Object.keys(obj).length === 0
}

export function makeArray(obj: any): Array<any> {
  return Object.keys(obj).reduce((arr, key) => arr.concat(obj[key]), [])
}
