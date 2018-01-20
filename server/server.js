const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const queryApi = require('./queryApi.js')
const fs = require('fs')
const jwt = require('jsonwebtoken')
app.use(bodyparser.json())
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.post('/mall/index/getGoodsChannel', (req, res) => {  
    // console.log(jwt.verify(token))
queryApi(req.path,req.body,'POST').then((data) => {
    res.json(JSON.parse(data))
})
})
app.post('/mall/goods/recommendgoods', (req, res) => {  
    // console.log(jwt.verify(token))
queryApi(req.path,req.body,'POST').then((data) => {
    res.json(JSON.parse(data))
})
})
// shoping
const shoping = require('./js/shoping')
app.post('/ShippingMessage', shoping)

// 注册
const register = require('./js/register')
app.post('/register', register)

// 登录
const login = require('./js/login')
app.post('/login', login)

// 请求地址
const adres = require('./js/adres')
app.post('/adres', adres)

// 添加地址
const address = require('./js/address')
app.post('/addadress', address)

// 删除地址
const deladdress = require('./js/deladdress')
app.post('/deladress', deladdress)

// 替换地址
const editddress = require('./js/editaddress')
app.post('/addressEdit', editddress)

app.listen(3001,()=>{
    console.log('server')
})