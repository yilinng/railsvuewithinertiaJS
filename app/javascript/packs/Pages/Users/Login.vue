<template>
  <div class="mt-5">
    <h2 class="text-2xl text-center">
      Login
    </h2>
    <NoteForm
      v-model:form="form"
      @submitForm="onSubmit($event)"
    />
  </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../../Layouts/ApplicationLayout.vue'
//import FlashMessages from '../../../Shared/FlashMessages.vue'
import NoteForm from './Form'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    layout: Layout,
    //FlashMessages,
    NoteForm
  },
  // Using a render function
  layout: (h, page) => h(Layout, () => child),

  // Using the shorthand
  layout: Layout,

  props: {
    // eslint-disable-next-line vue/require-default-prop
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
      Inertia.post('/login', data, {
        onError: (errors) => console.log(errors)
        //onSuccess: (page) => Inertia.visit('/', { preserveScroll: true })
      })
    }
  }
}
</script>
