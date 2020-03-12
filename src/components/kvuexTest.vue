<template>
    <div>
        <!-- <p>{{$store.state.count}}</p> -->
        <p>{{count}}</p>
        <p>{{score}}</p>
        <!-- <p>{{$store.getters.score}} <span>{{sum}}</span></p> -->
        <button @click="add(2)">add</button>
        <button @click="addAsync()">async</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
        }
      },
    methods:{
        add(num){
            this.$store.commit("add",num);
        },
        addAsync(num){
            this.$store.dispatch("addAsync");
        }
      },
      computed:{
          count(){
              return this.$store.state.count;
          },
          a(){
              return this.$store.state.a;
         },
         score(){
              return this.$store.getters.score; 
         }

      }
    }
</script>

<style scoped>

</style>
