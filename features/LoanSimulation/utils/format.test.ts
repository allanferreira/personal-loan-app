import { describe, expect, it } from "vitest"
import { formValuesToApiFormat } from "./format"
import { PostLoanSimulationRequest } from "@/services/api/simulation"
import { FormValues } from ".."

describe("format: formValuesToApiFormat", () => {
  it("should convert FormValues to PostLoanSimulationRequest", () => {
    const input: FormValues = {
      loan: "R$ 5.000,00",
      installments: "10",
      birthday: "1991-05-13",
      name: "João",
      income: "R$ 2.500,00",
    }

    const output: PostLoanSimulationRequest = {
      loan: 5000,
      installments: 10,
      birthday: new Date("1991-05-13"),
      name: "João",
      income: 2500,
    }

    expect(formValuesToApiFormat(input)).toEqual(output)
  })
})
