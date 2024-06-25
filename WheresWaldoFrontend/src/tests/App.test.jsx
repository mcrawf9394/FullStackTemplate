// sum.test.js
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../components/App'
describe("", () => {
  it("", () => {
    render(<App/>)
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i)
  })
})