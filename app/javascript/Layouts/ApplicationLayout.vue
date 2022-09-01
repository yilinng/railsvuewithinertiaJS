<template>
  <main>
    <Navigation />
    <FlashMessages />
    <section class="container mx-auto">
      <slot />
    </section>
  </main>
</template>

<script>
import FlashMessages from '../Shared/FlashMessages.vue'
import Navigation from '../Shared/Navigation.vue'
export default {
  components: {
    FlashMessages,
    Navigation
  }
}
</script>
