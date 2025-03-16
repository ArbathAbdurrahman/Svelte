import { mount } from 'svelte'
import Hello from '../lib/Hello.svelte'

const app = mount(Hello, {
  target: document.getElementById('hello'),
})

export default app
