import 'jest-dom/extend-expect'
import { expect as chaiExpect } from 'chai'
import {
  renderApp,
  createDOMText,
  createDOMElement,
  setDOMElementProperties
} from './index'
import {
  simpleAppVTree,
  simpleAppVTreeWithAttributes,
  simpleAppVTreeWithChildren
} from './mocks'

describe('DOM Render', () => {
  describe('Render Virtual DOM to DOM', () => {
    it('Should render an Virtual DOM tree', () => {
      const $rootMock = document.createElement('div')

      renderApp(simpleAppVTree, $rootMock)
      expect($rootMock).toContainHTML('<div><p>foo</p></div>')
    })

    it('Should render an Virtual DOM tree with attributes', () => {
      const $rootMock = document.createElement('div')

      renderApp(simpleAppVTreeWithAttributes, $rootMock)
      expect($rootMock).toContainHTML('<div><p id="foo-app">foo</p></div>')
    })

    it('Should render an Virtual DOM tree with children', () => {
      const $rootMock = document.createElement('div')

      renderApp(simpleAppVTreeWithChildren, $rootMock)
      expect($rootMock).toContainHTML('<div><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></div>')
    })
  })

  describe('Create DOM Nodes', () => {
    it('Should create DOM Text Node', () => {
      const $DOMTextNode = createDOMText('John Doe')

      chaiExpect($DOMTextNode.textContent).to.equal('John Doe')
    })

    it('Should create DOM Element Node', () => {
      const $rootMock = document.body
      const $DOMElementNode = createDOMElement('div')

      $rootMock.appendChild($DOMElementNode )

      expect($DOMElementNode).toBeInTheDocument()
    })

    it('Should add attributes to a DOM Element', () => {
      const $DOMElementNode = createDOMElement('div')
      const DOMElementAttributes = {
        id: 'foo-div',
        className: 'bar-style'
      }

      setDOMElementProperties($DOMElementNode, DOMElementAttributes)

      expect($DOMElementNode).toHaveAttribute('id', 'foo-div')
      expect($DOMElementNode).toHaveAttribute('class', 'bar-style')
    })

    test.todo('Should add a Virtual DOM children to a DOM Element')
  })
})