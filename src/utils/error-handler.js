const errorHandler = payload => {
  return (...exceptionCheckers) => {
    exceptionCheckers.map(exceptionChecker => {
      exceptionChecker(payload)
    })
  }
}

export default errorHandler