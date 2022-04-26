import { Service } from 'typedi'
import { Repository, EntityRepository } from 'typeorm'
import PersistenceError from '../../error/persistence/PersistenceError'
import { QueryError } from '../../error/persistence/QueryError'
import { KanjiModel } from '../entity'

@Service()
@EntityRepository(KanjiModel)
class KanjiRepository extends Repository<KanjiModel> {
  // sample repository function
  async getByCharacter(
    character: string
  ): Promise<KanjiModel | PersistenceError> {
    try {
      const kanji = await this.findOne({ character })
      return kanji
    } catch (err) {
      return new QueryError(err.message, err)
    }
  }
}

export default KanjiRepository
