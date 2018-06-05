import axios from 'axios'

const config = {
  baseURL: '/api',
}

export default axios.create(config)
