export const componentStateExceptions = newState => {
  if (newState === undefined) {
    throw new Error('new state must be provided')
  }
}