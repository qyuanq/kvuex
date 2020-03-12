// 1.维护状态state
// 2.修改状态commit
// 3.业务逻辑控制dispatch
// 4.状态派发getter
// 5.实现state响应式
// 6.插件
// 7.混入

let Vue;    //当使用Vue.use时，传入vue构造函数，为上述Vue变量赋值，而import引入会打包进来
function install(_Vue){
    Vue = _Vue;
    Vue.mixin({ // 混入：把store选项指定到Vue原型上
        beforeCreate(){
            // root元素挂有store,把store挂载到Vue原型上,不做判断的话，beforeCreate将在所有组件创建时都会执行，从而挂载到所有组件上，而我只想在根组件上挂载
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}

class Store{
    // options:  {state:{count:0}, mutations: {count(state){}}}
    constructor(options){
        // state利用Vue实现响应式，与Vue存在紧耦合关系
        this.state = new Vue({
            data : options.state
        });
        // 初始化mutaions  actions
        this.mutations = options.mutations || {};
        this.actions = options.actions || {};

        options.getters && this.handleGetters(options.getters);
    }
    commit = (type,arg) => {
        // this  指向Store实例
        const fn = this.mutations[type];    //this.mutations[type] 变更函数 (也就是kindex.js中mutations中的add函数)
        fn(this.state,arg);
    }
    dispatch = (type,arg) => {
        const fn = this.actions[type];
        return fn({commit:this.commit,state:this.state},arg);   //因为actions返回的是个promise,dispacth(参数是上下文)
    }

    
    handleGetters(getters){ // getters 配置项
        this.getters = {};  //Store实例上的getters
        // Object.keys(obj) 参数是对象，返回值是对象所有可枚举属性的字符串数组。
        //可枚举：js中原型属性一般是不可枚举的，而自己定义的属性一般是可枚举的；自定义对象的属性是可枚举的。
        //{getters: {score(state){return state.xx}}} =>  Object.keys(getters)  返回['score','其他getters方法']
        Object.keys(getters).forEach(key  => {
            // Object.defineProperty(obj,prop,descriptor) 此方法定义新属性或修改原有属性  参数1目标对象  参数2需定义或修改的参数名字  参数3目标属性所拥有的特性
            Object.defineProperty(this.getters,key,{
                get : () => {
                    return getters[key](this.state);
                }
            })
        })
    }
}
// 这两个导出的就是vuex 所以kindex.js => new Vuex.Store({})
export default {Store,install}