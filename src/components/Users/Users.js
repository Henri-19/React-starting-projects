import {useState, useEffect} from "react";

const Users = () => {
    const [users,setUsers] = useState([])

useEffect(()=>{
    const fetchUsers = async () => {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data =await response.json();
        console.log(data);
        setUsers(data);
    }catch(error){
        console.log("Error during the fetch of Users");
    }}
    fetchUsers();
},[])

return(
    <div>
        <h2>Users list</h2>
        <ul>
            {users.map((user,id) =>(
        <li key={id}>
        <li>Name : {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        </li>
            ))}
        </ul>
    </div>
    )
}

export default Users;