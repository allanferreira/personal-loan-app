import { GoalStep, PersonalInfoStep } from "@/features/LoanSimulation"
import {
  goalStepSchema,
  personalInfoStepSchema,
} from "@/features/LoanSimulation"

const steps = [
  {
    title: "Objetivo",
    description: "Nos diga de quanto você precisa para alcançar seus sonhos.",
    component: GoalStep,
    validationSchema: goalStepSchema,
  },
  {
    title: "Dados pessoais",
    description:
      "Com mais alguns dados, podemos analisar seu perfil e apresentar uma oferta personalizada para você.",
    component: PersonalInfoStep,
    validationSchema: personalInfoStepSchema,
  },
]

export default steps
