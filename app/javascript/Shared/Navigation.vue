<template>
  <nav class="w-full flex justify-between bg-white py-4 px-8">
    <div>
      <Link href="/" class="text-teal-500 font-bold">InertiaApp</Link>
    </div>
    <div class="font-medium navbar">
      <span v-if="!$page.props.auth.user">
        <Link href="/login" class="text-gray-600 hover:text-gray-800 mr-2">Login</Link>
        <Link href="/signup" class="text-gray-600 hover:text-gray-800">Signup</Link>
      </span>
      <span v-else>
        <Link href="/notes" class="text-gray-600 hover:text-gray-800 mr-2">Notes</Link>
        <button @click="onLogout" class="text-gray-600 hover:text-gray-800">Logout</button>
      </span>
    </div>
  </nav>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3'
import { Inertia } from '@inertiajs/inertia'

export default {
  components: {
    Link
  },
  methods: {
    onLogout() {
      Inertia.delete('/logout', {
        onBefore: () => confirm('Are you sure you want to logout?'),
        onSuccess: (page) => console.log('logout success', page)
      })
    }
  }
}
</script>
