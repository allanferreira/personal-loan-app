import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import LoanSimulation from "./page"

vi.mock("@/components/Misc/PersonalLoanLogo")
vi.mock("@/features/LoanSimulation")

describe("LoanSimulation", () => {
  beforeAll(() => {
    render(<LoanSimulation />)
  })

  it("should render the StepHeader with correct steps and text", () => {
    expect(screen.getByText(/Etapa 1 de 1: Titulo/i)).toBeDefined()
  })
  it("should render the StepComponent", () => {
    expect(screen.getByText(/Conteúdo/i)).toBeDefined()
  })
  it("should render the StepFooter", () => {
    expect(screen.getByText(/Continuar/i)).toBeDefined()
  })
})
