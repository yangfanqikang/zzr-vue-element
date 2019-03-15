<template lang="html">
    <div>
        <PrimaryTitle pTitle="Examples"></PrimaryTitle>
        <div :class="$style.example">
            <Example1></Example1>
        </div>
    </div>
</template>

<script>
import PrimaryTitle from './PrimaryTitle'
import Example1 from './examples/Example1'
export default {
  name: 'Examples',
  components: {
    PrimaryTitle,
    Example1
  }
}
</script>

<style lang="scss" module>

</style>
