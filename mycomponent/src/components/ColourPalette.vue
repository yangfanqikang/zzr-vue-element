<template lang="html">
    <div :class="$style.colourPalette">
        <PrimaryTitle pTitle="Colour Palette"></PrimaryTitle>
        <div>
            <ColorBlock v-for="(item,index) in items" :key="index" :title="item.title" :toneText="item.toneText" :bgColor="item.bgColor"></ColorBlock>
        </div>
    </div>
</template>

<script>
import ColorBlock from './ColorBlock'
import PrimaryTitle from './PrimaryTitle'
export default {
  name: 'ColourPalette',
  components: {
    ColorBlock,
    PrimaryTitle
  },
  data () {
    return {
      items: [
        {bgColor: '#5ccadc', toneText: '5ccadc', title: '$menu-item'},
        {bgColor: '#ffff9e', toneText: 'ffff9e', title: '$logo'},
        {bgColor: '#99565e', toneText: '99565e', title: '$news-headline'},
        {bgColor: '#c86e5d', toneText: 'c86e5d', title: '$icons'},
        {bgColor: '#ff9879', toneText: 'ff9879', title: '$label-topbar'},
        {bgColor: '#cdb343', toneText: 'cdb343', title: '$label-picture'},
        {bgColor: '#f8d77d', toneText: 'f8d77d', title: '$label-selectbox'},
        {bgColor: '#437d99', toneText: '437d99', title: '$footer-link'},
        {bgColor: '#FFFFFF', toneText: 'FFFFFF', title: '$text-colour'},
        {bgColor: '#9ba3a9', toneText: '9ba3a9', title: '$headline-colour'},
        {bgColor: '#64635e', toneText: '64635e', title: '$paragraph'},
        {bgColor: '#e55700', toneText: 'e55700', title: '$highlight'},
        {bgColor: '#f5a000', toneText: 'f5a000', title: '$searched-term'},
        {bgColor: '#39b54a', toneText: '39b54a', title: '$success-link'},
        {bgColor: '#7da7d9', toneText: '7da7d9', title: '$help-colour'}
      ]
    }
  }
}
</script>

<style lang="scss" module>
    .colourPalette{
        >div{
            display: flex;
            flex-flow: row wrap;
            >div{
                margin-right: 40px;
            }
        }
        >.colorItem{
            width: 100px;
            height: 150px;
        }
    }
</style>
