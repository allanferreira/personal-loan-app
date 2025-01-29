"use client"

import { useLoanSimulationStore } from "@/features/LoanSimulation"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { format } from "@/utils/currency"

export default function useLoanSimulationForm() {
  const router = useRouter()
  const { loanSimulationStore: store } = useLoanSimulationStore()

  useEffect(() => {
    const isStoreEmpty = store === null
    if (!isStoreEmpty) return
    router.push("/simulacao")
  }, [router, store])

  const loan = store?.loan ? format(store?.loan) : null
  const income = store?.income ? format(store?.income) : null
  const monthlyPayment = format(store?.result?.monthlyPayment || 0)
  const payedRate = format(store?.result?.payedRate || 0)
  const totalPayed = format(store?.result?.totalPayed || 0)

  return { ...store, loan, income, monthlyPayment, payedRate, totalPayed }
}
