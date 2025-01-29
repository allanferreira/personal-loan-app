export default function calcMonthlyPayment(
  loan: number,
  monthlyPercentageRate: number,
  installments: number
) {
  return Number(
    (
      (loan * monthlyPercentageRate) /
      (1 - Math.pow(1 + monthlyPercentageRate, -installments))
    ).toFixed(2)
  )
}
