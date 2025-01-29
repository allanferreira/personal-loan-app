import { baseURL } from "./"
import { describe, it, expect, vi } from "vitest"

vi.mock("axios")

describe("http", () => {
  it("should have the correct baseURL", () => {
    expect(baseURL).toBe("/api")
  })
})
