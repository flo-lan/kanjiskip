import { Router } from 'express'

interface IEndpoint {
  registerRoutes(router: Router): void
}

export default IEndpoint
