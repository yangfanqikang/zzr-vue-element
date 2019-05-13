<template lang="html">
    <div class="tabZ">
        <div v-for="(item, index) in values" class="tabZ-item"  :key="index"  :class="index === current ? activeStyle : 'tabZ-item'"
              @click="onClick(index)">
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: {
    current: {
      type: Number,
      default: 0
    },
    activeStyle: {
      type: String,
      default: 'activeItem'
    },
    values: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onClick (index) {
      if (this.current !== index) {
        this.current = index
        this.$emit('clickItem', index)
      }
    }
  }
}
</script>

<style scoped>
.tabZ{
    display: flex;
    height: 82px;
    border-bottom: 1px solid #eee;
}
.tabZ-item{
    width: 33.33%;
    line-height: 82px;
    text-align: center;
    font-size: 24px;
}
    .activeItem{
        color: red;
    }
</style>
