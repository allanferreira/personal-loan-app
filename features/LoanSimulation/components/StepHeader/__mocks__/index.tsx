import { IStepHeader } from ".."

export default function StepHeader({
  step,
  totalSteps,
  title,
  description,
}: IStepHeader) {
  const currentUserStep = () => (step ?? 0) + 1

  return (
    <div>
      <h1>
        Etapa {currentUserStep()} de {totalSteps}: {title}
      </h1>
      <p>{description}</p>
    </div>
  )
}

export type { IStepHeader }
