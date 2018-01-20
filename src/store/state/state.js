module.exports = {
    shopingData:[],
    list: sessionStorage.list ? JSON.parse(sessionStorage.list) : [],
    count: '家乡味道',
    flag: [],
    is: true,
    toal: 0.00,
    data: null,
    addressed: sessionStorage.addressed ? JSON.parse(sessionStorage.addressed) : []
}