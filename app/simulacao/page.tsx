"use client"

import { useRef } from "react"
import {
  StepHeader,
  StepFooter,
  useLoanSimulationForm,
} from "@/features/LoanSimulation"
import styles from "./styles.module.css"

export default function LoanSimulation() {
  const formRef = useRef<HTMLFormElement>(null)
  const { step, steps, StepComponent, nextStep, prevStep, formik } =
    useLoanSimulationForm()

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <StepHeader
          step={step}
          totalSteps={steps.length}
          title={steps[step].title}
          description={steps[step].description}
        />
      </div>
      <div className={styles.content}>
        <form ref={formRef} onSubmit={formik.handleSubmit} noValidate>
          <StepComponent formik={formik} />
        </form>
        <StepFooter
          step={step}
          onSubmit={() => formRef.current?.requestSubmit()}
          totalSteps={steps.length}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      </div>
    </div>
  )
}
