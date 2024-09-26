import axios from "axios"

const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:5001/clone-3fe73/us-central1/api",
    baseURL: "https://amazon-backend-deploy-uomj.onrender.com/",
})

export {axiosInstance}