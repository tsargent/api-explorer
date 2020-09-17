import React from 'react'
import {useParams} from 'react-router-dom'
import useEntriesByCategory from '../queries/entries'
import Entry from '../components/Entry'

const List = () => {
  const {category} = useParams()

  const {isLoading, data} = useEntriesByCategory(category)

  if (isLoading) return 'Loading'

  return (
    <>
      <h2 className="font-bold text-xl text-pink-100">Category: {category}</h2>
      <div className="flex flex-wrap flex-col py-2 md:flex-row md:-m-2">
        {data.entries.map(entry => (
          <a href={entry.Link} key={entry.API} className="block mb-4 md:m-2">
            <Entry key={entry.API} entry={entry} />
          </a>
        ))}
      </div>
    </>
  )
}

export default List
