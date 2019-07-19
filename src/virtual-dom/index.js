import errorHandler from '../utils/error-handler'
import {
  vNodeExceptions,
  componentClassExceptions,
  elementExceptions
} from './exceptions'

const createVNode = vNode => {
  const children = vNode.children || []

  errorHandler(vNode)(vNodeExceptions, componentClassExceptions, elementExceptions)

  return {
    ...vNode,
    children
  }
}

export default createVNode