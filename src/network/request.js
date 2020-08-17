import axios from 'axios'

export function request(config) {
    // return new Promise((resolve, reject) => {
        //1.创建axios的实例
        const instance = axios.create({
            baseURL: `http://152.136.185.210:8000/api/z8`,
            timeout: 5000
        })

        //2.axios的拦截器
        //请求拦截的作用
        // instance.interceptors.request.use(config => {
        //     // console.log(config);
        //     return config
        // }, err => {
        //     // console.log(err);
        //     return err
        // })

        //2.1.响应拦截
        instance.interceptors.response.use(res => {
            // console.log(res);
            return res.data
        }, err => {
            // console.log(err);
            // if (err && err.response) {
            //     switch (err.response.status) {
            //         case 400:
            //             err.message = '请求错误'
            //             break
            //         case 401:
            //             err.message = '未授权的访问'
            //             break
            //     }
            // }
            return err
        })

        //3.发送真正的网络请求
        //instance(config)这里的返回值就是个Promise
        return instance(config)
        // instance(config).then(res => {
        //     resolve(res)
        // }).catch(err => {
        //     reject(err)
        // })
    // })
}