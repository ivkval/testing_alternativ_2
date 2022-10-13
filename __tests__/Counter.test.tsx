import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Container from "../components/Container"
import Counter from "../components/Counter"

describe('checks that the counter and buttons has rendered correctly', () => {
  render(<Container />)
  it('should check that Counter starts with 0', () => {
    
  
    const counter = document.querySelector('h2')
    expect(counter).toHaveTextContent('0')

    const buttons = document.querySelectorAll("button")
    expect(buttons[0].value).toBe('5')
  })
  
  it('should', () => {

    const buttons = document.querySelectorAll("button")
    expect(buttons[0].value).toBe('5')
  })
})
