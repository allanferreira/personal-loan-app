import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect, vi, afterEach } from "vitest"
import StepFooter from "./index"

describe("StepFooter", () => {
  afterEach(() => {
    cleanup()
  })
  it("should render the next button with the correct text", () => {
    render(<StepFooter step={0} totalSteps={0} onSubmit={vi.fn()} />)
    expect(screen.getByText(/Continuar/i)).toBeDefined()
  })
  it("should not render the prev button when it was the first step", () => {
    render(<StepFooter step={0} totalSteps={0} onSubmit={vi.fn()} />)
    expect(screen.queryByText(/Voltar/i)).toBeNull()
  })
  it("should render the prev button when it was not the first step", () => {
    render(<StepFooter step={1} totalSteps={2} onSubmit={vi.fn()} />)
    expect(screen.getByText(/Voltar/i)).toBeDefined()
  })
  it("should have the button type 'submit' in next button when it was the last step", () => {
    render(<StepFooter step={1} totalSteps={2} onSubmit={vi.fn()} />)
    expect(screen.getByText(/Continuar/i).getAttribute("type")).toBe("submit")
  })
  it("should have the button type 'button' in next button when it was not the last step", () => {
    render(<StepFooter step={0} totalSteps={2} onSubmit={vi.fn()} />)
    expect(screen.getByText(/Continuar/i).getAttribute("type")).toBe("button")
  })
  it("should be possible to trigger the prevStep behaviour when prev button was clicked", () => {
    const handleClick = vi.fn()
    render(
      <StepFooter
        step={1}
        totalSteps={2}
        onSubmit={vi.fn()}
        prevStep={handleClick}
      />
    )
    const prevButton = screen.getByText(/Voltar/i)
    fireEvent.click(prevButton)

    expect(handleClick).toBeCalled()
  })
  it("should be possible to trigger the nextStep behaviour when next button was clicked and if it is not the last step", () => {
    const handleClick = vi.fn()
    render(
      <StepFooter
        step={0}
        totalSteps={2}
        onSubmit={vi.fn()}
        nextStep={handleClick}
      />
    )
    const nextButton = screen.getByText(/Continuar/i)
    fireEvent.click(nextButton)

    expect(handleClick).toBeCalled()
  })
  it("should be possible to trigger the onSubmit behaviour when next button was clicked and if it is the last step", () => {
    const handleClick = vi.fn()
    render(<StepFooter step={1} totalSteps={2} onSubmit={handleClick} />)
    const nextButton = screen.getByText(/Continuar/i)
    fireEvent.click(nextButton)

    expect(handleClick).toBeCalled()
  })
})
