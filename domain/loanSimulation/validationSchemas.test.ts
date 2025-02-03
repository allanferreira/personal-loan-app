import { describe, expect, it } from "vitest"
import { goalStepSchema, personalInfoStepSchema } from "./validationSchemas"

describe("validationSchemas: goalStepSchema", () => {
  const validSchema = {
    loan: "R$ 10.000,00",
    installments: "10",
  }

  it("should validate the goal step if it was filled correctly", async () => {
    const validResult = await goalStepSchema.validate(validSchema)
    expect(validResult.loan).toBe(10000)
  })

  it("should throw error when the loan was less than R$ 5.000,00 and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      loan: "R$ 4.000,00",
    }

    await expect(goalStepSchema.validate(invalidSchema)).rejects.toThrowError(
      "O valor mínimo do empréstimo é de R$ 5.000,00"
    )
  })

  it("should throw error when the loan was not filled and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      loan: undefined,
    }

    await expect(goalStepSchema.validate(invalidSchema)).rejects.toThrowError(
      "Campo obrigatório"
    )
  })

  it("should throw error when the installments was not be a positive number and show the correct message", async () => {
    const invalidSchema1 = {
      ...validSchema,
      installments: -1,
    }
    const invalidSchema2 = {
      ...validSchema,
      installments: 0,
    }

    await expect(goalStepSchema.validate(invalidSchema1)).rejects.toThrowError(
      "Deve ser um número superior a zero"
    )
    await expect(goalStepSchema.validate(invalidSchema2)).rejects.toThrowError(
      "Deve ser um número superior a zero"
    )
  })

  it("should throw error when the installments was not be a integer number and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      installments: 5.5,
    }

    await expect(goalStepSchema.validate(invalidSchema)).rejects.toThrowError(
      "Deve ser um número inteiro"
    )
  })

  it("should throw error when the installments was higher than 72 and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      installments: 73,
    }

    await expect(goalStepSchema.validate(invalidSchema)).rejects.toThrowError(
      "O pagamento não pode superar 72 meses (6 anos)"
    )
  })

  it("should throw error when the installments was not filled and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      installments: undefined,
    }

    await expect(goalStepSchema.validate(invalidSchema)).rejects.toThrowError(
      "Campo obrigatório"
    )
  })
})

describe("validationSchemas: personalInfoStepSchema", () => {
  const validSchema = {
    birthday: "1991-05-13",
  }

  it("should validate the personal info step if it was filled correctly", async () => {
    const validResult = await personalInfoStepSchema.validate(validSchema)
    expect(validResult.birthday).toEqual(new Date("1991-05-13T03:00:00.000Z"))
  })

  it("should throw error when the age was less than 18 and show the correct message", async () => {
    const currentDate = new Date()
    const underagePersonBirthday = `${currentDate.getFullYear() - 15}-05-13`

    const invalidSchema = {
      ...validSchema,
      birthday: underagePersonBirthday,
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Você deve ter no mínimo 18 anos")
  })

  it("should throw error when the age was higher than 120 and show the correct message", async () => {
    const currentDate = new Date()
    const invalidBirthday = `${currentDate.getFullYear() - 121}-05-13`

    const invalidSchema = {
      ...validSchema,
      birthday: invalidBirthday,
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Você deve colocar uma data válida")
  })

  it("should throw error when the date was not filled and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      birthday: undefined,
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Campo obrigatório")
  })

  it("should throw error when the date was filled wrong or half filled and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      birthday: "yyyy/mm/dd",
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Campo obrigatório")
  })

  it("should throw error when the income was filled with R$ 0,00 and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      income: "R$ 0,00",
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Deve ser um número superior a zero")
  })

  it("should throw error when the name was filled without lastname and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      name: "Felipe",
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Deve ter nome e sobrenome")
  })

  it("should throw error when the name was filled with numbers and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      name: "Felipe21",
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Não deve ter números")
  })

  it("should throw error when the name filled has 4 or less characters and show the correct message", async () => {
    const invalidSchema = {
      ...validSchema,
      name: "A B",
    }

    await expect(
      personalInfoStepSchema.validate(invalidSchema)
    ).rejects.toThrowError("Deve ser um nome de verdade")
  })
})
