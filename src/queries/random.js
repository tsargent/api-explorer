import {useQuery} from 'react-query'
import {random} from '../api'

function useRandom(params = {}) {
  return useQuery(['random', params], () => random().then(data => data.data))
}

export default useRandom
