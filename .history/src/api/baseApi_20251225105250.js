import axios from "axios";

    export default axios.create({
  baseURL: "https://localhost:7293/api",
    headers:{
        'Content-Type':'application/json',
    },

 })
// Həmişə 1 axios instance (api) yaradıb onu istifadə et; URL-ləri baseURL + relative path kimi yaz, body varsa 2-ci parametrə ver. Token və headers interceptor-da olsun, component-lərdə birbaşa axios və URL yazma
