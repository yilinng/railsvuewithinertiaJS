<template>
  <div class="mt-5">
    <FlashMessages />
    <h2 class="text-2xl text-center">New Notes</h2>
    <NoteForm/>
  </div>
</template>

<script>
import Layout from '../../../Layouts/ApplicationLayout.vue'
import FlashMessages from '../../../Shared/FlashMessages.vue'
import NoteForm from './Form'
  export default {
    components: {
      layout: Layout,
      FlashMessages,
      NoteForm
    },
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        form: this.note
      }
    },
    methods: {
      submit() {
        // This is in a meta tag located within the head tags
        const token = document.querySelector('meta[name="csrf-token"]').content
        this.$inertia.post('/notes', this.form,
         {
          headers: { 'X-CSRF-Token': token }
         })
      }
    }
  }
</script>