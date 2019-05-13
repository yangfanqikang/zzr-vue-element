<template lang="html">
    <div :class="$style.container">
        <div :class="$style.content">
            <div :class="$style.banner">
                <div>
                    <img :src="seller.avatar" alt="">
                    <div>
                        <h2><img src="../../assets/img/brand@2x.png" alt="">{{seller.name}}</h2>
                        <p>{{seller.description}} / {{seller.deliveryTime}} 分钟送达</p>
                        <p><img src="../../assets/img/decrease_1@2x.png" alt="">在线支付满28减5</p>
                    </div>
                </div>
                <div id="count" @click="showDetail"><span> {{lg}} </span>个 <font-awesome-icon icon="chevron-right"/></div>
            </div>
            <div :class="$style.notice">
                <img src="../../assets/img/pic_notice.png" alt="">
                <p>{{seller.bulletin}}</p>
                <p @click="showDetail"> <font-awesome-icon icon="chevron-right"/></p>
            </div>
        </div>
        <div :class="$style.detail" v-if="isShowDetail" >
            <h1>{{seller.name}}</h1>
            <Star :score=seller.score></Star>
            <div>
                <div :class="$style.youhui">
                    <span></span>
                    <h1>优惠信息</h1>
                    <span></span>
                </div>
                <ul v-if="seller.supports" :class="$style.supports">
                    <li v-for="(item1, index1) in seller.supports" :key="index1">
                        <img :src="iconGroup[item1.type]" />
                        <span>{{item1.description}}</span>
                    </li>
                </ul>
            </div>
            <div>
                <div :class="$style.youhui">
                    <span></span>
                    <h1>商家公告</h1>
                    <span></span>
                </div>
                <p>{{seller.bulletin}}</p>
            </div>
            <font-awesome-icon icon="times" :class="$style.close" @click="hideDetail"/>
        </div>
        <div :class="$style.tabContent"></div>
        <TabContent :current="tabZObj.current" :values="tabZObj.items" :activeStyle="tabZObj.activeStyle" v-on:clickItem="onClickItem"></TabContent>
        <div class="tab-content">
            <div v-show="tabZObj.current === 0">
                000000000000000000000
            </div>
            <div v-show="tabZObj.current === 1">
                11111111111111
            </div>
            <div v-show="tabZObj.current === 2">
                22222222222222222
            </div>
        </div>
    </div>
</template>

<script>
import Star from '../../components/star'
import TabContent from '../../components/TabContent'
export default {
  name: 'index',
  components: {
    Star,
    TabContent
  },
  created () {
    this.$axios.get('/api/seller').then(res => {
      console.log(res.data)
      this.seller = res.data.data
      this.lg = res.data.data.supports.length
    })
    this.iconGroup = ['https://upload-images.jianshu.io/upload_images/3631181-1fbc050927b78d73.png?imageMogr2/auto-orient/',
      'https://upload-images.jianshu.io/upload_images/3631181-b300e279295f95c6.png?imageMogr2/auto-orient/',
      'https://upload-images.jianshu.io/upload_images/3631181-3be80ecf38b4ef0c.png?imageMogr2/auto-orient/',
      'https://upload-images.jianshu.io/upload_images/3631181-c53bb9535a703972.png?imageMogr2/auto-orient/',
      'https://upload-images.jianshu.io/upload_images/3631181-9177829f6bf40e9a.png?imageMogr2/auto-orient/']
  },
  data () {
    return {
      seller: {},
      isShowDetail: false,
      lg: 0,
      tabZObj: {
        items: [
          '资讯',
          '公告',
          '评彩'
        ],
        current: 0,
        activeStyle: 'activeItem'
      }
    }
  },
  methods: {
    showDetail () {
      this.isShowDetail = true
    },
    hideDetail () {
      this.isShowDetail = false
    },
    onClickItem (index) {
      console.log(index)
      if (this.tabZObj.current !== index) {
        this.tabZObj.current = index
      }
    }
  }
}
</script>

<style lang="scss" module>
    .container{
        position: relative;
        width: 100%;
        height: 100%;
        >.detail{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.7);
            z-index: 1000;
            top: 0;
            left: 0;
            >.close{
                position: absolute;
                bottom: 50px;
                font-size: 48px;
                color: #fff;
            }
            >h1{
                color: #fff;
                font-size:32px;
                font-weight:bold;
                line-height:28px;
                margin-top: 128px;
            }
            >div{
                >.youhui{
                    margin-top: 62px;
                    margin-bottom: 51px;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    >span{
                        width:224px;
                        height:2px;
                        background:rgba(255,255,255,.2);
                    }
                    >h1{
                        font-size:28px;
                        font-weight:bold;
                        margin: 0 40px;
                    }
                }
                >p{
                    width: 556px;
                    margin-left: 96px;
                    font-size: 24px;
                    line-height: 2em;
                    color: #fff;
                    text-align: left;
                }
                >.supports{
                    color: #fff;
                    text-align: left;
                    margin-left: 96px;
                    >li{
                        margin-bottom: 33px;
                        display: flex;
                        align-items: center;
                        >span{
                            font-size: 24px;
                            margin-left: 20px;
                        }
                        >img{
                            width: 32px;
                            height: 32px;
                        }
                    }
                }
            }
        }
        >.content{
            color: #fff;
            >.notice{
                background:rgba(7,17,27,0.2);
                height: 56px;
                line-height: 56px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 23px;
                >img{
                    width:44px;
                    height:24px;
                    background-color: #fff;
                    line-height: 24px;
                    color: #333;
                    margin-right: 8px;
                    border-radius: 5px!important;
                }
                >p:nth-child(2){
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    width: 620px;
                }
            }
            width: 100%;
            height: 268px;
            background-size: cover;
            background: url("../../assets/img/pic_banner.png");
            >.banner{
                box-sizing: border-box;
                padding: 48px 48px 36px 48px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-end;
                >div:nth-child(2){
                    width: 86px;
                    height: 48px;
                    border-radius: 24px;
                    background-color: rgba(0,0,0,.2);
                    line-height: 48px;
                }
                >div:nth-child(1){
                    display: flex;
                    height: 128px;
                    >img{
                        width: 128px;
                        height: 128px;
                    }
                    >div{
                        padding-left: 32px;
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: space-between;
                        text-align: left;
                        color: #fff;
                        >h2{
                            font-size: 32px;
                            font-weight: bold;
                            display: flex;
                            align-items: center;
                            >img{
                                width: 60px;
                                height: 36px;
                                margin-right: 12px;
                            }
                        }
                        >p:nth-child(2){
                            font-size: 24px;
                        }
                        >p:nth-child(3){
                            font-size: 20px;
                            >img{
                                width: 24px;
                                height: 24px;
                                margin-right: 8px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
