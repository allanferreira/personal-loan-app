import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import GoalStep from "./index"
import { FormikProps } from "formik"
import FormValues from "../../types/FormValues"

vi.mock("@/components/Form/InputText")

const mockFormik: Partial<FormikProps<FormValues>> = {
  values: {
    loan: "R$ 5.000,00",
    installments: "10",
    name: "Denis dos Santos",
    birthday: "1990-02-03",
    income: "R$ 2.000,00",
  },
  errors: {
    loan: "loan error",
    installments: "installments error",
    name: "name error",
    birthday: "birthday error",
    income: "income error",
  },
  touched: {},
  handleChange: vi.fn(),
  handleBlur: vi.fn(),
  handleSubmit: vi.fn(),
}

describe("GoalStep", () => {
  beforeAll(() => {
    render(<GoalStep formik={mockFormik as FormikProps<FormValues>} />)
  })

  it("should render the loan texts (labels, hints and errors) correctly", () => {
    expect(
      screen.getByText(/Qual o valor em reais que você deseja?/i)
    ).toBeDefined()
    expect(
      screen.getByText(/O valor mínimo do empréstimo é de R\$ 5.000,00./i)
    ).toBeDefined()
    expect(screen.getByText(/loan error/i)).toBeDefined()
  })
  it("should render the installments texts (labels, hints and errors) correctly", () => {
    expect(
      screen.getByText(/Em quantos meses gostaria de pagar?/i)
    ).toBeDefined()
    expect(screen.getByText(/installments error/i)).toBeDefined()
  })
  it("should render the correct values in the loan and installments inputs", () => {
    expect(screen.getByDisplayValue(/R\$ 5.000,00/i)).toBeDefined()
    expect(screen.getByDisplayValue(/10/i)).toBeDefined()
  })
})
