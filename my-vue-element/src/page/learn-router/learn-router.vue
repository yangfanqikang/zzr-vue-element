<template lang="html">
    <div>
        <ul>
            <li>
                <router-link to="/learn" exact tag="li">a</router-link>
            </li>
            <li>
                <router-link :to="{path: '/b'}" tag="li">b</router-link>
            </li>
            <li>
                <router-link to="/c" tag="li">c</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Heador from '../../components/common/heador'
export default {
  name: 'learn-router',
  components: {
    Heador
  }
}
</script>

<style scoped>
ul{
    display: flex;
    flex-flow: row nowrap;
    background-color: #eee;
    justify-content: space-around;
}
li{
    height: 60px;
    line-height: 60px;
    width: 60px;
}
</style>
