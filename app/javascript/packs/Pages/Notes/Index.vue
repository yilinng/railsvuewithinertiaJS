<template>
  <div class="mt-6 mx-auto w-full xl:w-4/5 flex flex-col">
    <h2 class="text-2xl text-center my-3">Notes</h2>

    <div class="linkList mx-auto">
      <Link href="/notes/new" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">New Note</Link>
      <Link href="/" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Home</Link>
    </div>
      <div class="bg-white w-full mt-4 shadow block md:hidden" v-for="note in notes" :key="note.id">
          <div class="flex justify-between">
            <span class="px-4 py-2 font-bold">Title</span>
            <span class="px-4 py-2">{{ truncateString(note.title, 30) }}</span>
          </div>
          <hr />
          <div class="flex justify-between">
            <span class="px-4 py-2 font-bold">Content</span>
            <span class="px-4 py-2">{{ truncateString(note.content, 35) }}</span>
          </div>
          <hr />
           <div class="flex justify-between">
            <span class="px-4 py-2 font-bold">Action</span>
            <span class="px-4 py-2"> 
              <Link :href="noteShow(note)" class="text-blue-700 mr-2">Show</Link>
              <Link :href="noteEditShow(note)" class="text-green-700 mr-2">Edit</Link>
              <button @click="onDelete(note)" class="text-red-700">Delete</button>
            </span>
          </div>
      </div>
      
      <table class="table-auto bg-white mx-auto mt-4 max-w-3xl shadow hidden md:block">
        <thead>
          <tr>
            <th class="border px-4 py-2 text-xl w-96">Title</th>
            <th class="border px-4 py-2 text-xl w-96">Content</th>
            <th class="border px-4 py-2 text-xl w-96">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="note in notes" :key="note.id">
            <td class="border px-4 py-2">{{ truncateString(note.title, 20) }}</td>
            <td class="border px-4 py-2">{{ truncateString(note.content, 30) }}</td>
            <td class="border px-4 py-2">
                <Link :href="noteShow(note)" class="text-blue-700 mr-2">Show</Link>
                <Link :href="noteEditShow(note)" class="text-green-700 mr-2">Edit</Link>
                <button @click="onDelete(note)" class="text-red-700">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

  </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../../Layouts/ApplicationLayout.vue'
//import FlashMessages from '../../../Shared/FlashMessages.vue'
import { Link } from '@inertiajs/inertia-vue3'

  export default {
    components: {
      layout: Layout,
      //FlashMessages,
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
      },
      truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }  
    }
  }
</script>