import React from 'react'
import {hot} from 'react-hot-loader'
import {Routes, Route, Link} from 'react-router-dom'
import {ReactQueryDevtools} from 'react-query-devtools'
import Random from './components/Random'
import List from './screens/List'
import './global.css'

const App = () => {
  return (
    <div className="p-2 bg-teal-400 min-h-screen">
      <nav className="p-4">
        <h1 className="text-2xl font-bold text-pink-100">
          <Link to="/">API Explorer</Link>
        </h1>
      </nav>
      <main className="px-4">
        <Routes>
          <Route path="/" element={<Random />} />
          <Route path="category/:category" element={<List />} />
        </Routes>
      </main>
      <ReactQueryDevtools />
    </div>
  )
}
export default hot(module)(App)
