import { v4 as uuidv4 } from "uuid"

export default function uid(): string {
  return uuidv4()
}
