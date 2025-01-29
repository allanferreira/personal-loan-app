import { Steppable } from "@/features/LoanSimulation"
import styles from "./styles.module.css"
import Link from "next/link"
import PersonalLoanLogo from "@/components/Misc/PersonalLoanLogo"

export interface IStepHeader extends Steppable {
  title: string
  description: string
}

export default function StepHeader({
  step,
  totalSteps,
  title,
  description,
}: IStepHeader) {
  const currentUserStep = () => (step ?? 0) + 1

  return (
    <div className={styles.stepHeader}>
      <Link href="/">
        <PersonalLoanLogo />
      </Link>
      <div className={styles.step}>
        <h1>
          <strong>
            Etapa {currentUserStep()} de {totalSteps}:
          </strong>
          {" " + title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
