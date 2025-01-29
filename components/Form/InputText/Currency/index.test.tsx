import { render } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import InputTextCurrency from "./index"
import {
  NumberFormatOptions,
  useNumberFormat,
} from "@react-input/number-format"

vi.mock("@react-input/number-format", () => ({
  useNumberFormat: vi.fn(),
}))
vi.mock("..")

describe("InputTextCurrency", () => {
  it("should be possible to use masks", () => {
    const config: NumberFormatOptions = {
      format: "currency",
      currency: "BRL",
    }

    render(
      <InputTextCurrency
        label="Celular"
        value=""
        name="celular"
        config={config}
      />
    )

    expect(useNumberFormat).toHaveBeenCalledWith({
      locales: "pt-BR",
      ...config,
    })
  })
})
