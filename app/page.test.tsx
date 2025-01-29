import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import Home from "./page"

vi.mock("@/components/Form/Button")
vi.mock("@/components/Misc/PersonalLoanLogo")

describe("Home", () => {
  beforeAll(() => {
    render(<Home />)
  })

  it("should render the correct title and description", () => {
    expect(
      screen.getByText(/Simule um empréstimo pessoal rapidamente/i)
    ).toBeDefined()
    expect(screen.getByText(/e sem burocracia/i)).toBeDefined()
  })

  it("should render the Personal Loan logo", () => {
    expect(screen.getByText(/Personal Loan/i)).toBeDefined()
  })

  it("should render the Button", () => {
    expect(screen.getByText(/Começar/i)).toBeDefined()
  })
})
