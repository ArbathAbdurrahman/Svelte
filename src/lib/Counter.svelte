<script>
  let count = $state(0)
  let double = $derived(count * 2) // akan bereaksi terhadap state

  $inspect(count).with((type,value) => 
  console.log(type, value)); // Menapilkan log dengan inspect hanya jalan pada mode development

  const increment = () => {
    count += 1
  }
</script>

<h1>Counter: {count}</h1>
<h1>Double: {double}</h1>

<button onclick={increment}>
  count is {count}
</button>
