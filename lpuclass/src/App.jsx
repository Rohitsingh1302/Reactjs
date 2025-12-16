import React, { useEffect, useState } from 'react'
import { createUser, getAllUsers } from './services/postapi'

export default function App() {
  const [users,setUsers]=useState([])
  const [isEdit,setIsEdit]=useState(false);
  const [user,setUser]=useState({name:"",email:"",phone:""})
const handleEdit=(value)=>{
  setIsEdit(true)
  setUser({name:value.name,email:value.email,phone:value.phone})
}
  
const fetchUsers=async()=>{
  const res=await getAllUsers();
  console.log(res.data)
  setUsers(res.data)
  setUser({name:"",email:"",phone:""})
}
const addUser=async()=>{
  const res=await createUser(user);
  setUsers([...users,res.data])
}
useEffect(()=>{
   fetchUsers()
},[])
  return (
    <><div style={{
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxWidth: "400px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px"
}}>
  <label>Name</label>
  <input type='text' value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>

  <label>Phone</label>
  <input type='text' value={user.phone}   onChange={(e)=>setUser({...user,phone:e.target.value})}/>

  <label>Email</label>
  <input type='email' value={user.email}   onChange={(e)=>setUser({...user,email:e.target.value})}/>

{isEdit ? <button>Edit</button>:<button onClick={addUser}>Add</button>}
</div>


{/* CARD CONTAINER ROW WISE */}
<div style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "20px",
}}>
  {users.map((value) => (
    <div key={value.id} style={{
      width: "260px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      background: "#f9f9f9",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>

      <h4>UserId: {value.id}</h4>
      <p><strong>Name:</strong> {value.name}</p>
      <p><strong>Email:</strong> {value.email}</p>
      <p><strong>Phone No.:</strong> {value.phone}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={()=>handleEdit(value)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  ))}
</div>

    </>
  )
}