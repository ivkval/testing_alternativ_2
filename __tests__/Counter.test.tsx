import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Counter from "../components/Counter"
import Display from "../components/Display"

describe('Counter', () => {
  describe('When rendering Display', () => {
    it('Should render Displey', () => {
      render(<Display count={0} />)
      const display = screen.queryByTestId('display')
      expect(display).toBeInTheDocument()
      expect(display).toHaveTextContent('0')
    })
    
  })

  /*it('should', () => {
    const button1 = screen.getByTestId('button-1')
    expect(button1).toHaveTextContent('-5')
  })*/
})
