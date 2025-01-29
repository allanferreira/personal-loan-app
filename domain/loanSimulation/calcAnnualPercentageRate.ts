export default function calcAnnualPercentageRate(age: number) {
  if (age <= 25) return 0.05
  if (age <= 40) return 0.03
  if (age <= 60) return 0.02
  return 0.04
}
