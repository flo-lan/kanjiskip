import { Dispatch } from 'react'
import KanjiApi from '../api/kanji.api'

import { GetKanjiPayload } from '../shared/types/KanjiRequestPayload'

const dispatchable = {
  getKanji: async (
    dispatch: Dispatch<any>,
    payload: GetKanjiPayload
  ): Promise<any> => dispatch(KanjiApi.getKanji(payload)),
}

export default {
  dispatchable,
}
