<template lang="html">
    <div :class="$style.pclass">
        <h6>{{title}}</h6>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
    .pclass{
        margin-bottom: 20px;
        width: 48%;
        h6{
            font-size: 12px;
            color: #5B6779;
            margin-left: 32px;
            margin-bottom: 16px;
        }
    }
</style>
