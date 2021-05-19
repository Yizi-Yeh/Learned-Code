<template>
<!-- 從App傳入的 function -->
        <a @click="props.HandListShouw" class="title">課程列表</a>
</template>

<script>
export default {
    props:{
        HandListShouw:{
            type:Function,
            default:() => { }
        }
    },
    setup(props){

        return{props}
    }
}
</script>

<style>
.title {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: #42b983;
        font-weight: bold;
        color: darkslategray;
        font-size: 20px;
        border-bottom: 1px solid #d2d2d2;
      }
</style>