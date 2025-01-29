"use client"

import { useState } from "react"
import { useFormik } from "formik"
import steps from "./steps"
import { loanSimulation } from "@/services/api/simulation"
import {
  FormValues,
  formValuesToApiFormat,
  useLoanSimulationStore,
} from "@/features/LoanSimulation"
import { useRouter } from "next/navigation"

export default function useLoanSimulationForm() {
  const router = useRouter()
  const { setLoanSimulationStore } = useLoanSimulationStore()
  const [step, setStep] = useState(0)
  const StepComponent = steps[step]?.component

  const formik = useFormik<FormValues>({
    initialValues: {
      loan: "",
      installments: "",
      name: "",
      income: "",
      birthday: "",
    },
    validationSchema: steps[step].validationSchema,
    validateOnChange: false,
    onSubmit,
  })

  async function onSubmit(values: FormValues) {
    try {
      const formatedValues = formValuesToApiFormat(values)
      const data = await loanSimulation(formatedValues)
      setLoanSimulationStore(data)
      router.push("/simulacao/resultado")
    } catch (error) {
      console.error(error)
    }
  }

  async function nextStep() {
    const formikErrors = await formik.validateForm()
    const hasErrors = Object.keys(formikErrors).length === 0
    if (!hasErrors) return

    setStep(step + 1)
  }

  function prevStep() {
    setStep(step - 1)
  }

  return {
    step,
    steps,
    formik,
    StepComponent,
    nextStep,
    prevStep,
  }
}
