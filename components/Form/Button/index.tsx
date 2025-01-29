import Link from "next/link"
import styles from "./styles.module.css"

export interface IButton {
  text: string
  componentType?: "link" | "button"
  type?: "submit" | "button"
  apperence?: "filled" | "unfilled"
  href?: string
  onClick?: () => void
}

export default function Button({
  text,
  type = "button",
  href = "",
  componentType = "button",
  apperence = "filled",
  onClick = () => {},
}: IButton) {
  const className = `${styles.button} ${styles[apperence]}`
  return (
    <>
      {componentType === "link" && (
        <Link
          data-testid="button-component-type-link"
          className={className}
          href={href}
        >
          {text}
        </Link>
      )}
      {componentType === "button" && (
        <button
          data-testid="button-component-type-button"
          type={type}
          className={className}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  )
}
