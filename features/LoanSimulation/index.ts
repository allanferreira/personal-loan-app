import GoalStep from "./components/GoalStep"
import PersonalInfoStep from "./components/PersonalInfoStep"
import StepHeader from "./components/StepHeader"
import StepFooter from "./components/StepFooter"

import useLoanSimulationForm from "./hooks/useLoanSimulationForm"
import useLoanSimulationResult from "./hooks/useLoanSimulationResult"

import Steppable from "./types/Steppable"
import FormValues from "./types/FormValues"

import { formValuesToApiFormat } from "./utils/format"

import { LoanSimulationProvider, useLoanSimulationStore } from "./store"

export {
  useLoanSimulationResult,
  GoalStep,
  PersonalInfoStep,
  StepHeader,
  StepFooter,
  useLoanSimulationForm,
  formValuesToApiFormat,
  LoanSimulationProvider,
  useLoanSimulationStore,
}
export type { Steppable, FormValues }
