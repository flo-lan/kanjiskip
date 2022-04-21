import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RouteLoader from './components/Route/RouteLoader'
import { RootState } from './store/reducer/state'
import ThemeService from './store/service/themeService'

const App = (): ReactElement => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.themes)
  useEffect(() => {
    if (!theme) {
      const defaultToDark = window.matchMedia(
        '(prefers-color-scheme: dark'
      ).matches
      dispatch(ThemeService.setTheme(defaultToDark ? 'dark' : 'light'))
    }
  }, [theme, dispatch])

  return (
    <div className="App" data-theme={theme}>
      <RouteLoader />
    </div>
  )
}
export default App
