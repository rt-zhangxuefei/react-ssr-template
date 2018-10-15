import axios from 'axios'

const instance = () => {
  return axios.create({
    baseURL: '/'
  })
}

export default instance
