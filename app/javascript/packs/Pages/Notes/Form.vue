<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form
    class="rounded-sm bg-white shadow px-8 py-6"
    @submit.prevent="submitTo"
  >
    <label
      for="title"
      class="block text-gray-700 text-sm font-bold mb-2"
    >Title</label>
    <span
      v-if="titleErr"
      class="text-red-500 font-bold titleErr"
    >{{ titleErr }}</span>
    <span
      v-else
      class="my-4"
    />
    <input
      id="title"
      v-model="form.title"
      type="text"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
    <label
      for="content"
      class="block text-gray-700 text-sm font-bold mb-2"
    >Content:</label>
    <span
      v-if="contentErr"
      class="text-red-500 font-bold contentErr"
    >{{ contentErr }}</span>
    <textarea
      id="content"
      v-model="form.content"
      name="content"
      cols="30"
      rows="10"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
    <Link
      href="/notes"
      role="button"
      class="inline-block align-baseline font-bold ml-2 text-sm text-gray-500 hover:text-gray-800"
    >
      Cancel
    </Link>
  </form>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import { reactive, ref, watch } from 'vue'
import { Inertia } from '@inertiajs/inertia'

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Link
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  emits: ['submitForm'],
  setup(props, { emit }) {
    const form = reactive({
      title: props.form?.title || null,
      content: props.form?.content || null
    })

    let titleErr = ref('')
    let contentErr = ref('')

    watch(
      () => form.title,
      (title, prevTitle) => {
        if (title) {
          titleErr.value = ''
        }
      }
    )

    watch(
      () => form.content,
      (content, prevContent) => {
        if (content) {
          contentErr.value = ''
        }
      }
    )

    function submitTo() {
      if (!form.title) {
        titleErr.value = 'title have to input..'
        return
      }

      if (!form.content) {
        contentErr.value = 'content have to input..'
        return
      }
      emit('submitForm', form)
    }

    // eslint-disable-next-line vue/no-dupe-keys
    return { form, submitTo, titleErr, contentErr }
  }
}
</script>
