import ServiceError from './ServiceError'

/**
 * Method call resulted in an error.
 */
export class BadCallError extends ServiceError {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(fn: Function, cause: Error) {
    super(`[${fn.name}] call resulted in [${cause.name}]!`, cause)
  }
}
