import InputText, { InputTextCurrency } from "@/components/Form/InputText"
import { Steppable } from "@/features/LoanSimulation"
import styles from "./styles.module.css"

export default function GoalStep({ formik }: Steppable) {
  return (
    <div className={styles.goalStep}>
      <InputTextCurrency
        name="loan"
        label="Qual o valor em reais que você deseja?"
        value={formik?.values.loan || ""}
        error={formik?.errors.loan}
        onChange={formik?.handleChange}
        hint="O valor mínimo do empréstimo é de R$ 5.000,00."
      />
      <InputText
        name="installments"
        type="number"
        label="Em quantos meses gostaria de pagar?"
        value={formik?.values.installments || ""}
        error={formik?.errors.installments}
        onChange={formik?.handleChange}
      />
    </div>
  )
}
