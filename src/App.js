import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserData from './UserData';
import axios from 'axios';

function App() {
  const [cart,setCart] = useState(0);
  const handleAddButton= () =>{
    const newCart = cart + 1;
    setCart(newCart);
  }
  const handleMinusButton = () =>{
    let newCart = cart - 1;
    if (newCart >= 0){
    setCart(newCart);
    }
  }
  const [users,setUsers] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    axios(url)
    .then(data =>{ 
      console.log(data);
      setUsers(data.data) });
  },[])
  return (  
    <div className="">
      <button onClick={handleAddButton}>Click Me</button>
      <button onClick={handleMinusButton}>Click me to decrease</button>
      <h4>cart:{cart}</h4>
      {
        users.map(userb => <UserData key ={userb.id}  user = {userb}></UserData>)
      }   
    </div>
  );
}

export default App;
