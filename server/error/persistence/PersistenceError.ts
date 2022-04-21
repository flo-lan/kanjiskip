import ChainedError from 'typescript-chained-error'

/**
 * An error in the persistence layer.
 * This class should only be used directly in test cases.
 * For other purposes, use a more specific error derived from this.
 */
export default class PersistenceError extends ChainedError {}
