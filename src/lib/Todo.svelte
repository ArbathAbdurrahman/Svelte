<!-- <script>
    const {id, name, done} = $props();

</script>

{#if done}
<strike>{id} - {name}</strike>
{:else}
    {id} - {name}
{/if} -->

<script>
    const {id, name} = $props();
</script>

{id} - {name}