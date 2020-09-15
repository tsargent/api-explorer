import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.publicapis.org/',
})

export const random = () => instance.get('random')
