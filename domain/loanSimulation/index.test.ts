import { describe, expect, it, vi } from "vitest"
import loanSimulation from "./index"
import date from "@/utils/date"

vi.mock("./calcAnnualPercentageRate", () => ({
  default: vi.fn().mockReturnValue(0.04),
}))

vi.mock("./calcMonthlyPayment", () => ({
  default: vi.fn().mockReturnValue(1018.42),
}))

describe("loanSimulation", () => {
  it("should calculate the monthly payment correctly", () => {
    const birthday = new Date(date().subtract({ years: 60 }).toISOString())
    const loan = 10000
    const installments = 10

    expect(loanSimulation({ birthday, loan, installments })).toStrictEqual({
      monthlyPayment: 1018.42,
      payedRate: 184.2,
      totalPayed: 10184.2,
    })
  })
})
