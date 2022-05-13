<template>
  <form @submit.prevent="submit" class="rounded-sm bg-white shadow px-8 py-6">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
    <input type="text" id="title" v-model="form.title" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
    <textarea name="content" id="content" cols="30" rows="10" v-model="form.content" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea> 
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    <Link href="/notes" role="button" class="inline-block align-baseline font-bold ml-2 text-sm text-gray-500 hover:text-gray-800">Cancel</Link>
  </form>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import { reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'

  export default {
    components: {
      Link
    },
    setup () {
      const form = reactive({
        title: null,
        content: null
      })

      function submit() {
        const token = document.querySelector('meta[name="csrf-token"]').content
        Inertia.post('/notes', form,
         {
          headers: { 'X-CSRF-Token': token }
         })
      }

      return { form, submit }
    }
  }
</script>