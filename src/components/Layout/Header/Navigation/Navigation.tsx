import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import useFormattedMessage from '../../../../hooks/useFormattedMessage'

import NavigationMessages from './Navigation.messages'
import s from './Navigation.module.scss'

const Navigation = (): ReactElement => {
  const format = useFormattedMessage()
  return (
    <div className={s.root} role="navigation">
      <Link className={s.link} to="/about">
        About
      </Link>
      <Link className={s.link} to="/contact">
        {format(NavigationMessages.contactHeader)}
      </Link>
    </div>
  )
}
export default Navigation
