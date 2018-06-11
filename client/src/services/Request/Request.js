import axios from 'axios'

const config = {
  baseURL: '//localhost:1337'
}

export default axios.create(config)
