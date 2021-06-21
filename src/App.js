import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const products =[
    {name: 'Photoshop', price:'$45.99'},
    {name: 'Illustrator', price:'$32.99'},
    {name: 'InDesign', price:'$34.99'},
    {name: 'Premiere PProduct', price:'$49.50'},
    {name: 'XD', price:'$20.99'},
    {name: 'Acrobat DC', price:'$21.50'}
  ];

  //const descriptions =['Edit, composite, and create beautiful images, graphics, and art on desktop and iPad.'];
  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Users></Users>
        {
          products.map((pd => <Products products={pd}></Products>))
        }
      
      {/* without using map */}
          {/* <Products product = {products[0]}></Products>
          <Products product = {products[1]}></Products>
          <Products product = {products[2]}></Products>
          <Products product = {products[3]}></Products>
          <Products product = {products[4]}></Products>
          <Products product = {products[5]}></Products> */}
         
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  //const handleIncrease = () => setCount(count + 1);
  
 // const handleDecrease = () => setCount(count - 1);
     return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState();
  
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data))
  })

  return (
    <div>
      <h2> Dyanmic Users:{users.length}</h2>
       
         <ul>
          {
            users.map( user => <li>{user.name}</li>)
          } 
         </ul>
       
    </div>
  )
}


function Products(props){
  const {name, price} = props.products;
  const productStyle ={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'white',
    width:'250px',
    height:'250px', 
    margin:'10px',
    color:'black',
  };
  const buttonStyle ={
    border:'2px solid gray',
    backgroundColor:'white',
    borderRadius:'20px',
    color:'gray',
    fontWeight:'bold'
  }
  return (
    <div style ={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <p style ={{fontSize:'12px'}}>Edit, composite, and create beautiful images, graphics, and art on desktop and iPad.</p>
      <button style={buttonStyle}>Try for free</button>
    </div>
  )
}

export default App;
