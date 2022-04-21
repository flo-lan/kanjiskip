import { RequestAction } from '@redux-requests/core'

import KanjiDTO from '../shared/types/DTO/KanjiDTO'
import { KanjiActionTypes } from '../store/actions/kanjiActions'
import { ApiError } from '../shared/types/ApiError'
import { GetKanjiPayload } from '../shared/types/KanjiRequestPayload'

const BASE_URL = 'kanji'

export const KanjiApi = {
  getKanji: (payload: GetKanjiPayload): RequestAction<KanjiDTO | ApiError> => ({
    type: KanjiActionTypes.GET_KANJI,
    request: {
      url: BASE_URL,
      method: 'POST', // pass kanji in post payload, because of encoding issues in url
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    },
  }),
}

export default KanjiApi
