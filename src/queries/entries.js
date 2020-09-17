import {useQuery} from 'react-query'
import {entriesByCategory} from '../api'

function useEntriesByCategory(category) {
  return useQuery(['entries', {category}], () =>
    entriesByCategory(category).then(res => res.data),
  )
}

export default useEntriesByCategory
