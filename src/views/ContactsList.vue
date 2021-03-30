<template>
  <div class='container'>
      <add-new-contact/>
    <section class="contacts-inner">
      <contact-items v-if="ALL_CONTACTS.length"/>
      <div v-else style="font-size: 18px; text-align: center;">Добавьте новый контакт...</div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import DeletePopup from '../components/popups/DeletePopup.vue';
import AddNewContact from '../components/ContactsList/AddNewContact.vue';
import ContactItems from '../components/ContactsList/ContactItems.vue';

export default {
  name: 'HomePage',
  components: {AddNewContact, ContactItems, DeletePopup, AddNewContact},
  computed: {
    ...mapGetters(['ALL_CONTACTS'])
  }
}
</script>

<style lang='scss' scoped>
.contacts{
  &__inner{
    width: 80%;
    margin: 0 auto;
  }
}
</style>
