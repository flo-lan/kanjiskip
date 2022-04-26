import { z } from 'zod'
import { KanjiCharacter } from './Kanji'

export type GetKanjiPayload = z.infer<typeof GetKanjiPayload>
export const GetKanjiPayload = z.object({
  character: KanjiCharacter,
})
