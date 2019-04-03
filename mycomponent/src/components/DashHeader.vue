<template lang="html">
    <div class="dashHeader">
        <div>
            <h3>All Projects | <span><b>34</b><i>Project</i></span></h3>
        </div>
        <div class="headerTab">
            <a-radio-group style="">
                <a-radio-button value="All Projects">
                    <a-icon type="home" />
                    All Projects
                </a-radio-button>
                <a-radio-button value="Shared">
                    <a-icon type="cloud" />
                    Shared
                </a-radio-button>
                <a-radio-button value="Media Files">
                    <a-icon type="picture" />
                    Media Files</a-radio-button>
            </a-radio-group>
        </div>
        <div>
            <a-input-search
                    placeholder="input search text"
                    style="width: 200px"
                    @search="onSearch"
            />
            <a-button type="primary" icon="plus" style="background: #39B54A"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DashHeader'
}
</script>

<style>
.dashHeader{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    height: 69px;
    border-bottom: 1px solid #273142;
    background:rgba(39,49,66,1);
}
.dashHeader>div>h3{
    color: #fff;
}
</style>
