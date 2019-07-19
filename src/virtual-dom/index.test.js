import { expect } from 'chai'
import createVNode from '../virtual-dom/index'
import {
  invalidVNode,
  dumbElementNode,
  dumbComponentNode,
  invalidComponentNode,
  invalidElementVirtualDOMNode
} from '../virtual-dom/mocks'

describe('Virtual DOM', () => {
  it('Should throw an error if Virtual DOM Node is invalid', () => {
    expect(() => createVNode(invalidVNode)).to.throw(Error, 'vNode object must have a property tagName or componentClass')
  })

  describe('Component Node', () => {
    it('Should return a valid Component Virtual DOM Node', () => {
      expect(createVNode(dumbComponentNode)).to.have.all.keys(['componentClass', 'props', 'children'])
    })

    it('Should throw an error if componentClass is not a Class Component', () => {
      expect(() => createVNode(invalidComponentNode)).to.throw(Error, 'componentClass property must be a Class Component')
    })
  })

  describe('Element Node', () => {
    it('Should return a valid Element Virtual DOM Node', () => {
      expect(createVNode(dumbElementNode)).to.have.all.keys(['tagName', 'contentText', 'children'])
    })

    it('Should throw an error if tagName is not a string', () => {
      expect(() => createVNode(invalidElementVirtualDOMNode)).to.throw(Error, 'tagName property must be a String')
    })
  })
})