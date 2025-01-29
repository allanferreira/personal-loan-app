import { FormikProps } from "formik"
import FormValues from "./FormValues"

export default interface Steppable {
  step?: number
  totalSteps?: number
  formik?: FormikProps<FormValues>
  prevStep?: () => void
  nextStep?: () => void
}
