import React from 'react'
import {hot} from 'react-hot-loader'
import {ReactQueryDevtools} from 'react-query-devtools'
import Random from './components/Random'
import './global.css'

const App = () => {
  return (
    <div className="p-2 bg-teal-400 min-h-screen">
      <nav className="p-4">
        <h1 className="text-2xl font-bold text-pink-100">API Explorer</h1>
      </nav>
      <main className="p-4">
        <Random />
      </main>
      <ReactQueryDevtools />
    </div>
  )
}
export default hot(module)(App)
