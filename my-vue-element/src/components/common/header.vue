<template lang="html">
    <header class="headerBg">
        <el-row>
         <el-col :span="12">
             <img width="40px" height="40px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553088548327&di=c08a02930a5b624bb60aaf53dec6806c&imgtype=0&src=http%3A%2F%2Fwww.jituwang.com%2Fuploads%2Fallimg%2F150330%2F258813-1503300K94422.jpg" alt="">
            <span>logo</span>
         </el-col>
         <el-col :span="12">10</el-col>
        </el-row>
    </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
    .headerBg{
        background-color: red;
        height: 60px;
        text-align: left;
    }
</style>
