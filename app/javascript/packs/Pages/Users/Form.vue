<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form
    class="rounded-sm bg-white shadow px-8 py-6 mx-auto w-full xl:w-2/3"
    @submit.prevent="submitTo"
  >
    <span v-if="name">
      <label
        for="username"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Username</label>
      <span
        v-if="usernameErr"
        class="text-red-500 font-bold"
      >{{ usernameErr }}</span>
      <span
        v-else
        class="my-4"
      />
      <input
        id="username"
        v-model="form.username"
        type="text"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
    </span>

    <label
      for="email"
      class="block text-gray-700 text-sm font-bold mb-2"
    >Email</label>
    <span
      v-if="emailErr"
      class="text-red-500 font-bold"
    >{{ emailErr }}</span>
    <span
      v-else
      class="my-4"
    />
    <input
      id="email"
      v-model="form.email"
      type="email"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >

    <label
      for="password"
      class="block text-gray-700 text-sm font-bold mb-2"
    >Password</label>
    <span
      v-if="passwordErr"
      class="text-red-500 font-bold"
    >{{ passwordErr }}</span>
    <span
      v-else
      class="my-4"
    />
    <input
      id="password"
      v-model="form.password"
      type="password"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >

    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
    >
      Submit
    </button>
    <Link
      href="/"
      role="button"
      class="inline-block align-baseline font-bold ml-2 text-sm text-gray-500 hover:text-gray-800 mt-4"
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
      type: Object
    },
    signup: {
      type: String
    }
  },
  emits: ['submitForm'],
  setup(props, { emit }) {
    console.log(props)

    const form = reactive({
      email: props.form?.email || null,
      password: props.form?.password || null
    })

    let name = ref(false)
    let emailErr = ref('')
    let passwordErr = ref('')
    let usernameErr = ref('')

    if (props.signup) {
      name.value = true
      form['username'] = ''
    }

    watch(
      () => form.username,
      (username, prevUsername) => {
        if (username) {
          usernameErr.value = ''
        }
      }
    )

    watch(
      () => form.email,
      (email, prevEmail) => {
        if (email) {
          emailErr.value = ''
        }
      }
    )

    watch(
      () => form.password,
      (password, prevPassword) => {
        if (password) {
          passwordErr.value = ''
        }
      }
    )

    function submitTo() {
      if (!form.email) {
        emailErr.value = 'email have to input..'
        return
      }

      if (!form.password) {
        passwordErr.value = 'password have to input..'
        return
      }
      emit('submitForm', form)
    }

    // eslint-disable-next-line vue/no-dupe-keys
    return { form, submitTo, name, emailErr, passwordErr, usernameErr }
  }
}
</script>
