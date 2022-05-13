<template>
  <div class="mt-6">
    <FlashMessages />
    <h2 class="text-2xl text-center">Notes</h2>
    <Link href="/notes/new" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Note</Link>
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
            <Link :href="$route('note.id')" class="text-blue-700 mr-2">Show</Link>
            <Link href="/notes/edit" class="text-green-700 mr-2">Edit</Link>
            <a href="#" @click="onDelete(note.id)" class="text-red-700">Delete</a> <!-- add this link -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Layout from '../../../Layouts/ApplicationLayout.vue'
import FlashMessages from '../../../Shared/FlashMessages.vue'
import { Link } from '@inertiajs/inertia-vue3'
  export default {
    components: {
      layout: Layout,
      FlashMessages,
      Link
    },
    props: {
      notes: {
        type: Array,
        required: true,
      }
    },
    methods: {
      onDelete(id) {
        this.$inertia.delete(this.$routes.note(id), {
          onBefore: () => confirm('Are you sure you want to delete this note?'),
        })
      }
    }  
  }
</script>