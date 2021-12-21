<template>
   <div>
      <b-modal :id="infoModal.id"  :title="infoModal.title" ok-only @hide="resetInfoModal" centered>
        <div v-for="(item, index) in items" :key="index.id"> 
         <template v-if="infoModal.title === item.id">
           <b class="title">{{ $t('modalTitle', { modalTitle: 'Transaction ID' }) }}</b>
           {{item.id}}
           <hr>
              <div v-for="(value, key) in item.events" :key="key.id">
                  <div class="eventDetail">
                      {{ value.type.replace('Transaction', 'Transaction ') }} : {{ value.dateTime.replace('T', ' / ') }}<br>
                  </div>
              </div>
            </template>
          </div>
          </b-modal>
        </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'ModalBox',
    
    computed:{
      ...mapGetters([
         'items',
         'fields',
        'infoModal'
      ]),
    },
  methods:{
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
    },
}
</script>
<style lang="scss">
@import '@/styles/Modal.scss'
</style>
