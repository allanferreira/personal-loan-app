"use client"

import PersonalLoanLogo from "@/components/Misc/PersonalLoanLogo"
import styles from "./styles.module.css"
import { useLoanSimulationResult } from "@/features/LoanSimulation"
import Link from "next/link"

export default function LoanSimularionResult() {
  const { name, income, monthlyPayment, payedRate, totalPayed } =
    useLoanSimulationResult()

  return (
    <div className={styles.page}>
      <Link href="/">
        <PersonalLoanLogo />
      </Link>
      <div className={styles.intro}>
        <h1>
          Olá<strong>{name && ` ${name}`}! </strong>Encontramos uma proposta
          para você. 😃
        </h1>
        <p>
          Considerando as informações
          {income && (
            <>
              {" "}
              e renda mensal de{" "}
              <strong className={styles.money}>{income}</strong>
            </>
          )}
          , temos o seguinte cenário:
        </p>
      </div>
      <div className={styles.proposal}>
        <div>
          <h2>Parcelas mensais</h2>
          <strong className={styles.money}>{monthlyPayment}</strong>
        </div>
        <div>
          <h2>Total de juros pagos</h2>
          <strong className={styles.money}>{payedRate}</strong>
        </div>
        <div>
          <h2>Valor total a ser pago</h2>
          <strong className={styles.money}>{totalPayed}</strong>
        </div>
      </div>
    </div>
  )
}
