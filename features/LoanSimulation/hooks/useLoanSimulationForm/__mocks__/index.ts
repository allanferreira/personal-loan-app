import React from "react"
import { vi } from "vitest"

const StepComponent = () => React.createElement("div", null, "Conteúdo")

export default function useLoanSimulationForm() {
  return {
    step: 0,
    steps: [
      {
        title: "Titulo",
        description: "Descrição",
        component: StepComponent,
        validationSchema: {
          validate: vi.fn().mockResolvedValue(true),
          validateSync: vi.fn().mockReturnValue(true),
          isValid: vi.fn().mockResolvedValue(true),
          isValidSync: vi.fn().mockReturnValue(true),
        },
      },
    ],
    formik: () => ({
      values: { name: "Cliente X", email: "clientex@mock.com" },
      handleChange: vi.fn(),
      handleSubmit: vi.fn(),
      setFieldValue: vi.fn(),
      errors: { email: "Campo obrigatório" },
      touched: { email: true },
      isSubmitting: false,
    }),
    StepComponent,
    nextStep: vi.fn(),
    prevStep: vi.fn(),
  }
}
