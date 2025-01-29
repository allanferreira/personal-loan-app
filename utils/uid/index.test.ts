import { describe, it, expect, vi } from "vitest"
import uid from "./index"

vi.mock("uuid", () => ({
  v4: vi.fn().mockReturnValue("valor-unico-fixo"),
}))

describe("uid", () => {
  it("should return the uid", () => {
    expect(uid()).toBe("valor-unico-fixo")
  })
})
