 <template>
      <b-row class="justify-content-center">
        <b-col sm="7" md="2" class="my-1">
          <b-pagination
          :total-rows="rows"
          :per-page="perPage"
          v-model="currentPage"
          aria-controls="#table-list"
          @input="$emit('changePage', currentPage)"
          >
          </b-pagination>
        </b-col>
        </b-row>
</template>
  
<script>
import { mapGetters } from 'vuex'
export default {
    name:'PaginationTable',
      data(){
         return{
          perPage: 10,
          currentPage: 1,
          sortBy: '',
          sortDesc: false,
          sortDirection: 'asc',
          filter: null,
          filterOn: [],
         }
  },
    computed:{
       ...mapGetters([
      'items',
    ]),
     sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
      rows() {
        return this.items.length
      },
    },
    methods:{
        onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
    },
}
</script>

<style lang="scss">
@import '@/styles/Pagination.scss'
</style>
