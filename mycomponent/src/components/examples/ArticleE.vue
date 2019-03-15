<template lang="html">
    <Panel :title="pArticle">
        <article>
            <h1>{{title}}</h1>
            <div>
                <p>{{size}}</p>
            </div>
            <p>{{des}}</p>
        </article>
    </Panel>
</template>

<script>
import Panel from './Panel'
export default {
  name: 'ArticleE',
  components: {
    Panel
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    des: {
      type: String,
      default: ''
    },
    pArticle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
    article{
        padding: 60px;
        border:1px solid rgba(49,61,79,0.4);
        border-radius:4px;
        background-color: #273142;
        margin-bottom: 20px;
        >h1{
            color: #fff;
        }
        >div{
            height: 36px;
            line-height: 36px;
            position: relative;
            font-size: 12px;
            left: -50px;
            color: #4FB5DD;
            display: inline-block;
            &:after{
                content: '';
                position: absolute;
                width:2px;
                height:36px;
                background:rgba(79,181,221,1);
                top: 0;
                right: -15px;
            }
        }
        >p{
            font-size: 16px;
            line-height: 24px;
            color: #fff;
        }
    }
</style>
