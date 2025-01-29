"use client"

import { PostLoanSimulationResponse } from "@/services/api/simulation"
import React, { createContext, useContext, useState, ReactNode } from "react"

export interface ILoanSimulationProvider {
  children: ReactNode
}

type LoanSimulationType = PostLoanSimulationResponse | null

type LoanSimulationContextType = {
  loanSimulationStore: LoanSimulationType
  setLoanSimulationStore: (data: LoanSimulationType) => void
}

const LoanSimulationContext = createContext<
  LoanSimulationContextType | undefined
>(undefined)

export function LoanSimulationProvider({ children }: ILoanSimulationProvider) {
  const [loanSimulationStore, setLoanSimulationStore] =
    useState<LoanSimulationType>(null)

  return (
    <LoanSimulationContext.Provider
      value={{ loanSimulationStore, setLoanSimulationStore }}
    >
      {children}
    </LoanSimulationContext.Provider>
  )
}

export const useLoanSimulationStore = (): LoanSimulationContextType => {
  const context = useContext(LoanSimulationContext)
  if (!context) {
    throw new Error("it shall use inside of the LoanSimulationProvider")
  }
  return context
}
