import { mount } from '@vue/test-utils';
import Login from '../packs/Pages/Users/Login.vue';


  test('check login', async() => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Login);
    // Assert the rendered text of the component
    //expect(wrapper.html()).toBe() 
    await wrapper.get('input[id="email"]').setValue('test@test.com') 
    await wrapper.get('input[id="password"]').setValue('test')
    await wrapper.get('button[type="submit"]').trigger('click')

    expect(wrapper.find('.text-red-500').exists()).toBe(false)
  })
