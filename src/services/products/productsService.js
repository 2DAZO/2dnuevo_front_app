import axios from 'axios';

const service = {
    get(){
        return axios.get('https://6226f91e2dfa52401811070c.mockapi.io/api/2dazoadmin/Products')
    },
    
}

export default service  