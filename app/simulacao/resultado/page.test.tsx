import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import LoanSimulationResult from "./page"

vi.mock("@/components/Misc/PersonalLoanLogo")
vi.mock("@/features/LoanSimulation")

describe("LoanSimulation", () => {
  beforeAll(() => {
    render(<LoanSimulationResult />)
  })

  it("should render the headling with correct text and client name", () => {
    expect(screen.getByText(/Olá/i)).toBeDefined()
    expect(screen.getByText(/Cliente X!/i)).toBeDefined()
    expect(
      screen.getByText(/Encontramos uma proposta para você/i)
    ).toBeDefined()
  })
  it("should render the description with correct text and client income", () => {
    expect(
      screen.getByText(/Considerando as informações e renda mensal de/i)
    ).toBeDefined()
    expect(screen.getByText(/R\$ 20.000,00/i)).toBeDefined()
    expect(screen.getByText(/, temos o seguinte cenário:/i)).toBeDefined()
  })
  it("should render the monthly payment correctly", () => {
    expect(screen.getByText(/Parcelas mensais/i)).toBeDefined()
    expect(screen.getByText(/R\$ 506,90/i)).toBeDefined()
  })
  it("should render the payed rate correctly", () => {
    expect(screen.getByText(/Total de juros pagos/i)).toBeDefined()
    expect(screen.getByText(/R\$ 69,01/i)).toBeDefined()
  })
  it("should render the total payed correctly", () => {
    expect(screen.getByText(/Valor total a ser pago/i)).toBeDefined()
    expect(screen.getByText(/R\$ 5.069,01/i)).toBeDefined()
  })
})
