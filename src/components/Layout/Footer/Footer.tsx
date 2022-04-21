import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = (): ReactElement => (
  <div className={s.root}>
    <div className={s.container}>
      <span className={s.text}>© Florian Langeder</span>
      <span className={s.spacer}>·</span>
      <Link className={s.link} to="/">
        Home
      </Link>
      <span className={s.spacer}>·</span>
      <Link className={s.link} to="/privacy">
        Privacy
      </Link>
    </div>
  </div>
)

export default Footer
