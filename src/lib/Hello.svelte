<script>
    console.log(`Hello Svelte!`)
    const name = 'Svelte';

    const teknohole = 'https://teknohole.com/static/assets/images/Teknohole.png';
</script>

<style>
    h1 {
        color: red;
    }
</style>

<h1>Hello Svelte!</h1>
<h1>Hello {name.toUpperCase()}!</h1>
<img src="{teknohole}" alt="Logo Teknohole">