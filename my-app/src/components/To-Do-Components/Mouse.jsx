import { useState } from "react";

function Mouse(){
    const [effect,change] = useState(true);
    const [name,setName] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    function mouseOverEvent(){
        change(false);
    };
    function mouseOutEvent(){
        change(true);
    };
    function handelChange(event){
        const {value,name} =  event.target;
        setName(previousValue => {
            if (name === "fname") {
                return({
                    fname: value,
                    lname: previousValue.lname,
                    email: previousValue.email
                });
            } 
            else if (name === "lname") {  
                return({
                    fname: previousValue.fname,
                    lname: value,
                    email: previousValue.email
                });
            } 
            else if (name === "email") {
                return({
                    fname: previousValue.fname,
                    lname: previousValue.lname,
                    email: value
                });
            }



            // Alternate Meathod to write code without above too meany if else statements
                //return {
                // ...previousValue,
                // [name]: value
                //}
            });
    }
    return(
        <div style={{textAlign:"center"}} className="note">
        <h1>Hello {name.fname} {name.lname}</h1>
        <p style={{fontSize:"small",color:"gray"}}>{name.email}</p>
        <form>
        <input onChange={handelChange} name="fname" type="text" placeholder="Name..."></input>
        <input onChange={handelChange} name="lname" type="text" placeholder="Last name..."></input>
        <input onChange={handelChange} name="email" type="text" placeholder="e-mail"></input>
        <div style={{textAlign:"center",paddingTop:"5px"}} className="">
        <button 
        style={{backgroundColor:effect? "white" : "red",color:effect? "black" : "white",border:"none"}}
        onMouseOver={mouseOverEvent}
        onMouseOut = {mouseOutEvent}>
        Submit</button>
        </div>
        </form>
        </div>
    );
}

export default Mouse;