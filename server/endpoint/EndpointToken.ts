import { Token } from 'typedi'
import IEndpoint from './IEndpoint'

const EndpointToken = new Token<IEndpoint>('endpoints')
export default EndpointToken
