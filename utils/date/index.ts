import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault()

export interface dateConfig {
  years?: number
  months?: number
  days?: number
}

export default function date(date: Date = new Date()) {
  function subtract({ years = 0, months = 0, days = 0 }: dateConfig) {
    return dayjs
      .utc(date)
      .startOf("day")
      .subtract(years, "year")
      .subtract(months, "month")
      .subtract(days, "day")
  }

  function add({ years = 0, months = 0, days = 0 }: dateConfig) {
    return dayjs
      .utc(date)
      .startOf("day")
      .add(years, "year")
      .add(months, "month")
      .add(days, "day")
  }

  function diff(
    otherDate: Date,
    unit: dayjs.QUnitType | dayjs.OpUnitType = "day"
  ) {
    return dayjs.utc(date).startOf("day").diff(dayjs(otherDate), unit)
  }
  return {
    add,
    subtract,
    diff,
  }
}
