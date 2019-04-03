<template lang="html">
    <div class="heador">
        <div class="heador-left">
            <nav>
                <a-menu
                        v-model="current"
                        mode="horizontal"
                >
                    <a-menu-item key="logo">
                        logo
                    </a-menu-item>
                    <a-menu-item key="Projects">
                        Projects
                    </a-menu-item>
                    <a-menu-item key="Activity">
                        <a-badge count="5" class="activeBadge" :numberStyle= "{backgroundColor: '#FF7800'} ">
                            Activity
                        </a-badge>
                    </a-menu-item>
                    <a-menu-item key="Teams">
                        Teams
                    </a-menu-item>
                </a-menu>
            </nav>
        </div>
        <div class="heador-right">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="backgroundColor:#87d068;margin-right: 13px"/>
            <a-dropdown>
                <a class="ant-dropdown-link" href="#"><a-icon type="down" style="color: #fff;"/>
                </a>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Heador',
  data () {
    return {
      current: ['logo']
    }
  }
}
</script>

<style scoped>
.heador{
    background:linear-gradient(0deg,rgba(25,145,235,1) 0%,rgba(46,161,248,1) 100%);
    padding: 0 30px;
    height: 70px;
    display: flex;
    justify-content: space-between;
}
    .heador-left{
        display: flex;
        flex-flow: row nowrap;
        height: 70px;
    }
    .heador-right{
        display: flex;
        flex-flow: row nowrap;
        height: 70px;
        align-items: center;
    }
</style>
