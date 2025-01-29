import { vi } from "vitest"
import { IInputTextCurrency } from ".."
import InputText from "../../__mocks__/index"

export type { IInputTextCurrency }

const useNumberFormat = vi.fn()

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
