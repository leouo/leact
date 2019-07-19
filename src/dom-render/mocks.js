import createVNode from '../virtual-dom'

const simpleAppVTree = createVNode({
  tagName: 'p',
  textContent: 'foo'
})

const simpleAppVTreeWithAttributes = createVNode({
  tagName: 'p',
  id: 'foo-app',
  textContent: 'foo'
})

const simpleAppVTreeWithChildren = createVNode({
  tagName: 'ul',
  children: [
    createVNode({ tagName: 'li', textContent: 'Item 1' }),
    createVNode({ tagName: 'li', textContent: 'Item 2' }),
    createVNode({ tagName: 'li', textContent: 'Item 3' })
  ]
})

export {
  simpleAppVTree,
  simpleAppVTreeWithAttributes,
  simpleAppVTreeWithChildren
}