<template lang="html">
    <div :class="$style.viRoot">
        <div :class="$style.inner">
            <h3>Styleguide</h3>
            <p>Dashboard.com  |  Version 1.0.2</p>
            <ColourPalette></ColourPalette>
            <Typography></Typography>
            <Examples></Examples>
            <Icons></Icons>
            <Forms></Forms>
        </div>
    </div>
</template>

<script>
import ColourPalette from '../components/ColourPalette'
import Typography from '../components/Typography'
import Examples from '../components/Examples'
import Icons from '../components/Icons'
import Forms from '../components/Forms/Forms'
export default {
  name: 'VisionStandard',
  components: {
    ColourPalette,
    Typography,
    Examples,
    Icons,
    Forms
  }
}
</script>

<style lang="scss" module>
    @import "../assets/css/element.scss";
    .viRoot{
        width: 100%;
        background-color: #1b2431;
        >.inner{
            width: 80%;
            margin: 0 auto;
            padding-top: 109px;
            text-align: left;
            >h3{
                color: #fff;
                font-size:36px;
                font-family:SourceSansPro-Semibold;
                font-weight:600;
            }
            >p{
                color: #7C8CA5;
                line-height:40px;
            }
        }
    }
</style>
