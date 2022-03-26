import React, { useEffect, useState } from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './Body.css';
const Body = () => {
  const [kobutors,setkobutor]=useState([])
    const [choose,setChoose]=useState([])
    let [chosenone,setChosenone]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setkobutor(data))
    },[])
    const addKobutor=(name)=>{
      let newCart = []
      const exist = choose.find(ch=> ch.id === name.id)
      if(choose.length>3){
        alert('cannot add more!')
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
        alert("please choose at least two products")
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
    </div>
    <div className="col-4"><Right handleChooseone={handleChooseone} chosenone={chosenone} handleChooseagain={handleChooseagain} choose={choose}></Right></div>
  </div>
    );
};

export default Body;

