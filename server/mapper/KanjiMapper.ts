import KanjiDTO from '../../src/shared/types/DTO/KanjiDTO'
import { KanjiModel } from '../database/entity'

export default {
  toDTO(kanjiDAO: KanjiModel): KanjiDTO {
    return { character: kanjiDAO.character }
  },
}
