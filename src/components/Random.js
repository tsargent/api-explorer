import React from 'react'
import useRandom from '../queries/random'
import Entry from './Entry'

const Random = () => {
  const {isLoading, data} = useRandom()

  if (isLoading) return 'Loading...'

  const entry = data.entries[0]

  return (
    <div>
      <h2 className="font-bold text-xl text-pink-100">Random</h2>
      <div className="flex">
        <Entry entry={entry} />
      </div>
    </div>
  )
}

export default Random
