import { useState } from "react";

function Input(props) {
    const [item,addItem] = useState("");
    function handelChange(event){
        const entity = event.target.value
        addItem(entity);
    }
    return(
        <div className="form">
                <input onChange={handelChange} type="text"/>
                <button onClick={()=>{
                   props.buttonFunction(item);
                   addItem("");
                }}>
                    <span>Add</span>
                </button>
            </div>
    );
}

export default Input;