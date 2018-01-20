module.exports = {
    goods_reduce (state,id) {
        state.list.forEach((item, i) => {
            if (item.id == id){
                if (item.count == 1) return
                --item.count;
                sessionStorage.list = JSON.stringify(state.list)
                this._mutations.sendShop[0]()
            }
        });
        // console.log(this.commit('toal'))
    },
    goods_add (state,id) {
        state.list.forEach((item, i) => {
            if (item.id == id){
                ++item.count;
                sessionStorage.list = JSON.stringify(state.list)
                this._mutations.sendShop[0]()
            }
        });
    },
    toal (state) {
        var toal = 0
        state.list.forEach((item, i) => {
            if (!item.istrue) {
                toal += item.count * item.price
            }
        })
        state.toal = toal.toFixed(2)
    },
    self (state, index) {
        var lis = document.querySelectorAll('.lis')
        lis.forEach((item, i) => {
            item.className = 'lis'
        })
        lis[index].className += ' liCls'
    },
    del (state) {
        var brr = state.list.map((item, i) => {
            if (item.istrue) {
              return item
            }
        })
        console.log(brr)
        var crr = []
        brr.forEach((item, i) => {
          if (item) {
            crr.push(item)
          }
        })
      console.log(crr)
      state.list = crr
      sessionStorage.list = JSON.stringify(crr)
      if (state.list.length < 1) {
          state.is = true
      }
      this._mutations.sendShop[0]()
      this._mutations.toal[0]()
      //this._mutations.sendShop()
    },
    sendShop (state) {
        this._watcherVM.$http_token.post('/ShippingMessage',{
            shopMsg: JSON.parse(sessionStorage.list)
        })
        .then(res => {
            console.log(res.data.code)
        })
    }
}