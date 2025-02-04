import { describe, expect, it } from "vitest"
import { unformat, format } from "./index"

describe("currency: unformat", () => {
  it("should return a number when a currency value is passed", () => {
    expect(unformat("R$ 20.000,00", "pt-BR")).toBe(20000)
    expect(unformat("$ 20,000.00", "en")).toBe(20000)
  })
})
describe("currency: format", () => {
  it("should return a currency value when a number is passed", () => {
    expect(format(20000)).toBe("R$ 20.000,00")
    expect(format(20000, { locales: "en", currency: "USD" })).toBe("$20,000.00")
  })
})
