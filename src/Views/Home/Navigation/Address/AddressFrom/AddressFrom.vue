<template>
<div class="address">
    <router-view></router-view>
     <header>
          <span @click='brack'>
               <i class="icon iconfont icon-xiangzuo"></i>
               <small>返回</small>
          </span>
          <span>
             收货人
          </span>
          <span>
              <i class="icon iconfont icon-shouye"></i>
          </span>
      </header>
      <main>
        <div class="from">
          <p class="Use_r"><input type="text" id='consignee' name="consignee" placeholder="收货人姓名" v-model.trim='name'></p>
		  <p class="Use_phone"><input type="number" id='mobile' name='mobile' placeholder=" 手机号" v-model.trim='phone'></p>
			<nav>
				<div class="select">
					<span class="opt"></span>
                    
	  				<select id='province' ref='province' @change='province' v-model.trim="pro">
                        <option v-for="(item, index) in provinces" :key='index'>{{item.name}}</option>
	  				</select>
				</div>	
				<div class="select">
					<span class="opt"></span>
	  				<select id='city' name="city_id" ref='city' @change='city' v-model.trim='cit'>
		      			<option v-for="(item, index) in citys" :key='index'>{{item.name}}</option>
	  				</select>
				</div>
			</nav>
			<section>
				<div class="select">
					<span class="opt"></span>
	  				<select id='district' name='district_id' v-model.trim="dis">
		      			<option v-for="(item, index) in district" :key='index'>{{item}}</option>
	  				</select>
				</div>				
			</section>
		
			<div class='addes'>
				<p class="Use_Adders"><input type="text" name='address' id='address' placeholder="详细地址" v-model='ads'></p>				
			</div>
			<div class="defc">
				<i class="icon iconfont icon-danxuan-copy" v-if='kg' @click='kgC'></i>
                <i class="icon iconfont icon-danxuankuangxuanzhong" v-else @click='kgC'></i>
                <p>设为默认地址</p>
            </div>
				<input type='hidden' id='address_id' name='address_id' value='0'>
				<p class="keep" @click='conserver'>保存</p>
                
               
        </div>
      </main>
</div>
</template>

<script>
import province from '@/api/city.json'
export default {
    data () {
        return {
            kg: true,
            provinces: province,
            citys: [],
            district: [],
            name: '',
            phone: '',
            pro: '',
            cit: '',
            dis: '',
            ads: ''

        }
    },
    methods: {
        brack () {
            this.$router.go(-1)
        },
        kgC () {
            this.kg = !this.kg
        },
        province () {
           this.citys = this.provinces[this.$refs.province.selectedIndex].city
           this.district = []
        },
        city () {
           //this.citys = this.provinces[this.$refs.province.selectedIndex].city
           this.district = this.provinces[this.$refs.province.selectedIndex].city[this.$refs.city.selectedIndex].area
        },
        conserver () {
            var regName = /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/
            var regPhone = /^1[3 | 5 | 7 | 8 | 9]\d{9}/
            if (!regName.test(this.name)) {
                this.$imessage('姓名格式不对')
            } else if (!regPhone.test(this.phone)) {
                this.$imessage('手机格式不对')
            } else if (this.pro == '' || this.cit == '' || this.dis == '') {
                this.$imessage('地址不对')
            } else if (this.ads == '') {
                this.$imessage('详情信息不能为空')
            }
            if (regName.test(this.name) && regPhone.test(this.phone) && this.pro != '' && this.cit != '' && this.dis != '' && this.ads != '') {
                const adsMes = {
                    name: this.name,
                    phone: this.phone,
                    pro: this.pro,
                    city: this.cit,
                    dis: this.dis,
                    msg: this.ads,
                    kg: this.kg
                }
                console.log(this.$store.state.addressed)
                this.$store.state.addressed.unshift(adsMes)
                sessionStorage.addressed = JSON.stringify(this.$store.state.addressed)
                this.$router.push({path: '/home/address/index'})
                this.$http_token.post('/addadress', {
                    adress: adsMes
                })
                .then((res) => {
                    console.log(res.data)
                })
            }
        }
    }
}
</script>

<style scoped lang='scss'>
.addressFrom{
    width:100%;
    height:100%;
}
.address{
    width:100%;
    height:100%;
    background: #fff;
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
    align-items: center;
    font-size: .32rem;
    border-bottom: .01rem solid #ccc;
}
header span:nth-child(1) small{
    font-size: .32rem;
}
header span:nth-child(1) .icon{
    font-size:.4rem;
}
header span:nth-child(2){
 font-size: .42rem;
 color: #000;
}
header span:nth-child(3) .icon{
    font-size: .4rem;
    border-radius: 50%;
    padding: .1rem;
    color: #666;
    border:.01rem solid #ccc;
}
main{
    flex:1;
    overflow-y: scroll;
    background: #eee;
}
.from{
    width:100%;
    height:100%;
    padding: 0 .4rem;
}
.Use_r,.Use_phone,.Use_Adders{
    width:100%;
    display: flex;
    height: 0.8rem;
    margin: .3rem 0;
    justify-content: center;
    input{
        width:100%;
        height:100%;
        outline:none;
        border:none;
        background: #fff;
    }
}
nav{
    width:100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    .select{
        width:35%;
        height:100%;
        select{
            width:100%;
            height:100%;
            outline:none;
            border: none;
        }
    }
}
section{
    margin-top: .3rem;
    width:100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    .select{
        width:100%;
        height:100%;
        select{
            width:100%;
            height:100%;
            outline:none;
            border: none;
        }
    }
}
.defc{
    display: flex;
    p{
        font-size: .26rem;
        line-height: .5rem;
        margin-left: .1rem;
    }
}
.keep{
    width: 4.60rem;
    height: 1rem;
    margin-top: .5rem;
    margin-left: 1.4rem;
    background: #fc4141;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    border-radius: .5rem;
    font-size: .36rem;
}
</style>
