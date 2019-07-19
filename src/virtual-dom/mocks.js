export const invalidVNode = {}

export const invalidComponentNode = {
  componentClass: '',
  props: {}
}

export const dumbComponentNode = {
  componentClass: () => null,
  props: {}
}

export const validComponentVirtualDOMNode = {
  componentClass: () => null,
  props: {},
  children: []
}

export const dumbElementNode = {
  tagName: 'p',
  contentText: 'John Doe'
}

export const invalidElementVirtualDOMNode = {
  tagName: null,
  contentText: 'John Doe',
  children: []
}