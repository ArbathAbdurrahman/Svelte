import { mount } from 'svelte'
import AutoCounter from '../lib/AutoCounter.svelte'
import UserApp from '../lib/UserApp.svelte'
import TodoApp from '../lib/TodoApp.svelte'

const app = mount(TodoApp, {
  target: document.getElementById('app'),
})

export default app
