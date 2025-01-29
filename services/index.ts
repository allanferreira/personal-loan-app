import axios from "axios"

export const baseURL = "/api"
export default axios.create({ baseURL })
