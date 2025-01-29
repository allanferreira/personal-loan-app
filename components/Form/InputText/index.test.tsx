import { cleanup, render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi, afterEach } from "vitest"
import InputText from "./index"
import { createRef } from "react"

describe("InputText", () => {
  afterEach(() => {
    cleanup()
  })
  it("should render with the correct required props (name, value, label)", () => {
    render(<InputText name="email" value="cliente@mock.com" label="Email" />)
    const input = screen.getByTestId("input-text-input")

    expect(screen.getByText(/Email/i)).toBeDefined()
    expect(input.getAttribute("name")).toBe("email")
    expect(input.getAttribute("value")).toBe("cliente@mock.com")
  })
  it("should be possible to change the input type", () => {
    render(<InputText type="date" name="date" value="" label="Data" />)
    const dateInput = screen.getByTestId("input-text-input")
    expect(dateInput.getAttribute("type")).toBe("date")

    cleanup()

    render(<InputText type="number" name="date" value="" label="Data" />)
    const numberInput = screen.getByTestId("input-text-input")
    expect(numberInput.getAttribute("type")).toBe("number")
  })
  it("should be possible to see the hint when it was added", () => {
    render(
      <InputText
        name="email"
        value="cliente@mock.com"
        label="Email"
        hint="Use apenas emails válidos"
      />
    )
    expect(screen.getByText(/Use apenas emails válidos/i)).toBeDefined()
  })
  it("should be possible to see the error with the correctly visual when it was added", () => {
    render(
      <InputText
        name="email"
        value="cliente@mock.com"
        label="Email"
        error="Campo obrigatório"
      />
    )
    expect(screen.getByTestId("input-text").getAttribute("class")).toContain(
      "error"
    )
    expect(screen.getByText(/Campo obrigatório/i)).toBeDefined()
  })
  it("should be possible to see only the error when it was passed an error and hint at the same time", () => {
    render(
      <InputText
        name="email"
        value="cliente@mock.com"
        label="Email"
        hint="Use apenas emails válidos"
        error="Campo obrigatório"
      />
    )
    expect(screen.getByText(/Campo obrigatório/i)).toBeDefined()
    expect(screen.queryByText(/Use apenas emails válidos/i)).toBeNull()
  })
  it("should have the same id for input and htmlFor for label when uid is provided", () => {
    render(
      <InputText
        name="email"
        value="cliente@mock.com"
        label="Email"
        uid="valor-unico"
      />
    )
    const input = screen.getByTestId("input-text-input")
    const label = screen.getByTestId("input-text-label")
    expect(input.getAttribute("id")).toBe(label.getAttribute("for"))
  })
  it("should be possible to trigger onChange event", () => {
    const handleChange = vi.fn()
    render(
      <InputText
        name="email"
        value="cliente@mock.com"
        label="Email"
        uid="a"
        onChange={handleChange}
      />
    )
    const input = screen.getByTestId("input-text-input")
    fireEvent.change(input, { target: { value: "clientex@novomock.com" } })
    expect(handleChange).toBeCalled()
  })
  it("should be possible to forward the ref to the input element", () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <InputText
        name="email"
        value="cliente@mock.com"
        label="Email"
        ref={ref}
      />
    )
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
