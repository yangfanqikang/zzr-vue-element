<template lang="html">
    <div class="indexOne">
        <Heador></Heador>
        <DashHeader></DashHeader>
        <main>
            <SideBar></SideBar>
        </main>
    </div>
</template>

<script>
import Heador from '../../components/Heador'
import DashHeader from '../../components/DashHeader'
import SideBar from './sidebar'
export default {
  name: 'index',
  components: {
    Heador,
    DashHeader,
    SideBar
  }
}
</script>

<style>
@import "index.css";
.indexOne{
    height: 100%;
}
main{
    height: calc(100% - 140px);
}
</style>
