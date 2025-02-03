import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import PersonalInfoStep from "./index"
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

describe("PersonalInfoStep", () => {
  beforeAll(() => {
    render(<PersonalInfoStep formik={mockFormik as FormikProps<FormValues>} />)
  })

  it("should render the name texts (labels, hints and errors) correctly", () => {
    expect(screen.getByText(/Qual é o seu nome?/i)).toBeDefined()
    expect(
      screen.getByText(/\(Opcional\) Adorariamos te conhecer/i)
    ).toBeDefined()
    expect(screen.getByText(/name error/i)).toBeDefined()
  })
  it("should render the income texts (labels, hints and errors) correctly", () => {
    expect(screen.getByText(/Qual é a sua renda mensal?/i)).toBeDefined()
    expect(
      screen.getByText(
        /\(Opcional\) Você não precisará comprovar renda neste momento/i
      )
    ).toBeDefined()
    expect(screen.getByText(/income error/i)).toBeDefined()
  })
  it("should render the date texts (labels, hints and errors) correctly", () => {
    expect(
      screen.getByText(/E qual é a sua data de nascimento?/i)
    ).toBeDefined()
    expect(screen.getByText(/birthday error/i)).toBeDefined()
  })
  it("should render the correct values in the name, income and birthday inputs", () => {
    expect(screen.getByDisplayValue(/R\$ 2.000,00/i)).toBeDefined()
    expect(screen.getByDisplayValue(/1990-02-03/i)).toBeDefined()
    expect(screen.getByDisplayValue(/Denis dos Santos/i)).toBeDefined()
  })
})
