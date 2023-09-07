export const isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

export const isString = isType('String')

export const isArray = isType('Array')

export const isObject = isType('Object')

export const isFunction = isType('Function')

export const isNumber = isType('Number')

export const isPlainObject = function (obj) {
  let prototype
  return (
    isObject(obj) &&
    ((prototype = Object.getPrototypeOf(obj)),
    prototype === null || prototype === Object.getPrototypeOf({}))
  )
}

export const isPromise = function (obj) {
  return (
    !!obj && // 有实际含义的变量才执行方法,变量null, undefined和''空串都为false
    (typeof obj === 'object' || typeof obj == 'function') &&
    typeof obj.then === 'function'
  )
}
