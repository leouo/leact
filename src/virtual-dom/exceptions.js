export const vNodeExceptions = vNode => {
  if (vNode.tagName === undefined && vNode.componentClass === undefined) {
    throw new Error('vNode object must have a property tagName or componentClass')
  }
}

export const elementExceptions = vNode => {
  if (vNode.tagName !== undefined && typeof vNode.tagName !== 'string') {
    throw new Error('tagName property must be a String')
  }
}

export const componentClassExceptions = vNode => {
  if (vNode.componentClass !== undefined && typeof vNode.componentClass !== 'function') {
    throw new Error('componentClass property must be a Class Component')
  }
}