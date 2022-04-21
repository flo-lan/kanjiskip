import { Service, Inject } from 'typedi'

import ServiceError from '../error/Service/ServiceError'
import { BadCallError } from '../error/Service/BadCallError'
import KanjiModel from '../database/model/KanjiModel'
import KanjiPersistence from '../database/persistence/KanjiPersistence'

@Service()
class UserService {
  @Inject() private kanjiPersistence: KanjiPersistence

  async getKanji(kanji: string): Promise<KanjiModel | ServiceError> {
    const kanjiDAO = await this.kanjiPersistence.getKanji(kanji)
    if (kanjiDAO instanceof Error) {
      return new BadCallError(this.kanjiPersistence.getKanji, kanjiDAO)
    }

    return kanjiDAO
  }
}

export default UserService
