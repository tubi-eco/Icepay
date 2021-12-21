<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>

  </div>
</template>
<script>

import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default {
  components:{
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>