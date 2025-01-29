import { PostLoanSimulationRequest } from "@/services/api/simulation"
import FormValues from "../types/FormValues"
import { unformat } from "@/utils/currency"

export function formValuesToApiFormat(
  values: FormValues
): PostLoanSimulationRequest {
  return {
    ...values,
    income: unformat(values.income),
    loan: unformat(values.loan),
    installments: Number(values.installments),
    birthday: new Date(values.birthday),
  }
}
