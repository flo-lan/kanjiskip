import 'reflect-metadata'
import Application from './Application'

try {
  const application = new Application()
  application.run()
} catch (err) {
  console.error(err.message)
}
