import React from 'react'
import {useParams} from 'react-router-dom'
import useEntriesByCategory from '../queries/entries'
import Entry from '../components/Entry'

const List = () => {
  const {category} = useParams()

  const {isLoading, data} = useEntriesByCategory(category)

  if (isLoading) return 'Loading'

  return (
    <div>
      <h2 className="font-bold text-5xl text-pink-100">{category}</h2>
      <div className="flex flex-wrap">
        {data.entries.map(entry => (
          <Entry key={entry.API} entry={entry} className="m-2" />
        ))}
      </div>
    </div>
  )
}

export default List
