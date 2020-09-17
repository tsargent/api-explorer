import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: 'https://api.publicapis.org/',
})

export const random = () => instance.get('random')

export const entriesByCategory = category => {
  return instance.get(`entries?${qs.stringify({category})}`)
}
