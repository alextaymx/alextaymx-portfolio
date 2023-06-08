import { ClassArray, clsx } from "clsx"

export const cx = (...args: ClassArray) => {
  return clsx(args)
}
