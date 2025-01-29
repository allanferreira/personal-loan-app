import { cleanup, render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi, afterEach } from "vitest"
import Button from "./index"

describe("Button", () => {
  afterEach(() => {
    cleanup()
  })
  it("should render with the correct text", () => {
    render(<Button text="Enviar" />)
    expect(screen.getByText(/Enviar/i)).toBeDefined()
  })
  it("should render as a link when this type was passed to componentType parameter", () => {
    render(<Button text="Enviar" componentType="link" />)
    expect(screen.getByTestId("button-component-type-link")).toBeDefined()
    expect(screen.getByText(/Enviar/i)).toBeDefined()
  })
  it("should have the correct href when the button component was a link", () => {
    render(<Button text="Enviar" componentType="link" href="/teste" />)
    expect(
      screen.getByTestId("button-component-type-link").getAttribute("href")
    ).toBe("/teste")
  })
  it("should not have href attribute when the button component was not a link", () => {
    render(<Button text="Enviar" href="/teste" />)
    expect(
      screen.getByTestId("button-component-type-button").getAttributeNames()
    ).not.toContain("href")
  })
  it("should have the filled apperence by default when component as a button", () => {
    render(<Button text="Enviar" />)
    expect(
      screen.getByTestId("button-component-type-button").getAttribute("class")
    ).toContain("filled")
  })
  it("should have the filled apperence by default when component as a link", () => {
    render(<Button text="Enviar" componentType="link" />)
    expect(
      screen.getByTestId("button-component-type-link").getAttribute("class")
    ).toContain("filled")
  })
  it("should have to use unfilled apperence when component as a button", () => {
    render(<Button text="Enviar" apperence="unfilled" />)
    expect(
      screen.getByTestId("button-component-type-button").getAttribute("class")
    ).toContain("filled")
  })
  it("should have to use unfilled apperence when component as a link", () => {
    render(<Button text="Enviar" componentType="link" apperence="unfilled" />)
    expect(
      screen.getByTestId("button-component-type-link").getAttribute("class")
    ).toContain("filled")
  })
  it("should be possible to click the component as a button", () => {
    const handleClick = vi.fn()
    render(<Button text="Enviar" onClick={handleClick} />)

    const button = screen.getByTestId("button-component-type-button")
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  it("should be not possible to click the component as a link", () => {
    const handleClick = vi.fn()
    render(<Button text="Enviar" componentType="link" onClick={handleClick} />)

    const button = screen.getByTestId("button-component-type-link")
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
