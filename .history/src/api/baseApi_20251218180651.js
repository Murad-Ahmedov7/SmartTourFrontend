import axios from "axios";

    export default axios.create({
  baseURL: "http://localhost:7293/api",
    headers:{
        'Content-Type':'application/json',
    },

 })

