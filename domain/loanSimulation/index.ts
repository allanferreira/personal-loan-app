import { PostLoanSimulationRequest } from "@/services/api/simulation"
import date from "@/utils/date"
import calcAnnualPercentageRate from "./calcAnnualPercentageRate"
import calcMonthlyPayment from "./calcMonthlyPayment"

export default function loanSimulation({
  birthday,
  loan,
  installments,
}: PostLoanSimulationRequest) {
  const age = date().diff(birthday, "year")
  const monthlyPercentageRate = calcAnnualPercentageRate(age) / 12

  const monthlyPayment = calcMonthlyPayment(
    loan,
    monthlyPercentageRate,
    installments
  )

  const totalPayed = monthlyPayment * installments
  const payedRate = totalPayed - loan

  return {
    totalPayed: Number(totalPayed.toFixed(2)),
    payedRate: Number(payedRate.toFixed(2)),
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
  }
}
