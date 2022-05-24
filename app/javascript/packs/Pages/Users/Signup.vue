<template>
  <div class="mt-5">
    <FlashMessages />
    <h2 class="text-2xl text-center">Signup</h2>
    <NoteForm v-model:form="form" @submitForm="onSubmit($event)" signup="signup"/>
  </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../../Layouts/ApplicationLayout.vue'
import FlashMessages from '../../../Shared/FlashMessages.vue'
import NoteForm from './Form'

  export default {
    components: {
      layout: Layout,
      FlashMessages,
      NoteForm
    },
    // Using a render function
    layout: (h, page) => h(Layout, () => child),

    // Using the shorthand
    layout: Layout,

    props: {
      note: {
        type: Object
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
        Inertia.post('/signup', data, {
          onError: (errors) => console.log(errors),
          onSuccess: (page) => console.log(page)
        })
      }
    }
  }
</script>