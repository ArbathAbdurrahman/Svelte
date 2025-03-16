<script>
    console.log(`Hello Svelte!`)
    const name = 'Svelte';

    import Logo from "./Logo.svelte"; // import logo dari Logo

    const content = '<p>HTML apa adanya</p>'
</script>

<style>
    h1 {
        color: red;
    }
</style>

<h1>Hello Svelte!</h1>
<h1>Hello {name.toUpperCase()}!</h1>

<!-- Menggunakan template -->
<Logo/>
<Logo/>
<Logo/>
<Logo/>

{content}
{@html content}