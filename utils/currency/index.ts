import {
  unformat as unformatNumberFormat,
  format as formatNumberFormat,
  NumberFormatOptions,
} from "@react-input/number-format"

const unformat = (value: string, locales?: Intl.LocalesArgument) =>
  Number(unformatNumberFormat(value, locales))

function format(
  value: number | bigint | string,
  options?: NumberFormatOptions & {
    locales?: Intl.LocalesArgument
  }
): string {
  return formatNumberFormat(value, {
    locales: "pt-BR",
    format: "currency",
    currency: "BRL",
    ...options,
  })
}

export { unformat, format }
