export const appVTreeClassExceptions = ({ app }) => {
  if (typeof app !== 'function' && typeof app !== 'object') {
    throw new Error('app argument must be a Class Component or a Virtual DOM Tree')
  }

  if (typeof app === 'object') {
    if (!app.componentClass && !app.tagName) {
      throw new Error('app argument must be a valid Virtual DOM Tree')
    }
  }
}

export const rootNodeExceptions = ({ $root }) => {
  if (!($root instanceof HTMLElement)) {
    throw new Error('root element is not a valid DOM Element')
  }
}