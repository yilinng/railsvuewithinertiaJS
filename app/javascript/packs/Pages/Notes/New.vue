<template>
  <div class="mt-5">
    <h2 class="text-2xl text-center">New Notes</h2>
    <NoteForm v-model:form="form" @submitForm="onSubmit($event)"/>
  </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../../Layouts/ApplicationLayout.vue'
//import FlashMessages from '../../../Shared/FlashMessages.vue'
import NoteForm from './Form'

  export default {
    components: {
      layout: Layout,
      //FlashMessages,
      NoteForm
    },
    // Using a render function
    layout: (h, page) => h(Layout, () => child),

    // Using the shorthand
    layout: Layout,

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
      onSubmit(data) {
        // This is in a meta tag located within the head tags
        const token = document.querySelector('meta[name="csrf-token"]').content
        Inertia.post('/notes', data, {
          onError: (errors) => console.log(errors),
          onSuccess: (page) => console.log(page)//Inertia.visit('/notes') 
        })
      }
    }
  }
</script>