
import axios from 'axios'
import queryString from 'query-string';

const host = 'http://localhost:5000'


export const  get_url = (param1)=>{
    return host + '/end-point1?' + queryString.stringify({
        param1,
    })
}


export const get_axios = (param1) => {
    return axios.get( host+'/end-point2',{ 
        params: {
            param1 
        }
    })
}
