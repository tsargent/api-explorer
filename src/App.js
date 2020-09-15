import React from 'react'
import {hot} from 'react-hot-loader'
import {ReactQueryDevtools} from 'react-query-devtools'
import './global.css'

const App = () => {
  return (
    <div className="p-2">
      <p>HELLO</p>
      <ReactQueryDevtools />
    </div>
  )
}
export default hot(module)(App)
