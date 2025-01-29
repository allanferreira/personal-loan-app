import Image from "next/image"
import styles from "./styles.module.css"

export interface IPersonalLoanLogo {
  size?: "md" | "lg"
}

export default function PersonalLoanLogo({ size = "md" }: IPersonalLoanLogo) {
  return (
    <div
      data-testid="personal-loan-logo"
      className={`${styles.personalLoanLogo} ${styles[size]}`}
    >
      <Image
        className={styles.logo}
        src="/personal-loan-logo-icon.png"
        alt="Personal Loan"
        width={56}
        height={56}
        priority
      />
      <strong>Personal</strong> Loan
    </div>
  )
}
