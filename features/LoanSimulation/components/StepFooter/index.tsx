import Steppable from "@/features/LoanSimulation/types/Steppable"
import Button from "@/components/Form/Button"
import styles from "./styles.module.css"

export interface IStepFooter extends Steppable {
  onSubmit: () => void
}

export default function StepFooter({
  step = 0,
  totalSteps = 0,
  onSubmit = () => {},
  prevStep = () => {},
  nextStep = () => {},
}: IStepFooter) {
  const isLastStep = step + 1 === totalSteps
  const isPrevStepButtonShowing = step !== 0

  return (
    <div className={styles.stepFooter}>
      <div>
        {isPrevStepButtonShowing && (
          <Button apperence="unfilled" onClick={prevStep} text="Voltar" />
        )}
      </div>
      <div>
        <Button
          type={isLastStep ? "submit" : "button"}
          onClick={isLastStep ? onSubmit : nextStep}
          text="Continuar"
        />
      </div>
    </div>
  )
}
