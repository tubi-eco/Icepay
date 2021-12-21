<template>
     <b-row class="justify-content-left searchBar">
       <b-col lg="12" class="my-1">
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              :placeholder=" $t('searchText', { searchText: 'Type your search here' })"
              @input="$emit('searchFilter', filter)"
              autocomplete="off"
            ></b-form-input>
          </b-input-group>
      </b-col>
     </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name:"SearchBar",
    data(){
         return{
          filter: null,
          filterOn: [],
         }
  },
    computed:{
       ...mapGetters([
        'items',
        'fields'
      ]),
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/SearchBar.scss'
</style>