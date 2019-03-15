<template lang="html">
    <div :class="$style.aclass">
        <ArticleE v-for="(item, index) in items" :key="index" :title="item.title" :size="item.size" :des="item.des" :p-article="item.pArticle"></ArticleE>
    </div>
</template>

<script>
import Panel from './Panel'
import ArticleE from './ArticleE'
export default {
  name: 'Example1',
  components: {
    Panel,
    ArticleE
  },
  data () {
    return {
      items: [
        {pArticle: 'example1', title: 'Who are we?', size: '36PX', des: 'We’re a small team of people on a mission to make it easy to connect the services we use everyday. Dashboard provides a platform for technical teams to build powerful workflows...'},
        {pArticle: 'example2', title: 'Use Cases', size: '26PX', des: ' The most advanced integration platform for connecting up the tools you use every day'},
        {pArticle: 'example3', title: 'Powerful', size: '20PX', des: 'Build complex integrations that are more than one way push with our advanced workflow editor.'},
        {pArticle: 'example3', title: 'Powerful', size: '20PX', des: 'Build complex integrations that are more than one way push with our advanced workflow editor.'},
        {pArticle: 'example3', title: 'Powerful', size: '20PX', des: 'Build complex integrations that are more than one way push with our advanced workflow editor.'},
        {pArticle: 'example3', title: 'Powerful', size: '20PX', des: 'Build complex integrations that are more than one way push with our advanced workflow editor.'}
      ]
    }
  }
}
</script>

<style lang="scss" module>
    .aclass{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
</style>
