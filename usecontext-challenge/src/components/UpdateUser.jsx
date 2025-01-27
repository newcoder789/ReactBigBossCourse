import React from 'react'
import { useState } from 'react';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const UpdateUser = () => {
    const [newName, setNewName] = useState('');
    const {updateUser} =useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newName.trim()){
            updateUser(newName);
            setNewName(""); 
        }
    }
  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder='Enter new name'/>
        </form>
    </div>
  )
}

export default UpdateUser