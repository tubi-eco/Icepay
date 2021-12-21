<template>
     <nav>
       <div class="header">
        <div class="container-lg">
            <router-link  class="logo" to="/">
            <img alt="Icepay logo" src="@/assets/logo_icepay.svg">
          </router-link>
          <SwitchLanguage/>
        </div>
       </div>
      <router-view/>
    </nav>
</template>

<script>
import SwitchLanguage from '@/components/SwitchLanguage.vue'

export default {
    name:'HeaderComponent',
    components:{
      SwitchLanguage
    }
}
</script>
<style lang="scss">
@import '@/styles/Header.scss'
</style>
