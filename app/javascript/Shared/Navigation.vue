<template>
  <nav class="w-full flex justify-between bg-white py-4 px-8">
    <div>
      <span class="text-teal-500 font-bold">InertiaApp</span>
    </div>
    <div class="font-medium">
      <Link href="/" class="text-gray-600 hover:text-gray-800 mr-2">Home</Link>
      <Link href="/notes" class="text-gray-600 hover:text-gray-800">Notes</Link>
    </div>
  </nav>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: {
    Link
  }
}
</script>