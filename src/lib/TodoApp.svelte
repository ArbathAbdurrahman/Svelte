<script>
    import Todo from "./Todo.svelte";
    const task = $state([
        {
        id: 1,
        name: 'Belajar Svelte',
        done: true
    },
        {
        id: 2,
        name: 'Belajar Svelte 2',
        done: true
    },
        {
        id: 3,
        name: 'Belajar Svelte 3',
        done: false
    },
    ])

    function remove(){
        task.shift();
    }

</script>

<button onclick="{remove}">Remove</button>

<ul>
    <!-- perulangan di svelte selalu gunakan id  -->
    {#each task as todo(todo.id)} 
    <li><Todo {...todo}/></li>
    {/each}
</ul>