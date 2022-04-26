import { z } from 'zod'

export type KanjiCharacter = z.infer<typeof KanjiCharacter>
export const KanjiCharacter = z
  .string()
  .length(1, { message: 'Must be a single character' })
