<template>
  <div class="mt-5">
    <h2 class="text-2xl text-center">
      Edit Note
    </h2>
    <note-form
      v-model:form="form"
      @submitForm="onSubmit($event)"
    />
  </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import NoteForm from './Form'
import Layout from '../../../Layouts/ApplicationLayout.vue'
export default {
  components: {
    NoteForm
  },
  // Using a render function
  layout: (h, page) => h(Layout, () => child),

  // Using the shorthand
  layout: Layout,
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
      Inertia.put(this.$route.note_path(this.note.id), data, {
        onError: (errors) => console.log(errors),
        onSuccess: (page) => console.log(page)
      })
    }
  }
}
</script>
