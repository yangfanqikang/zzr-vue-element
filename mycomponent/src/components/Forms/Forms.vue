<template lang="html">
    <div>
        <PrimaryTitle pTitle="Forms"></PrimaryTitle>
    </div>
</template>

<script>
import PrimaryTitle from '../PrimaryTitle'

export default {
  name: 'Forms',
  components: {
    PrimaryTitle
  },
  data () {
    return {
      labelCol: {
        xs: {span: 24},
        sm: {span: 5}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12}
      }
    }
  }
}
</script>

<style lang="scss" module>

</style>
