import axios from 'axios'

const baseURL = `https://www.alphavantage.co`

export const api = axios.create({ baseURL })

const useString = `/query?function=GLOBAL_QUOTE&symbol='aqui vai o codigo da acao'.SAO&apikey=${process.env.REACT_APP_API_KEY}`
