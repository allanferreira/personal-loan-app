import { describe, expect, it } from "vitest"
import date from "./index"

describe("date: subtract", () => {
  it("should be possible to subtract a year", () => {
    const input = new Date("2000-10-10")
    const output = new Date("1993-10-10")

    expect(date(input).subtract({ years: 7 }).toISOString()).toBe(
      output.toISOString()
    )
  })
  it("should be possible to subtract a month", () => {
    const input = new Date("2000-10-10")
    const output = new Date("2000-05-10")

    expect(date(input).subtract({ months: 5 }).toISOString()).toBe(
      output.toISOString()
    )
  })
  it("should be possible to subtract a day", () => {
    const input = new Date("2000-10-10")
    const output = new Date("2000-09-30")

    expect(date(input).subtract({ days: 10 }).toISOString()).toBe(
      output.toISOString()
    )
  })
})
describe("date: add", () => {
  it("should be possible to add a year", () => {
    const input = new Date("2000-10-10")
    const output = new Date("2003-10-10")

    expect(date(input).add({ years: 3 }).toISOString()).toBe(
      output.toISOString()
    )
  })
  it("should be possible to add a month", () => {
    const input = new Date("2000-10-10")
    const output = new Date("2001-01-10")

    expect(date(input).add({ months: 3 }).toISOString()).toBe(
      output.toISOString()
    )
  })
  it("should be possible to add a day", () => {
    const input = new Date("2000-10-10")
    const output = new Date("2000-10-22")

    expect(date(input).add({ days: 12 }).toISOString()).toBe(
      output.toISOString()
    )
  })
})
describe("date: diff", () => {
  it("should be possible to have the difference of the dates in days", () => {
    const date1 = new Date("2001-07-16")
    const date2 = new Date("2001-06-22")
    expect(date(date1).diff(date2)).toBe(24)
  })
  it("should be possible to have the difference of the dates in months", () => {
    const date1 = new Date("2001-08-17")
    const date2 = new Date("2001-03-01")
    expect(date(date1).diff(date2, "month")).toBe(5)
  })
  it("should be possible to have the difference of the dates in years", () => {
    const date1 = new Date("2010-12-06")
    const date2 = new Date("2001-02-11")
    expect(date(date1).diff(date2, "year")).toBe(9)
  })
})
