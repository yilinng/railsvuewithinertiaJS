// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'stylesheets/application'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import axios from 'axios'
import * as Routes from '../routes'
import * as Layout from '../Layouts/ApplicationLayout.vue'

axios.defaults.xsrfHeaderName = 'X-CSRF-Token'
InertiaProgress.init()

createInertiaApp({
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default
    page.layout = page.layout || Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) }).use(plugin)
    app.config.globalProperties.$route = Routes
    app.mount(el)
  }
})
