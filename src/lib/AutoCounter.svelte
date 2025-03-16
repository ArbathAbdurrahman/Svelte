<script>
    let counter = $state(0)
    let interval = $state(1000)

    function increment() {
        interval += 1000;
    }

    // menjalankan fungsi setInterval setiap kali ada perubahan state
    $effect(()=> {
        const id = setInterval(()=>{
            counter++
        }, interval)
        return () => clearInterval(id)
    })
</script>

<h1>Counter: {counter}</h1>

<button onclick="{increment}">increment Interval: {interval} ms</button>