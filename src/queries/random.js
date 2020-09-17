import {useQuery} from 'react-query'
import {random} from '../api'

function useRandom(params = {}) {
  return useQuery(['random', params], () => random().then(res => res.data))
}

export default useRandom
