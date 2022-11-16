import axios from 'axios'


const instance = axios.create({
        // baseURL: 'http://localhost:8080',
        baseURL:'http://newbajos-env-1.eba-7d2ypcu7.ap-south-1.elasticbeanstalk.com/api/v1/admin',
        headers: {
            'Content-Type': 'application/json'
        },
    });


export default instance;