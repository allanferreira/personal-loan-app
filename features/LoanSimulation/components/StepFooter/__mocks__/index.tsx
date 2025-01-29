import { IStepFooter } from ".."
import { vi } from "vitest"

export default function StepFooter({
  step = 0,
  totalSteps = 0,
  onSubmit = vi.fn(),
  prevStep = vi.fn(),
  nextStep = vi.fn(),
}: IStepFooter) {
  const isLastStep = step + 1 === totalSteps
  const isPrevStepButtonShowing = step !== 0

  return (
    <div>
      {isPrevStepButtonShowing && <button onClick={prevStep}>Voltar</button>}
      <button
        type={isLastStep ? "submit" : "button"}
        onClick={isLastStep ? onSubmit : nextStep}
      >
        Continuar
      </button>
    </div>
  )
}

export type { IStepFooter }
