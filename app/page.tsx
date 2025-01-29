import Button from "@/components/Form/Button"
import PersonalLoanLogo from "@/components/Misc/PersonalLoanLogo"
import styles from "./styles.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <PersonalLoanLogo size="lg" />
      <p>
        Simule um empréstimo pessoal rapidamente
        <br />e sem burocracia
      </p>
      <Button
        componentType="link"
        apperence="unfilled"
        href="/simulacao"
        text="Começar"
      />
    </div>
  )
}
