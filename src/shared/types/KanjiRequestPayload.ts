import { z } from 'zod'
import { Kanji } from './Kanji'

export type GetKanjiPayload = z.infer<typeof GetKanjiPayload>
export const GetKanjiPayload = z.object({
  character: Kanji,
})
