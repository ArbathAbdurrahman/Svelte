<script>
    let person = $state({
        firstname: '',
        lastname:''
    })

    // Tidak ingin reactive, tetapi reactive pada variabel
    // let person = $stat.raw({
    //     firstname: '',
    //     lastname:''
    // })

    function sayHello(){
        person.firstname = document.getElementById("firstname").value;
        person.lastname = document.getElementById("lastname").value;
    }
</script>

<div>
    <input type="text" id="firstname" placeholder="First Name"><br>
    <input type="text" id="lastname" placeholder="Last Name"><br>

    <button onclick="{sayHello}">Say Hello</button>

    <h1>Hello {person.firstname} {person.lastname}</h1>
</div>