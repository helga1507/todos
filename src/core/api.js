import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});


export const sendRequest = ({method='get', url, data}) => instance({url, method, data}).then(response => response.data);