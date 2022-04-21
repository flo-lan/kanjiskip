import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.scss'
import Navigation from './Navigation/Navigation'
import logoUrl from './logo-small.png'
import logoUrl2x from './logo-small@2x.png'
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch'

const Header = (): ReactElement => (
  <div className={s.root}>
    <div className={s.container}>
      <Navigation />
      <Link className={s.brand} to="/">
        <img
          src={logoUrl}
          srcSet={`${logoUrl2x} 2x`}
          width="38"
          height="38"
          alt="React"
        />
      </Link>
      <div className={s.banner}>
        <h1 className={s.bannerTitle}>Kanji Dictionary</h1>
        <p className={s.bannerDesc} />
      </div>
      <ThemeSwitch />
    </div>
  </div>
)

export default Header
