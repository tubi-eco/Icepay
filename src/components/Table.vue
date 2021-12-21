<template>
<div>
    <b-table
      :items="mappedItems"
      id="table-list"
      :tbody-tr-class="rowClass"
      responsive
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered">
       <template #cell(eventButton)="row">
        <b-button size="sm" v-b-modal.modal-center  @click="info(row.item, row.index, $event.target);" :id="row.item.id"  class="events">
          {{ $t('eventText', { eventText: 'Events' }) }}
        </b-button>
        <b-button size="sm" v-b-toggle.collapse-1 @click="row.toggleDetails" class="eventToggle" >
          {{ row.detailsShowing ? '-' : '+' }} 
        </b-button>
        <b-button size="sm" variant="outline-info" @click="$router.push({name: 'events', params: {id: row.item.id} })" class="eventDetails">></b-button>
      </template>
      <template #row-details="row">
         <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item.events" :key="key">{{ value.type.replace('Transaction', 'Transaction ') }} : {{ value.dateTime.replace('T', ' / ') }}</li>
            </ul>
        </b-card>
        </b-collapse>
      </template>
    </b-table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:'DataTable',
  components:{
  },
  props: ['filter', 'currentPage'],
   data(){
         return{
          perPage: 10,
          sortBy: '',
          sortDesc: false,
          sortDirection: 'asc',
          filterOn: [],
          fields: [
            { key: "id", label: 'ID', sortable: true },
            { key: "paymentMethod", label: 'Payment Method', sortable: true },
            { key: "amount", label: 'Amount', sortable: true },
            { key: "status",  label: 'Status',sortable: true },
            { key: "requestTimestamp", label: 'Request Timestamp', sortable: true },
            { key: "eventButton", label: '', sortable: false },
          ],
         }
  },
  computed:{
    ...mapGetters([
      'items',
      'infoModal'
    ]),
     mappedItems() {
      return this.items.map((item) => {
        return {
          id: item.id, 
          paymentMethod: item.paymentMethod.replace('SEPACREDITTRANSFER', 'SEPA CREDIT TRANSFER'),
          amount:item.currencyCode.replace('EUR', '€').replace('USD', '$')+ ' ' + item.amount.toFixed(2),
          status: item.status,
          requestTimestamp: item.requestTimestamp.replace('T', ' / '),
          events:item.events,
        };
      });
    },
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

      replace(st, rep, repWith) {
        const result = st.split(rep).join(repWith)
        return result;
      },
  },
  methods:{
       rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status == 'COMPLETED') return 'table-success'
        else{
          return 'table-danger'
        }
      },
        onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length},
        
        info(item, index, button) {
          this.infoModal.title = item.id
          this.infoModal.content = JSON.stringify(item.events , null, 2)
          this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
  },

  
}
</script>
