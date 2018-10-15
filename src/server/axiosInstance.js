import axios from 'axios'
import { HOST } from '../config'

const createInstance = req => {
  return axios.create({
    baseURL: HOST,
    headers: {
      cookie: `sid=${req.cookies.sid}`
    }
  })
}

export default createInstance
