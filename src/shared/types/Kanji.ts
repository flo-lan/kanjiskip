import { z } from 'zod'

export type Kanji = z.infer<typeof Kanji>
export const Kanji = z
  .string()
  .length(1, { message: 'Must be a single character' })
