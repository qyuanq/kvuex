export default{
    namespaced:true,
    state: {
        count:0,
        a:12
      },
      mutations: {
        add(state,num = 1){
          state.count += num;
        }
      },
      getters:{
        score(state){
          return `共 ${state.count}`;
        },
        sum(state){
          return state.count + state.a;
        }
      },
      actions: {
        addAsync({commit}){
          setTimeout(function(){
            commit("add");
          },1000);
        }
      },
      modules: {
      }
}