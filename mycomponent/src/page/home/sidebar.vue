<template lang="html">
    <div :class="$style.profile">
        <h6>预览</h6>
        <img :src=imgUrl alt="">
        <h3>昵称：邹智睿</h3>
        <div :class="$style.info">
            <div>
                <h6>详情</h6>
                <span></span>
            </div>
            <div :class="$style.infoOne">
                <div v-for="(item, index) in picInfo" :key="index">
                    <span :class="'fa fa-margin '+item.type" style=" color:rgba(124,140,165,1);"></span>
                    <span>{{item.fNumber}}</span>
                    <span>{{item.size}}</span>
                </div>
            </div>
            <div :class="$style.infoTwo">
               <div v-for="(de, index) in des" :key="index">
                   <p v-for="(d1, index) in de" :key="index">{{d1.desTitle}}</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      picInfo: [
        {type: 'fa-camera-retro ', fNumber: '1/1000', size: '3780 x 2984'},
        {type: 'fa-money ', fNumber: '--', size: '9.54M'},
        {type: 'fa-asterisk ', fNumber: 'ISO 200', size: 'Untagged RGB'}
      ],
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3631181-f76ec9340b75ea42.png',
      des: [
        {desTitle: '', desValue: ''}
      ]
    }
  },
  mounted () {
    console.log(this.picInfo)
  }
}
</script>

<style lang="scss" module>
.profile{
    box-sizing: border-box;
    padding: 0 30px;
    text-align: left;
    width:350px;
    color: #000;
    height: 100%;
    >h6{
        color:rgba(91,103,121,1);
        font-size:12px;
        padding: 30px 0;
    }
    background:rgba(39,49,66,1);
    border:1px solid rgba(49,61,79,1);
    >h3{
        font-size: 18px;
        color: #fff;
        padding: 20px 0;
    }
    >.info{
        h6{
            color:rgba(91,103,121,1);
            line-height:40px;
        }
       >.infoOne{
           position: relative;
           &::before{
               content: '';
               position: absolute;
               left: 40%;
               top: 0;
               background:rgba(49,61,79,1);
               height: 100%;
               width: 1px;
           }
           >div>span{
               line-height:24px;
               margin-right: 20px;
               color: #fff;
           }
           >div>span:nth-child(2){
               display: inline-block;
               width: 80px;
           }
       }
    }
}
</style>
