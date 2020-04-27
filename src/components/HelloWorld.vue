<template>
  <div class="hello">
    <router-link to="/foo">Foo Component</router-link>
    <router-link to="/bar">Bar Component</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  margin: 10px;
}
</style>
