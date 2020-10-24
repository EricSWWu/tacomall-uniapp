/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-24 12:11:37
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/config.js
 * @Just do what I think it is right
 */
export const appConfig = {
    wx: {
        appid: 'wx1492e33a9a6b64a3'
    },
    tokenKey: 'x-access-token',
    historySearchKey: 'local-history-search',
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : ''
}
