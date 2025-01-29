import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeAll } from "vitest"
import RootLayout from "./layout"

vi.mock("@/components/Layout/AppContainer")
vi.mock("@/features/LoanSimulation")

describe("RootLayout", () => {
  beforeAll(() => {
    render(<RootLayout>conteudo</RootLayout>)
  })

  it("should render with the content", () => {
    expect(screen.getByText(/conteudo/i)).toBeDefined()
  })
})
