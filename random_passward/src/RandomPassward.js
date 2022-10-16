import React, { useState } from "react";
import "./Random.css"

const RandomPassward = () => {
  const [name,setName] = useState();
  const Generate = () => {
  let char="eqwyutuityiouop213321549870*%RQWEUIIUO0123654789PFAGBXNZVXVMNBNGHQWERTYUIOPASDFGHJKLZXCVBNM@#$$%^&*";
  
  const passward_length=20;
    
  let passward ="";
  while (passward.length<passward_length){
    var random_number = Math.floor(Math.random()*char.length);
    passward += char[random_number];
  }
  console.log(passward.length,passward);
  setName(passward)
}
const Copy =() => {
  var copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0,9999);
  navigator.clipboard.writeText(copyText.value);
}

  

return (
  <>
<div className="main">
  <div className="first-div">
  <input id="pass"  type="text" value={name} placeholder="Random passward" readOnly></input> </div>
  <div className="second-div">
  <button id="btn1" onClick={Generate}> Generate </button>
  <button id="btn2" onClick={Copy}> Copy </button>
  </div>
</div>
<div className="third-div">
    <h3>Your Random Passward :</h3><p> {name} </p>
</div>
</>
);
}
export default RandomPassward;



  
  
  


        

 
