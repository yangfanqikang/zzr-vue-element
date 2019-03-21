<template lang="html">
    <div class="index">
        <Heador></Heador>
        <Sidebar></Sidebar>
        <div class="rightContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Heador from '../components/common/heador'
import Sidebar from '../components/common/sidebar'
export default {
  name: 'index',
  components: {
    Heador,
    Sidebar
  }
}
</script>

<style scoped>
    .index {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .rightContainer {
        position: relative;
        top: 0;
        left: 180px;
        padding: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: calc(100% - 180px);
        height: calc(100% - 60px);
        overflow: auto;
    }
</style>
