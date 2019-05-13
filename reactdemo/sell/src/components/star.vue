<template lang="html">
    <ul class="star" >
        <li v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></li>
    </ul>
</template>

<script>
const LENGTH = 5
const ON = 'on'
const OFF = 'off'
const HALF = 'half'
export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    itemClasses () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let intNum = Math.floor(score)
      let hasDecimal = score % 2 !== 0
      for (let i = 0; i < intNum; i++) {
        result.push(ON)
      }
      if (hasDecimal) {
        result.push(HALF)
      }
      while (result.length < LENGTH) {
        result.push(OFF)
      }
      return result
    }
  }
}
</script>

<style>
    .star{
        font-size: 0;
        margin-top: 37px;
    }
    .star-item{
        display: inline-block;
        background-repeat: no-repeat;
        width: 40px;
        height: 38px;
        margin-right: 44px;
        background-size: 100%;
    }
    .star-item.on{
        background-image: url("../assets/img/star48_on@2x.png");
    }
    .star-item.half{
        background-image: url("../assets/img/star48_half@2x.png");
    }
    .star-item.off{
        background-image: url("../assets/img/star48_off@2x.png");
    }
</style>
