import { renderComponent } from '../dom-render/index'
import errorHandler from '../utils/error-handler'
import { componentStateExceptions } from './exceptions'

class Component {
  constructor(props, state) {
    this.props = props
    this.state = {}
  }

  updateComponent = (componentInstance) => renderComponent(componentInstance)

  setState (stateUpdater) {
    const oldState = this.state
    const newState = stateUpdater(this.state)

    errorHandler(newState)(componentStateExceptions)

    this.state = {
      ...oldState,
      ...newState
    }

    this.updateComponent(this)
  }
}

export default Component