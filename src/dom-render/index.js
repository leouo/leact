import createVNode from '../virtual-dom/index'
import errorHandler from '../utils/error-handler'
import { appVTreeClassExceptions, rootNodeExceptions } from './exceptions'

const renderApp = (app, $root) => {
  errorHandler({ app, $root })(appVTreeClassExceptions, rootNodeExceptions)

  const vTree = (typeof app === 'function') ? createVNode({ componentClass: app }) : app
  const $DOMTree = renderVNode(vTree)

  $root.appendChild($DOMTree)
}

const renderVNode = vNode => {
  const {
    tagName,
    componentClass,
    props,
    children,
    ...attributes
  } = vNode

  let $DOMElement

  if (componentClass) {
    const component = new componentClass(props)
    const vTree = component.render()

    $DOMElement = renderVNode(vTree)

    component.DOMNode = $DOMElement
  } else {
    $DOMElement = createDOMElement(tagName, attributes)

    appendDOMChildren($DOMElement, children)
  }

  return $DOMElement
};

const renderComponent = component => {
  const oldDOMNode = component.DOMNode
  const componentVNode = component.render()

  component.DOMNode = renderVNode(componentVNode)

  oldDOMNode.parentNode.replaceChild(component.DOMNode, oldDOMNode)
};

const createDOMText = text => document.createTextNode(text)

const createDOMElement = (elementName, attributes) => {
  const $DOMElement = document.createElement(elementName)

  setDOMElementProperties($DOMElement, attributes)

  return $DOMElement
};

const setDOMElementProperties = ($DOMElement, properties) => {
  for (let property in properties) {
    $DOMElement[property] = properties[property]
  }
};

const appendDOMChildren = ($DOMElement, children) => {
  children.forEach(childVNode => {
    const $DOMChildElement = renderVNode(childVNode)

    $DOMElement.appendChild($DOMChildElement)
  });
};

export {
  appendDOMChildren,
  createDOMText,
  createDOMElement,
  setDOMElementProperties,
  renderApp,
  renderVNode,
  renderComponent
}