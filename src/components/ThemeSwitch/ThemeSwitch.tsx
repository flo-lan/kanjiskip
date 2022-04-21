import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducer/state'
import ThemeService from '../../store/service/themeService'

const ThemeSwitch = (): ReactElement => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.themes)

  const handleToggleSwitch = () => {
    const targetTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(ThemeService.setTheme(targetTheme))
  }

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={theme === 'light'}
          onClick={() => handleToggleSwitch()}
        />
      </label>
    </div>
  )
}

export default ThemeSwitch
