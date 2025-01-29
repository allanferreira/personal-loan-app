import { describe, expect, it } from "vitest"
import calcMonthlyPayment from "./calcMonthlyPayment"

describe("calcMonthlyPayment", () => {
  it("should calculate the monthly payment correctly", () => {
    const loan = 10000
    const monthlyPercentageRate = 0.04
    const installments = 10

    expect(
      Number(
        calcMonthlyPayment(loan, monthlyPercentageRate, installments).toFixed(2)
      )
    ).toBe(1232.91)
  })
})
