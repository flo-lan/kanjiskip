import KanjiModel from '../database/model/KanjiModel'
import KanjiDTO from '../../src/shared/types/DTO/KanjiDTO'

export default {
  toDTO(kanjiDAO: KanjiModel): KanjiDTO {
    return { character: kanjiDAO.character }
  },
}
