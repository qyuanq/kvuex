<template>
    <div>
        <p>{{count}}</p>
        <p>{{a}}</p>
        <!-- <p>{{$store.getters['a/score']}}</p> -->
        <p>{{score}} <span>{{sum}}</span></p>
        <button @click="add(2)">add</button>
        <button @click="addAsync()">async</button>
    </div>
</template>

<script>
import {mapState,mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
        }
      },
    methods:{
        add(num){
            this.$store.commit("a/add",num);
        },
        // addAsync(num){
        //     this.$store.dispatch("a/addAsync");
        // }
        ...mapActions('a',['addAsync'])
      },
      computed:{
          ...mapState('a',['count','a']),
          ...mapGetters('a',['score','sum'])
      }
    }
</script>

<style scoped>

</style>
