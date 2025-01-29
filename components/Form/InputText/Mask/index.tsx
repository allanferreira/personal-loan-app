import { MaskOptions, useMask } from "@react-input/mask"
import InputText, { IInputText } from ".."

export interface IInputTextMask extends IInputText {
  config?: MaskOptions
}

export default function InputTextMask({ config, ...props }: IInputTextMask) {
  const inputRef = useMask(config)
  return <InputText ref={inputRef} {...props} />
}
