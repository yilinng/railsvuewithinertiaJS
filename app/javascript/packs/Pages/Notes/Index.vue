<template>
  <div class="mt-6">
    <FlashMessages />
    <h2 class="text-2xl text-center my-3">Notes</h2>
    <Link href="/notes/new" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">New Note</Link>
    <Link href="/" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Home</Link>
    <table class="table-auto bg-white mx-auto w-full mt-4 shadow">
      <thead>
        <tr>
          <th class="border px-4 py-2">Title</th>
          <th class="border px-4 py-2">Content</th>
          <th class="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes" :key="note.id">
          <td class="border px-4 py-2">{{ note.title }}</td>
          <td class="border px-4 py-2">{{ note.content}}</td>
          <td class="border px-4 py-2">Show</td>
           <td class="border px-4 py-2">
            <Link :href="noteShow(note)" class="text-blue-700 mr-2">Show</Link>
            <Link :href="noteEditShow(note)" class="text-green-700 mr-2">Edit</Link>
            <button @click="onDelete(note)" class="text-red-700">Delete</button> <!-- add this link -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../../Layouts/ApplicationLayout.vue'
import FlashMessages from '../../../Shared/FlashMessages.vue'
import { Link } from '@inertiajs/inertia-vue3'

  export default {
    components: {
      layout: Layout,
      FlashMessages,
      Link
    },
    // Using a render function
    layout: (h, page) => h(Layout, () => child),

    // Using the shorthand
    layout: Layout,

    props: {
      notes: {
        type: Array,
        required: true,
      }
    },
    methods: {
      onDelete(note) {
        Inertia.delete(this.$route.note_path(note.id), {
          onBefore: () => confirm('Are you sure you want to delete this note?'),
          onSuccess: (page) => console.log(page) 
        })
      }, 
      noteShow(note) {
        return this.$route.note_path(note.id)
      },
      noteEditShow(note) {
        return this.$route.edit_note_path(note.id)
      }  
    }
  }
</script>