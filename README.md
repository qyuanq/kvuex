# vuex源码

> A Vue.js project

## Install

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Usage

> main.js

```
import store from './store/kindex'
```

> kindex.js

```
import Vuex from '../kvuex'
```

> App.vue

```
<template>
  <div id="app">
   <kvuexTest></kvuexTest>
  </div>
</template>

<script>
import kvuexTest from './components/kvuexTest'

export default {
  name: 'App',
  components:{kvuexTest}
}
</script>
```

