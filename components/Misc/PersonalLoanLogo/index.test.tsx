import { cleanup, render, screen } from "@testing-library/react"
import { describe, it, expect, afterEach, beforeEach } from "vitest"
import PersonalLoanLogo from "./index"

describe("PersonalLoanLogo general", () => {
  beforeEach(() => {
    render(<PersonalLoanLogo />)
  })
  afterEach(() => {
    cleanup()
  })

  it("should have a text with the branding name", () => {
    expect(screen.getByText(/Personal/i)).toBeDefined()
    expect(screen.getByText(/Loan/i)).toBeDefined()
  })
  it("should have a branding image using the public path", () => {
    expect(screen.getByRole("img").getAttribute("src")?.charAt(0)).toBe("/")
  })
  it("should have a branding image with the correct alternative text", () => {
    expect(screen.getByRole("img").getAttribute("alt")).toBe("Personal Loan")
  })
})

describe("PersonalLoanLogo parameters", () => {
  afterEach(() => {
    cleanup()
  })
  it("should render with medium size without parameters", () => {
    render(<PersonalLoanLogo />)
    expect(
      screen.getByTestId("personal-loan-logo").getAttribute("class")
    ).toContain("md")
  })
  it("should render with the medium size", () => {
    render(<PersonalLoanLogo size="md" />)
    expect(
      screen.getByTestId("personal-loan-logo").getAttribute("class")
    ).toContain("md")
  })
  it("should render with the large size", () => {
    render(<PersonalLoanLogo size="lg" />)
    expect(
      screen.getByTestId("personal-loan-logo").getAttribute("class")
    ).toContain("lg")
  })
})
