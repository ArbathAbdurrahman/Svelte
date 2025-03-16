import { mount } from 'svelte'
import Counter from '../lib/Counter.svelte'

const app = mount(Counter, {
  target: document.getElementById('counter'),
})

export default app
