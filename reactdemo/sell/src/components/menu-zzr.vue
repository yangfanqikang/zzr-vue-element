<template lang="html">
    <div class="menu-zzr">
        <div class="menu-left">
            <div v-for="(menu, index) in menus" :key="index"></div>
        </div>
        <div class="menu-right">
            <div v-for="(product, index) in products" :key="index"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'menu-zzr',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    },
    products: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" module>
.menu-zzr{
    display: flex;
    .menu-left{}
}
</style>
