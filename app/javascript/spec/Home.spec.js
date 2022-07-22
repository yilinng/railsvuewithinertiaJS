import { mount } from '@vue/test-utils';
import Home from '../packs/Pages/Home.vue';

test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(Home)

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Home Page')
})
