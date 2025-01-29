import uid from "@/utils/uid"
import styles from "./styles.module.css"
import InputTextMask from "./Mask"
import InputTextCurrency from "./Currency"
import { ChangeEvent, forwardRef } from "react"

export async function getServerSideProps() {
  return {
    props: { uid: uid() },
  }
}

export interface IInputText {
  label: string
  value: string
  name: string
  type?: string
  error?: string
  hint?: string
  uid?: string
  onChange?: (e: string | ChangeEvent) => void
}
const InputText = forwardRef<HTMLInputElement, IInputText>(
  (
    {
      label,
      value,
      name,
      error,
      hint,
      uid,
      type = "text",
      onChange = () => {},
    },
    ref
  ) => {
    return (
      <div
        data-testid="input-text"
        className={`${styles.inputText} ${error ? styles.error : ""}`}
      >
        <label data-testid="input-text-label" htmlFor={uid}>
          {label}
        </label>
        <input
          data-testid="input-text-input"
          ref={ref}
          name={name}
          id={uid}
          value={value}
          type={type}
          onChange={onChange}
        />
        <span>{error ? error : hint}</span>
      </div>
    )
  }
)

InputText.displayName = "InputText"

export default InputText
export { InputTextMask, InputTextCurrency }
