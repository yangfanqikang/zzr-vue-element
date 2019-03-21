<template lang="html">
    <header class="headerBg">
        <el-row align="center" type="flex" justify="space-between">
            <el-col :span="12" class="headerOne">
                <img width="40px" height="40px"
                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553088548327&di=c08a02930a5b624bb60aaf53dec6806c&imgtype=0&src=http%3A%2F%2Fwww.jituwang.com%2Fuploads%2Fallimg%2F150330%2F258813-1503300K94422.jpg"
                     alt="">
                <span class="logoName">邹智睿后台管理系统</span>
            </el-col>
            <el-col :span="4" class="headerOne">
                <img width="40px" height="40px"
                     src="https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b8389b504fc2d562562d540ae51190ef76c66c34.jpg"
                     alt="">
                <span>moumou</span>
                <el-dropdown>
                      <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </header>
</template>

<script>
export default {
  name: 'heador'
}
</script>

<style scoped>
    .headerBg {
        background-color: #2C384E;
        width: 100%;
        height: 60px;
        text-align: left;
    }

    .logoName {
        color: #ffffff;
    }

    .headerOne {
        height: 60px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .headerOne > span {
        color: #fff;
        margin-left: 15px;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #FFFFFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
