import loanSimulation from "@/domain/loanSimulation"
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
