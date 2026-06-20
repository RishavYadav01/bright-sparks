import axios from "axios";

const API = axios.create({
    baseURL: "https://bright-sparks-production.up.railway.app/api"
});

export default API;