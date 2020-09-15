import React from 'react'
import useRandom from '../queries/random'
import Entry from './Entry'

const Random = () => {
  const {isLoading, data} = useRandom()

  if (isLoading) return 'Loading...'

  const entry = data.entries[0]

  return (
    <div className="flex bg-blue-200">
      <Entry entry={entry} />
    </div>
  )
}

export default Random
