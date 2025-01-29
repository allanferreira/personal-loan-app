import { describe, it, expect } from "vitest"
import calcAnnualPercentageRate from "./calcAnnualPercentageRate"

describe("calcAnnualPercentageRate", () => {
  it("should return 5% of rate for age 25 or younger", () => {
    expect(calcAnnualPercentageRate(25)).toBe(0.05)
    expect(calcAnnualPercentageRate(20)).toBe(0.05)
  })

  it("should return 3% of rate  for age between 26 and 40", () => {
    expect(calcAnnualPercentageRate(30)).toBe(0.03)
    expect(calcAnnualPercentageRate(40)).toBe(0.03)
  })

  it("should return 2% of rate  for age between 41 and 60", () => {
    expect(calcAnnualPercentageRate(50)).toBe(0.02)
    expect(calcAnnualPercentageRate(60)).toBe(0.02)
  })

  it("should return 4% of rate  for age above 60", () => {
    expect(calcAnnualPercentageRate(61)).toBe(0.04)
    expect(calcAnnualPercentageRate(100)).toBe(0.04)
  })
})
