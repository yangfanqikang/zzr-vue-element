<template lang="html">
    <div>
        <h3><span>></span>{{pTitle}}</h3>
    </div>
</template>

<script>
export default {
  name: 'PrimaryTitle',
  props: {
    pTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
    h3{
        color: #fff;
        font-size: 32px;
        padding:96px 0 47px 0;
        >span{
            color: #68768C;
            font-size: 16px;
            vertical-align: middle;
            font-weight: bold;
            margin-right: 10px;
        }
    }
</style>
