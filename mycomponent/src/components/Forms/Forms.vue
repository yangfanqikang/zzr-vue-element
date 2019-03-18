<template lang="html">
    <div>
        <PrimaryTitle pTitle="Forms"></PrimaryTitle>
        <div>
            <InputEmpty></InputEmpty>
        </div>
    </div>
</template>

<script>
import PrimaryTitle from '../PrimaryTitle'
import InputEmpty from './InputEmpty'
export default {
  name: 'Forms',
  components: {
    PrimaryTitle,
    InputEmpty
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
