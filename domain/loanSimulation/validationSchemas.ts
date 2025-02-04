import { object, string, number, date as dateYup } from "yup"
import { unformat } from "@/utils/currency"
import date from "@/utils/date"

export const goalStepSchema = object({
  loan: number()
    .transform((value, originalValue) => unformat(originalValue, "pt-BR"))
    .required("Campo obrigatório")
    .min(5000, "O valor mínimo do empréstimo é de R$ 5.000,00"),
  installments: number()
    .required("Campo obrigatório")
    .positive("Deve ser um número superior a zero")
    .integer("Deve ser um número inteiro")
    .max(72, "O pagamento não pode superar 72 meses (6 anos)"),
})

export const personalInfoStepSchema = object({
  name: string()
    .optional()
    .matches(/^[^\d]*$/, "Não deve ter números")
    .matches(/[A-z]+\s+[A-z]+/, "Deve ter nome e sobrenome")
    .min(4, "Deve ser um nome de verdade"),
  income: number()
    .optional()
    .transform((value, originalValue) => unformat(originalValue, "pt-BR"))
    .positive("Deve ser um número superior a zero"),
  birthday: dateYup()
    .transform((value) => value)
    .required("Campo obrigatório")
    .typeError("Campo obrigatório")
    .max(date().subtract({ years: 18 }), "Você deve ter no mínimo 18 anos")
    .min(date().subtract({ years: 120 }), "Você deve colocar uma data válida"),
})
