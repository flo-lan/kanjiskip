import { RequestAction } from '@redux-requests/core'
import { AxiosError } from 'axios'

export const onErrorSaga = async (
  error: AxiosError,
  action: RequestAction
  // store: RequestsStore
): Promise<RequestAction> => {
  const statusCode = error.response.status

  // don't do anything if status code is
  // specified in ignoreErrors property in action
  if (action?.meta?.ignoreErrors?.includes(statusCode)) {
    return action
  }

  // TODO(FL): toast.error(error.response?.data?.error ?? error.message)

  throw error
}
