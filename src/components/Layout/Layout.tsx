import React, { FunctionComponent, ReactElement } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout: FunctionComponent = ({ children }): ReactElement => (
  <section>
    <Header />
    {children}
    <Footer />
  </section>
)

export default Layout
