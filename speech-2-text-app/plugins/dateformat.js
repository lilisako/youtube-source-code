const dateformat = (date, format) => {
  const dateformat = require('dateformat')
  return dateformat(date, format)
}

export default ({}, inject) => {
  inject('dateformat', dateformat)
}
