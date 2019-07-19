import { expect } from 'chai'
import Component from './index'

describe('Component Class', () => {
  it('Should be a function', () => {
    expect(Component).to.be.a('function');
  })

  describe('SetState Method', () => {
    it('Should set the state property', () => {
      const DummyComponent = new Component()

      DummyComponent.updateComponent = jest.fn()
      DummyComponent.setState((prevState) => ({ foo: 'foo' }))

      expect(DummyComponent.state).to.be.deep.equal({ foo: 'foo' })
    })

    it('Should merge old state with new state', () => {
      const DummyComponentWithState = new Component()

      DummyComponentWithState.updateComponent = jest.fn()
      DummyComponentWithState.setState((prevState) => ({ foo: 'foo' }))
      DummyComponentWithState.setState((prevState) => ({ bar: 'bar' }))

      expect(DummyComponentWithState.state).to.be.deep.equal({ foo: 'foo', bar: 'bar' })
    })

    it('Should throw an error if new state is not defined', () => {
      const DummyComponent = new Component()

      DummyComponent.updateComponent = jest.fn()

      expect(() => DummyComponent.setState((prevState) => undefined)).to.throw(Error, 'new state must be provided')
    })
  })
})