export default {
    // 透過 namespaced，可在不同module中使用相同名稱
    namespaced:true,
    states:{
        token:''
    },
    actions:{
        HandSetToken(context,token){
            context.commit('setToken',token)
        }
    },
    mutatuins:{ 
        setToken(state,token){
            state.token = token
        }
    },
    getters:{
        // function 
        getToken(state){
            state.token
        }
    },
}