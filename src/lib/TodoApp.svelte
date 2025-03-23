<script>
  import EditTodo from "./EditTodo.svelte";
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

    let data = $state([])
    let name = $state("")
    let id = 0;

    // function remove(){
    //     task.shift();
    // }

    // Event
    function add(e){
        e.preventDefault();
        data.push({
            id : id++,
            name: name,
        });
         name= "";
    }

    function remove(id) {
        data = data.filter((todoo)=> todoo.id !== id);
    }

    function edit(id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = {edit:true, ...data[i]};
            }
        }
    }

    function onEdit(id, name){
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = {id, name, edit:false};
            }
        }
    }

</script>

<!-- <button onclick="{remove}">Remove</button> -->

<form action="">
    <input type="text" id="todo" bind:value={name}>
    <button onclick="{add}">Add</button>
</form>

<ul>
    {#each data as todoo(todoo.id)}
    <li>
        {#if todoo.edit}
            <EditTodo id={todoo.id} name={todoo.name} onedit={onEdit}/>
        {:else}
        <Todo {...todoo}/>
        <button onclick="{()=> edit(todoo.id)}">Edit</button>
        <button onclick="{() => remove(todoo.id)}">Delete</button>
        {/if}
    </li>  
    {/each}
</ul>

<ul>
    <!-- perulangan di svelte selalu gunakan id  -->
    {#each task as todo(todo.id)} 
    <li><Todo {...todo}/></li>
    {/each}
</ul>