import {render, screen} from "@testing-library/react"
import {vi} from "vitest"
import "@testing-library/jest-dom"
import CounterContainer from "../components/CounterContainer"
import Counter from "../components/Counter"
import Buttons from "../components/Buttons"

describe('Counter', () => {
  describe('When rendering Display', () => {
    it('Should render Display', () => {
      render(<Counter count={0} />)
      const counter = screen.queryByTestId('counter')
      expect(counter).toBeInTheDocument()
      expect(counter).toHaveTextContent('0')
    })

    it('Should render the buttons', () => {
      const increment = vi.fn()
      const decrement = vi.fn()
      render(<Buttons increment={increment} decrement={decrement} />)
      const buttons = screen.queryAllByTestId('button')
      const button = buttons[0]
      console.log(button.getAttribute('value'))

    })

    
  })

  /*it('should', () => {
    const button1 = screen.getByTestId('button-1')
    expect(button1).toHaveTextContent('-5')
  })*/
})
