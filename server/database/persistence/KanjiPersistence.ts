import { Service, Inject } from 'typedi'
import PersistenceError from '../../error/persistence/PersistenceError'
import { QueryError } from '../../error/persistence/QueryError'
import DatabaseService from '../../service/DatabaseService'
import KanjiModel from '../model/KanjiModel'

@Service()
class UserPersistence {
  @Inject() private db: DatabaseService

  async getKanji(character: string): Promise<KanjiModel | PersistenceError> {
    try {
      const user = await this.db.models.Kanji.findOne({ where: { character } })
      return user
    } catch (err) {
      return new QueryError(err.message, err)
    }
  }
}

export default UserPersistence
