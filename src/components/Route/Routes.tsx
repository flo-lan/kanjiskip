import React, { lazy, LazyExoticComponent, ReactElement, Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from '../../utils/history'
import Layout from '../Layout/Layout'
import NotFound from '../../pages/NotFound'
import Spinner from '../Spinner/Spinner'

const Home = lazy(() => import('../../pages/Home'))

interface RouteType {
  path: string
  component: LazyExoticComponent<
    (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props: any
    ) => ReactElement
  >
  exact: boolean
}

const routes: RouteType[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
]

const Routes = (): ReactElement => (
  <Router history={history}>
    <Layout>
      <Switch>
        {routes.map((route) => {
          const ContentComponent = route.component
          return (
            <Route
              key={route.path}
              path={route.path}
              render={(props) => (
                <Suspense fallback={<Spinner />}>
                  <ContentComponent {...props} />
                </Suspense>
              )}
              exact={route.exact}
            />
          )
        })}

        <Route
          render={() => (
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          )}
        />
      </Switch>
    </Layout>
  </Router>
)

export default Routes
