import axios from 'axios';

const service = {
    get(){
        return axios.get('https://6213e80989fad53b1f056a59.mockapi.io/api/nuevos/comercios')
    },
    
}

export default service  