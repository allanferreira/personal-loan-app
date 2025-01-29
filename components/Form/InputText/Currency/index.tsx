import {
  NumberFormatOptions,
  useNumberFormat,
} from "@react-input/number-format"
import InputText, { IInputText } from ".."

export interface IInputTextCurrency extends IInputText {
  config?: NumberFormatOptions
}

export default function InputTextCurrency({
  config,
  ...props
}: IInputTextCurrency) {
  const inputRef = useNumberFormat({
    locales: "pt-BR",
    format: "currency",
    currency: "BRL",
    ...config,
  })
  return <InputText ref={inputRef} {...props} />
}
