<template lang="html">
    <div :class="$style.inputClassEm">
        <p>InputEmpty</p>
        <input type="text" placeholder="Type Word">
        <p>Input selected</p>
        <input type="text" placeholder="Type Word">
        <p>Input typing</p>
        <input type="text" placeholder="Type Word">
    </div>
</template>

<script>
export default {
  name: 'InputEmpty'
}
</script>

<style lang="scss" module>
    .inputClassEm{
        >p{
            margin-bottom: 15px;
            margin-top: 15px;
        }
        >input{
            border-radius: 5px;
            width:245px;
            height:36px;
            background:rgba(39,49,66,1);
            border:1px solid rgba(49,61,79,1);
            border-radius:4px;
            padding-left: 15px;
            color: #fff;
            &::-webkit-input-placeholder{
                color: #7C8CA5;
            }
            &:focus{
                border: 1px solid #259AF3;
            }
        }
        >input:nth-child(2){
            border: 1px solid #259AF3;
        }
    }
</style>
