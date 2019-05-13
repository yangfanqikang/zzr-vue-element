<template lang="html">
    <div class="fullpage-container" id="fullpage">
        <canvas id="bubbles"></canvas>
        <div id="top-bar">
            <div id="info">
                <div id="person">
                    <img src="../../assets/logo.png" alt="" class="animated infinite heartBeat delay-2s alternate">
                    <div>
                        <h3>邹智睿</h3>
                        <p>www.zouzhirui.xyz</p>
                    </div>
                </div>
                <button>基本资料</button>
            </div>
        </div>
        <div class="fullpage-wp" v-fullpage="opts">
            <div class="page-1 page">
                <p class="part-1 page-title" v-animate="{value: 'bounceInDown'}">Hello World</p>
                <div class="page1-content">
                    <div id="page1-img">
                        <div class="page1-img1"  v-animate="{value: 'bounceInLeft',delay: 800}">
                        </div>
                        <div class="page1-img2" v-animate="{value: 'bounceInLeft',delay: 1200}">
                            <p><font-awesome-icon icon="book" /> <span>1111111111111</span></p>
                            <p><font-awesome-icon icon="book" /> <span>1111111111111</span></p>
                            <p><font-awesome-icon icon="book" /><span>1111111111111</span></p>
                            <p><font-awesome-icon icon="book" /> <span>1111111111111</span></p>
                            <p><font-awesome-icon icon="book" /><span>1111111111111</span></p>
                        </div>
                    </div>
                   <div id="person-des" v-animate="{value: 'zoomIn', delay: 600}">
                       <p>玉不琢，不成器；人不学，不知道——《礼记》</p>
                       <h2>工程师</h2>
                   </div>
                </div>
            </div>
            <div class="page-2 page">
                <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage2</p>
            </div>
            <div class="page-3 page">
                <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage3</p>
                <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage4</p>
                <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage5</p>
            </div>
        </div>
    </div>
</template>
<!--<script src="../../assets/js/wow.min.js"></script>-->
<script>
export default {
  name: 'index',
  mounted () {
  },
  data () {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/animate.min.css";
#bubbles{
    position: absolute;
    z-index: -99;
    left: 0;
}
.fullpage-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.page-title{
    font-size: 36px;
    margin-top: 150px;
}
.page{
    padding: 0;
    margin: 0;
}
.page1-content{
    position: absolute;
    top: 220px;
    width: 100%;
}
.page1-content>div{
    position: absolute;
}
#page1-img{
    width: 100%;
    background-color: red;
    height: 100%;
}
#page1-img>div{
    position: absolute;
}
.page1-img1{
    top: 15px;
    left: 30px;
    width: 345px;
    height: 813px;
    z-index: 11;
    background-size: cover;
    background-image: url('../../assets/img/s1-pencil.png');
    background-repeat: no-repeat;
}
.page1-img2{
    top: 221px;
    left: 120px;
    z-index: 10;
    width: 587px;
    height: 494px;
    background-size: cover;
    background-image: url('../../assets/img/s1-arraw.png');
    background-repeat: no-repeat;
    font-size: 32px;
    text-align: left;
}
.page1-img2>p{
    margin-left: 110px;
    line-height: 100px;
}
.page1-img2>p>span{
    margin-left: 10px;
}
.page1-img2>p:last-child{
    margin-top: 10px;
}
#person-des{
    width: 100%;
    top: 50px;
    margin: 0 auto;
    z-index: 12;
}
#person-des>p{
    font-size: 16px;
    color: #666;
    line-height: 32px;
}
#person-des>h2{
    line-height: 64px;
    font-size: 32px;
}
#top-bar{
    position: absolute;
    box-sizing: border-box;
    z-index: 1000;
    left: 0;
    top: 20px;
    width: 100%;
    padding: 0 30px;
}
#info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#info>button{
    width: 180px;
    height: 60px;
    background-color: #DC851F;
    font-size: 16px;
    color: #fff;
    border-radius: 40px;
    border: none;
}
#person{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    text-align: left;
}
#person h3{
    font-size: 32px;
}
#person p{
    margin-top: 10px;
    color: #999999;
}
#person img{
    width: 88px;
    height: 88px;
    margin-right: 20px;
}
    .page-3{
        background-color: dodgerblue;
    }

</style>
