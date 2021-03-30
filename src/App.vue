<template>
  <div id="app">
    <h1 class='title-app'>Журнал контактов</h1>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',

}
</script>
<style lang="scss">
@import './assets/nullstyle.scss';

body{
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container{
  max-width: 1040px;
  padding: 0 10px;
  margin: 0 auto;
}
.title-app{
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin: 10px 0 50px;
}
</style>
