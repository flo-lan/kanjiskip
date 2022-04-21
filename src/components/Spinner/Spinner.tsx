import React, { ReactElement } from 'react'

const Spinner = (): ReactElement => (
  <div
    className="fallback-loader"
    style={{
      height: 'calc(100vh - 20em)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    Loading
  </div>
)

export default Spinner
