import { vi } from "vitest"
import { IInputTextMask } from ".."
import InputText from "../../__mocks__/index"

export type { IInputTextMask }

const useMask = vi.fn()

export default function InputTextMask({ config, ...props }: IInputTextMask) {
  const inputRef = useMask(config)
  return <InputText ref={inputRef} {...props} />
}
