import React, { ReactElement, Suspense } from 'react'
import Routes from './Routes'
import Spinner from '../Spinner/Spinner'

const RouteLoader = (): ReactElement | null => (
  <Suspense fallback={<Spinner />}>
    <Routes />
  </Suspense>
)

export default RouteLoader
