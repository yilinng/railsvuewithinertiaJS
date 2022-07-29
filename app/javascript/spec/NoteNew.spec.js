import { mount } from '@vue/test-utils';
import New from '../packs/Pages/Notes/New.vue'

describe('Notes/New', () => {
  test('create note success', async() => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(New, {
      props: {
        note: {
          title: 'test here',
          content: '12345'
        }
      }
    });

    await wrapper.get('input[id="title"]').setValue('test from jest') 
    await wrapper.get('textarea').setValue(`You may have noticed `)
    await wrapper.get('button[type="submit"]').trigger('click')

    // Assert the rendered text of the component
    expect(wrapper.find('.text-red-500').exists()).toBe(false)
  })
/*
  test('create note not input title', async() => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(New, {
      props: {
        note: {
          title: '',
          content: '12345'
        }
      }
    });

    await wrapper.get('input[id="title"]').setValue('') 
    await wrapper.get('textarea').setValue(`You may have noticed`)
    await wrapper.get('button[type="submit"]').trigger('click')

    // Assert the rendered text of the component
    expect(wrapper.find('.text-red-500').exists()).toBe(true)
  })

  test('create note not input content', async() => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(New, {
      props: {
        note: {
          title: 'ssdgjklll',
          content: ''
        }
      }
    });

    await wrapper.get('input[id="title"]').setValue('test from jest')
    await wrapper.get('textarea').setValue('') 
    await wrapper.get('button[type="submit"]').trigger('click')

    // Assert the rendered text of the component
    expect(wrapper.find('.text-red-500').exists()).toBe(true)
  })
*/
})

