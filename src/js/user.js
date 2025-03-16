import { mount } from 'svelte'
import AutoCounter from '../lib/AutoCounter.svelte'
import UserApp from '../lib/UserApp.svelte'

const app = mount(UserApp, {
  target: document.getElementById('app'),
})

export default app
