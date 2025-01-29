import { render } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import InputTextMask from "./index"
import { useMask } from "@react-input/mask"

vi.mock("@react-input/mask", () => ({
  useMask: vi.fn(),
}))
vi.mock("..")

describe("InputTextMask", () => {
  it("should be possible to use masks", () => {
    const config = {
      mask: "(__) ____-____",
      replacement: { _: /\d/ },
    }

    render(
      <InputTextMask label="Celular" value="" name="celular" config={config} />
    )

    expect(useMask).toHaveBeenCalledWith(config)
  })
})
