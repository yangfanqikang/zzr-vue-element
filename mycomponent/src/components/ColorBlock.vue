<template lang="html">
    <div :class="$style.colorItem">
        <div :class="$style.colorBlock">
            <div :style="{background: bgColor}"></div>
            <p>{{toneText}}</p>
        </div>
        <h4>{{title}}</h4>
    </div>
</template>

<script>
export default {
  name: 'ColorBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    toneText: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
    .colorItem{
        width: 100px;
        text-align: center;
        >h4{
            color: #7F8FA4;
            font-size: 14px;
            line-height:36px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        >.colorBlock{
            width: 100px;
            height: 152px;
            text-align: center;
            background-color: #273142;
            border: 1px solid #313D4F;
            border-radius: 6px;
            >div{
                width: 100px;
                height: 100px;
                border-radius: 6px;
            }
            >p{
                line-height: 52px;
                color: #fff;
                text-transform:uppercase;
            }
        }
    }
</style>
