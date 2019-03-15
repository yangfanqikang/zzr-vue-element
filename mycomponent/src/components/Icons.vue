<template lang="html">
    <div>
        <PrimaryTitle pTitle="Icons"></PrimaryTitle>
        <p :class="$style.iconP">(99 Beans by Zulal Ahmad (https://dribbble.com/shots/1370290-99-beans)</p>
        <div class="icons-list">
            <a-icon type="home" :style="{ color: '#ffffff' }"  />
            <a-icon type="setting" theme="filled" />
            <a-icon type="smile" theme="outlined" />
            <a-icon type="sync" spin />
            <a-icon type="loading" :style="{ fontSize: '32px', color: '#ffffff' }" />
            <a-icon type="file-sync" />
            <a-icon type="gold" />
            <a-icon type="robot" />
        </div>
        <p :class="$style.iconP2">Landing page by Jan Losert</p>
        <div class="icons-list">
            <a-icon type="smile" theme="twoTone" :style="{ fontSize: '62px' }"/>
            <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" :style="{ fontSize: '62px' }"/>
            <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" :style="{ fontSize: '62px' }"/>
        </div>
    </div>
</template>

<script>
import PrimaryTitle from './PrimaryTitle'
export default {
  name: 'Icons',
  components: {
    PrimaryTitle
  }
}
</script>

<style lang="scss" module>
    .iconP{
    color: #5B6779;
    margin-bottom: 28px;
}
    .icons-list >>> .anticon {
        margin-right: 106px;
        font-size: 36px;
        a-icon{
            background-color: #fff;
        }
    }
    .iconP2{
        line-height: 56px;
        color: #5B6779;
    }
</style>
