import React, { useEffect, useState } from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './Body.css';
const Body = () => {
  const [kobutors,setkobutor]=useState([])
    const [choose,setChoose]=useState([])
    let [chosenone,setChosenone]=useState([])
    useEffect(()=>{
        fetch('photos/products.json')
        .then(res=>res.json())
        .then(data=>setkobutor(data))
    },[])
    const addKobutor=(name)=>{
      let newCart = []
      const exist = choose.find(ch=> ch.id === name.id)
      if(choose.length>3){
        alert('limit exceeded')
        newCart = [...choose]
      }
      else if(!exist){
          newCart = [...choose, name];
      }
      else{
          newCart = [...choose]
      }
      setChoose(newCart)
    }
    const handleChooseagain=()=>{
const emptylist=[]
setChoose(emptylist)
setChosenone(emptylist)
    }
    const handleChooseone=()=>{
      if(choose.length===0){
        alert("Choose Minimum 2 Products...")
      }
      const index=Math.floor(Math.random()*10%(choose.length))
      chosenone=choose[index]
      setChosenone(chosenone)
    }
    return (
        <div className="row">
    <div className="col-8">
    <div className="row row-cols-1 row-cols-md-3 g-4">
            {
kobutors.map(kobutor=><Left key={kobutor.id} kobutor={kobutor} addKobutor={addKobutor}></Left>)
            }
            
    </div>
    <div>
                <div>
                    <h1>Question 1: How React works?</h1>
                    <p>React is a library for building user interfaces. React apps have a structure. Each piece of code aka components work in isolation but communicate with each other to make the web application work. React uses JSX to run html in JS files. It enabled us to put both js and html in one file.</p>
                </div>
                <div>
                    <h1>Question 2: How Usestate works?</h1>
                    <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. It's useful to keep track of previously added data and perform different operations as addition, deletion etc. We used 'useState' to check cart in this assignment.</p>
                </div>
            </div>
    </div>
    <div className="col-4"><Right handleChooseone={handleChooseone} chosenone={chosenone} handleChooseagain={handleChooseagain} choose={choose}></Right></div>
  </div>
    );
};

export default Body;

