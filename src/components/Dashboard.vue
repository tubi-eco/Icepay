<template>
  <b-container fluid="lg">
    <h1>{{ $t('tableTitle', { tableTitle: 'Transactions' }) }} </h1>
    <b-row>
    <!-- search -->
     <SearchBar @searchFilter="searchFilter"></SearchBar>

    <!-- table -->
     <DataTable :filter="filter" :currentPage="currentPage"></DataTable>

     <!-- pagination -->
    <PaginationTable @changePage="changePage"></PaginationTable>
    </b-row>

     <!-- Info modal -->
   <ModalBox></ModalBox>
 </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalBox from './Modal.vue'
import PaginationTable from './Pagination.vue'
import DataTable from './Table.vue'
import SearchBar from './Searchbar.vue'
export default {
  name: "DashboardPanel",
  components:{
   ModalBox,
   PaginationTable,
   DataTable,
   SearchBar,
  },
  data(){
         return{
          perPage: 10,
          currentPage: 1,
          sortBy: '',
          sortDesc: false,
          sortDirection: 'asc',
          filter: '',
          filterOn: [],
         }
  },

  computed: {
     ...mapGetters([
      'items',
      'fields',
      'infoModal'
    ]),
  },
   filters: {
      replace: function (st, rep, repWith) {
        const result = st.split(rep).join(repWith)
        return result;
      }
  },
  methods: {
    searchFilter(text) {
      this.filter = text
    },
    changePage(page) {
      this.currentPage = page
    }
  },
   mounted() {
      this.$store.dispatch("getTransactions");
  },
};
</script>

<style lang="scss">
@import "@/styles/Dashboad.scss";
</style>