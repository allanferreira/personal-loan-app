import InputTextMask from "../Mask/__mocks__/index"
import InputTextCurrency from "../Currency/__mocks__/index"
import { Ref } from "react"
import { IInputText } from ".."

export default function InputText({
  label,
  value,
  name,
  error,
  hint,
  type = "text",
}: IInputText & { ref: Ref<HTMLInputElement> | undefined }) {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} type={type} />
      <span>
        {error} {hint}
      </span>
    </div>
  )
}

export type { IInputText }
export { InputTextMask, InputTextCurrency }
