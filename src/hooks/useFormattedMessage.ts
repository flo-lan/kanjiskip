import { useIntl, MessageDescriptor } from 'react-intl'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MessageFormatValues = Record<string, Record<string, any>>

export type FormatFunction = (
  message: MessageDescriptor,
  values?: MessageFormatValues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => any

const useFormatMessage = (): FormatFunction => {
  const intl = useIntl()

  return (message: MessageDescriptor, values?: MessageFormatValues) =>
    intl.formatMessage(message, values)
}

export default useFormatMessage
