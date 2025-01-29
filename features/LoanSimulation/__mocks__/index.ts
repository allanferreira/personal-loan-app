import GoalStep from "../components/GoalStep"
import PersonalInfoStep from "../components/PersonalInfoStep"
import StepHeader from "../components/StepHeader/__mocks__/index"
import StepFooter from "../components/StepFooter/__mocks__/index"

import useLoanSimulationForm from "../hooks/useLoanSimulationForm/__mocks__/index"
import useLoanSimulationResult from "../hooks/useLoanSimulationResult/__mocks__/index"

import Steppable from "../types/Steppable"
import FormValues from "../types/FormValues"

import {
  goalStepSchema,
  personalInfoStepSchema,
} from "../utils/validationSchemas"
import { formValuesToApiFormat } from "../utils/format"

import { LoanSimulationProvider, useLoanSimulationStore } from "../store"

export {
  goalStepSchema,
  personalInfoStepSchema,
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
