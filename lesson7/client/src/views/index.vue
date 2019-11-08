<template>
  <div id="app">
    <v-header>
        <div class="headerint">
          <h3>校园超市</h3>
          <input type="text" placeholder="请输入">
        </div>
    </v-header>

    <main>
        <Home />
    </main>
    
    <v-footer>
        132
    </v-footer>
  </div>
</template>

<script>
import vHeader from '../components/header'
import vFooter from '../components/footer'
import Home from './home.vue'
export default {
    name:"Layout",
  components:{
    vHeader,
    vFooter,
    Home
  }
}
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
h3{
  text-align: center;
}
.headerint{
  width: 100%;
  border-bottom: 1px solid #000;
}
.headerint input{
  width: 100%;
  height: 24px;
  border:0;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main{
  width: 100%;
  flex:1;
}
</style>
