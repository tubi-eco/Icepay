<template>
  <div class="events">
    <b-button size="sm" variant="outline-secondary" @click="$router.go(-1)"> Back</b-button>
    <h1>   {{ $t('eventText', { eventText: 'Events' }) }}</h1>
    <div v-for="item in items" :key="item.id">
      <template v-if="$route.params.id === item.id">
       <div class="eventsID"><b> {{ $t('modalTitle', { modalTitle: 'Transaction ID' }) }} </b> <br>  {{item.id}} </div>
        <div v-for="(value, key) in item.events" :key="key">
            <div class="eventDetail">
                {{ value.type.replace('Transaction', 'Transaction ') }} : {{ value.dateTime.replace('T', ' / ') }}<br>
            </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
     name: 'EventDetails',
    computed:{
       ...mapGetters([
        'items',
        'fields'
      ]),
    },
    methods:{
    },
  
}
</script>

<style lang="scss" scoped>
@import "@/styles/Events.scss"
</style> 
