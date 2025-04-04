import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        hello: 'hello.html',
        logo: 'logo.html',
        counter: 'counter.html',
        sayHello: 'sayHello.html',
        globalCounter: 'globalCounter.html',
        user: 'user.html',
        todo: 'todo.html',
        article: 'article.html'
      }
    }
  }
})
