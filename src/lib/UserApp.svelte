<script>
    // Penggunaan Props 
  import UserRow from "./UserRow.svelte";

  const user = {
    id: 1,
    name: 'Arbath',
    address: 'Yogyakarta'
  }

</script>

<table>
    <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
        </tr>
    </thead>
    <tbody>
        <UserRow {...user}/>
    </tbody>
</table>