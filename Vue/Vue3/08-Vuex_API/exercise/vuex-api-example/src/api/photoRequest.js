import axios from 'axios'

// create axios 實體
const photoRequest = axios.create({
    baseURL: 'https://vue-lessons-api.heroku.com/'
})

// Add a request interceptor
// request 攔截器
photoRequest.interceptors.request.use((config) => {
        if(true) throw {response :{data:'資料不可為空'}}
        return config;
  }, (error) => {
    return Promise.reject(error);
  });

// Add a response interceptor
// response 攔截器
photoRequest.interceptors.response.use((response) =>{
    console.log(response)
    return response;
  }, function (error) {

    return Promise.reject(error);
  });


export const getPhotoRequest = () => photoRequest.get('/photo/list')

