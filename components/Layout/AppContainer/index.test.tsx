import { render, screen } from "@testing-library/react"
import { describe, it, expect, beforeAll } from "vitest"
import AppContainer from "./index"

describe("AppContainer", () => {
  beforeAll(() => {
    render(<AppContainer>conteudo</AppContainer>)
  })

  it("should render with the content", () => {
    expect(screen.getByText(/conteudo/i)).toBeDefined()
  })
})
