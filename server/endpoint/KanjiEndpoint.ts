import { GetKanjiPayload } from './../../src/shared/types/KanjiRequestPayload'
import express, { Router } from 'express'
import { Service, Inject } from 'typedi'
import HttpStatus from 'http-status-codes'

import EndpointToken from './EndpointToken'
import IEndpoint from './IEndpoint'
import { logger } from '../utils/Logger'
import KanjiMapper from '../mapper/KanjiMapper'
import KanjiService from '../service/KanjiService'

@Service({ id: EndpointToken, multiple: true })
class KanjiEndpoint implements IEndpoint {
  @Inject() private kanjiService: KanjiService

  registerRoutes(router: Router): void {
    router.post('/kanji', (req: express.Request, res: express.Response) =>
      this.getKanji(req, res)
    )
  }

  async getKanji(req: express.Request, res: express.Response): Promise<void> {
    const pPayload = GetKanjiPayload.safeParse(req.body)
    if (pPayload.success === false) {
      logger.debug(pPayload)
      res.status(HttpStatus.BAD_REQUEST).json({ error: 'Invalid payload' })
      return
    }
    const payload = pPayload.data

    const kanjiDAO = await this.kanjiService.getKanji(payload.character)
    if (kanjiDAO instanceof Error) {
      logger.error(kanjiDAO)
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal server error' })
      return
    }

    if (!kanjiDAO) {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Kanji not found' })
      return
    }

    const kanjiDTO = KanjiMapper.toDTO(kanjiDAO)
    res.status(HttpStatus.OK).json({ kanji: kanjiDTO })
  }
}

export default KanjiEndpoint
