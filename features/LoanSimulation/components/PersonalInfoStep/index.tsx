import InputText, { InputTextCurrency } from "@/components/Form/InputText"
import { Steppable } from "@/features/LoanSimulation"
import styles from "./styles.module.css"

export default function PersonalInfoStep({ formik }: Steppable) {
  return (
    <div className={styles.personalInfoStep}>
      <InputText
        name="name"
        label="Qual é o seu nome?"
        value={formik?.values.name || ""}
        hint="(Opcional) Adorariamos te conhecer"
        error={formik?.errors.name}
        onChange={formik?.handleChange}
      />
      <InputTextCurrency
        name="income"
        label="Qual é a sua renda mensal?"
        value={formik?.values.income || ""}
        hint="(Opcional) Você não precisará comprovar renda neste momento"
        error={formik?.errors.income}
        onChange={formik?.handleChange}
      />
      <InputText
        name="birthday"
        type="date"
        label="E qual é a sua data de nascimento?"
        value={formik?.values.birthday || ""}
        error={formik?.errors.birthday}
        onChange={formik?.handleChange}
      />
    </div>
  )
}
