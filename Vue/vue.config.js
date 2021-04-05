module.exports={
    devServer: {
    //設定完成後重啟npm
         proxy: {
             //設定代理
             "/api": {
                 target: "https://odws.hccg.gov.tw/", // 介面的域名
                 changeOrigin: true,
                 ws:true,
                 pathRewrite: {
                     "^/api": ""
                 }
             }
         },
     },
     publicPath: "./"
 }
