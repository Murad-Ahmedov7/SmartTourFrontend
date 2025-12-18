import axios from "axios";

    export default axios.create({
    baseURL:'http://localhost:7293',
    headers:{
        'Content-Type':'application/json',
    },

 })

