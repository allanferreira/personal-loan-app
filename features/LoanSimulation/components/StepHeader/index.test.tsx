import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import StepHeader from "./index"

vi.mock("@/components/Misc/PersonalLoanLogo")

describe("StepHeader", () => {
  beforeAll(() => {
    render(
      <StepHeader
        step={0}
        totalSteps={2}
        title="Título da etapa"
        description="Descrição da etapa"
      />
    )
  })

  it("should render the texts correctly", () => {
    expect(screen.getByText(/Título da etapa/i)).toBeDefined()
    expect(screen.getByText(/Descrição da etapa/i)).toBeDefined()
  })
  it("should render the step and the total steps correctly", () => {
    expect(screen.getByText(/Etapa 1 de 2/i)).toBeDefined()
  })
})
