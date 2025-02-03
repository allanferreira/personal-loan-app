import { ValidationError } from "yup"
import loanSimulation from "@/domain/loanSimulation"
import {
  goalStepSchema,
  personalInfoStepSchema,
} from "@/domain/loanSimulation/validationSchemas"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  if (!data.loan || !data.installments || !data.birthday) {
    return NextResponse.json(
      { error: "The keys 'loan', 'installments' and 'birthday' are required" },
      { status: 400 }
    )
  }

  try {
    await goalStepSchema.validate(data)
    await personalInfoStepSchema.validate(data)
  } catch (err) {
    console.error(err)
    const error = err instanceof ValidationError ? err.errors : "Invalid Format"
    return NextResponse.json({ error }, { status: 403 })
  }

  try {
    return NextResponse.json({
      ...data,
      loan: Number(data.loan.toFixed(2)),
      income: Number(data.income.toFixed(2)),
      result: loanSimulation(data),
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
