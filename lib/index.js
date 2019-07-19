'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const errorHandler = payload => {
  return (...exceptionCheckers) => {
    exceptionCheckers.map(exceptionChecker => {
      exceptionChecker(payload);
    });
  };
};

const vNodeExceptions = vNode => {
  if (vNode.tagName === undefined && vNode.componentClass === undefined) {
    throw new Error('vNode object must have a property tagName or componentClass');
  }
};
const elementExceptions = vNode => {
  if (vNode.tagName !== undefined && typeof vNode.tagName !== 'string') {
    throw new Error('tagName property must be a String');
  }
};
const componentClassExceptions = vNode => {
  if (vNode.componentClass !== undefined && typeof vNode.componentClass !== 'function') {
    throw new Error('componentClass property must be a Class Component');
  }
};

const createVNode = vNode => {
  const children = vNode.children || [];
  errorHandler(vNode)(vNodeExceptions, componentClassExceptions, elementExceptions);
  return { ...vNode,
    children
  };
};

const appVTreeClassExceptions = ({
  app
}) => {
  if (typeof app !== 'function' && typeof app !== 'object') {
    throw new Error('app argument must be a Class Component or a Virtual DOM Tree');
  }

  if (typeof app === 'object') {
    if (!app.componentClass && !app.tagName) {
      throw new Error('app argument must be a valid Virtual DOM Tree');
    }
  }
};
const rootNodeExceptions = ({
  $root
}) => {
  if (!($root instanceof HTMLElement)) {
    throw new Error('root element is not a valid DOM Element');
  }
};

const renderApp = (app, $root) => {
  errorHandler({
    app,
    $root
  })(appVTreeClassExceptions, rootNodeExceptions);
  const vTree = typeof app === 'function' ? createVNode({
    componentClass: app
  }) : app;
  const $DOMTree = renderVNode(vTree);
  $root.appendChild($DOMTree);
};

const renderVNode = vNode => {
  const {
    tagName,
    componentClass,
    props,
    children,
    ...attributes
  } = vNode;
  let $DOMElement;

  if (componentClass) {
    const component = new componentClass(props);
    const vTree = component.render();
    $DOMElement = renderVNode(vTree);
    component.DOMNode = $DOMElement;
  } else {
    $DOMElement = createDOMElement(tagName, attributes);
    appendDOMChildren($DOMElement, children);
  }

  return $DOMElement;
};

const renderComponent = component => {
  const oldDOMNode = component.DOMNode;
  const componentVNode = component.render();
  component.DOMNode = renderVNode(componentVNode);
  oldDOMNode.parentNode.replaceChild(component.DOMNode, oldDOMNode);
};

const createDOMElement = (elementName, attributes) => {
  const $DOMElement = document.createElement(elementName);
  setDOMElementProperties($DOMElement, attributes);
  return $DOMElement;
};

const setDOMElementProperties = ($DOMElement, properties) => {
  for (let property in properties) {
    $DOMElement[property] = properties[property];
  }
};

const appendDOMChildren = ($DOMElement, children) => {
  children.forEach(childVNode => {
    const $DOMChildElement = renderVNode(childVNode);
    $DOMElement.appendChild($DOMChildElement);
  });
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const componentStateExceptions = newState => {
  if (newState === undefined) {
    throw new Error('new state must be provided');
  }
};

class Component {
  constructor(props, state) {
    _defineProperty(this, "updateComponent", componentInstance => renderComponent(componentInstance));

    this.props = props;
    this.state = {};
  }

  setState(stateUpdater) {
    const oldState = this.state;
    const newState = stateUpdater(this.state);
    errorHandler(newState)(componentStateExceptions);
    this.state = { ...oldState,
      ...newState
    };
    this.updateComponent(this);
  }

}

var index = {
  render: renderApp
};

exports.Component = Component;
exports.createVNode = createVNode;
exports.default = index;
