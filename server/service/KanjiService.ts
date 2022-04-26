import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'

import ServiceError from '../error/Service/ServiceError'
import { BadCallError } from '../error/Service/BadCallError'
import KanjiRepository from '../database/repository/KanjiRepository'
import { KanjiModel } from '../database/entity'

@Service()
class UserService {
  @InjectRepository() private kanjiRepository: KanjiRepository

  async getKanji(kanji: string): Promise<KanjiModel | ServiceError> {
    const kanjiDAO = await this.kanjiRepository.findOne({ character: kanji })
    if (kanjiDAO instanceof Error) {
      return new BadCallError(this.kanjiRepository.findOne, kanjiDAO)
    }

    return kanjiDAO
  }
}

export default UserService
