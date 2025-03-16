import { mount } from 'svelte'
import GlobalCounter from '../lib/GlobalCounterApp.svelte'

const app = mount(GlobalCounter, {
  target: document.getElementById('app'),
})

export default app
