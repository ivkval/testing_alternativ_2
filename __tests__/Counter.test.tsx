import {fireEvent, render, screen} from "@testing-library/react"
import {vi} from "vitest"
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'
import CounterContainer from "../components/CounterContainer"
import Counter from "../components/Counter"
import Buttons from "../components/Buttons"

describe('Counter', () => {
  
  const increment = vi.fn()
  const decrement = vi.fn()
  

  describe('When rendering Display', () => {
    it('Should render Display-component that shows the counter', () => {
      render(<Counter count={0} />)
      const counter: HTMLElement = screen.queryByTestId('counter')!
      expect(counter).toBeInTheDocument()
      expect(counter).toHaveTextContent('0')
    })

    it('Should render the buttons', () => {
      render(<Buttons increment={increment} decrement={decrement} />)
      const buttons = screen.queryAllByTestId('button')
      if (buttons.length) {
        const [buttonSubtractFive, buttonSubtractOne, buttonAddOne, buttonAddFive] = buttons

        // The button that subtracts five
        expect(buttonSubtractFive).toBeInTheDocument()
        expect(Number(buttonSubtractFive.getAttribute('value'))).toBe(5)
        expect(buttonSubtractFive).toHaveTextContent('-5')

        // The button that subtracts 1
        expect(buttonSubtractOne).toBeInTheDocument()
        expect(Number(buttonSubtractOne.getAttribute('value'))).toBe(1)
        expect(buttonSubtractOne).toHaveTextContent('-1')

        // The button that adds 1
        expect(buttonAddOne).toBeInTheDocument()
        expect(Number(buttonAddOne.getAttribute('value'))).toBe(1)
        expect(buttonAddOne).toHaveTextContent('1')

        // The button that adds 5
        expect(buttonAddFive).toBeInTheDocument()
        expect(Number(buttonAddFive.getAttribute('value'))).toBe(5)
        expect(buttonAddFive).toHaveTextContent('5')
      }
    })
  })

  describe('Should change the counter in Display-component when a button is clicked', () => {
    
    it('should change the counter from 0 to 1', async() => {
      render(<CounterContainer />)
      const counter: HTMLElement = screen.queryByTestId('counter')!
      const buttonAddOne: HTMLButtonElement = screen.queryByText('+1')!
      await userEvent.click(buttonAddOne)
      expect(counter).toHaveTextContent('1')
    })

    it('should change the counter from 0 to 5', async() => {
      render(<CounterContainer />)
      const counter: HTMLElement = screen.queryByTestId('counter')!
      const buttonAddFive: HTMLButtonElement = screen.queryByText('+5')!
      await userEvent.click(buttonAddFive)
      expect(counter).toHaveTextContent('5')
    })

    it('should change the counter from 0 to -1', async() => {
      render(<CounterContainer />)
      const counter: HTMLElement = screen.queryByTestId('counter')!
      const buttonSubtractOne: HTMLButtonElement = screen.queryByText('-1')!
      await userEvent.click(buttonSubtractOne)
      expect(counter).toHaveTextContent('-1')
    })

    it('should change the counter from 0 to -5', async() => {
      render(<CounterContainer />)
      const counter: HTMLElement = screen.queryByTestId('counter')!
      const buttonSubtractFive: HTMLButtonElement = screen.queryByText('-5')!
      await userEvent.click(buttonSubtractFive)
      expect(counter).toHaveTextContent('-5')
    })

    it('should start the counter at 0, then as -1, add + 5 with the result being 4', async() => {
      render(<CounterContainer />)
      const counter: HTMLElement = screen.queryByTestId('counter')!
      const buttonSubtractOne: HTMLButtonElement = screen.queryByText('-1')!
      const buttonAddFive: HTMLButtonElement = screen.queryByText('+5')!
      await userEvent.click(buttonSubtractOne)
      await userEvent.click(buttonAddFive)
      expect(counter).toHaveTextContent('4')
    })
  })
})
