<template>
  <div class="home">
    <DashboardPanel/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardPanel from '@/components/Dashboard.vue'
export default {
  name: 'HomeView',
  components: {
    DashboardPanel,
  }
}
</script>
