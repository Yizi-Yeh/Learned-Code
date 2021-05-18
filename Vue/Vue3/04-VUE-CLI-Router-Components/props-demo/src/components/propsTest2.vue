<template>
  <h1> {{props.msg}}</h1>
</template>

<script>
export default {
    // 因傳遞資料時需要確定型別，故改以物件傳遞
    // 傳進來的參數是字串
    // 若傳錯型別會有 warning(但扔然會呈現)
    props:{
       str:{
       type:String,
       default:"default data"},

       bool:{
        type:Boolean,
        default:true
       },

       num:{
        type:Number,
        default:0
       },
       arr:{
           type:Array,
           default: () => []
       },

       obj:{
           type:Object,
           default: () => ({})
       },

       handclickfn:{
           type:Function,
           default:() => {}
       }
       
    },
    
    setup(props){
        return{
         props
        }
    }
}
</script>

<style>
h1{
    color: antiquewhite;
    font-size: 50px;
    text-align: center;
}
</style>