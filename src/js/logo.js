import { mount } from 'svelte'
import Logo from '../lib/Logo.svelte'

const app = mount(Logo, {
  target: document.getElementById('logo'),
})

export default app
