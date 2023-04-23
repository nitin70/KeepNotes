import { useState } from "react";
import ListElemeants from "./listElemeants";
import Input from "./Input";
function ToDoList() {
    
    const [ItemArray,addItemInArray] = useState([]); 

    function handelClick(item){
        addItemInArray(previousAddedItems =>{
            return [...previousAddedItems,item];
        });
        
    }
    function deleteItam(id){
            addItemInArray(previousAddedItems=>{
              return  previousAddedItems.filter(
                    (item,index)=>{
                    return index !== id;
                });
            })
    }

    return(

        <div style={{backgroundColor:"whitesmoke",color:"gray",height:"350px"}} className="note container">
            <div className="heading">
            <h1 style={{textAlign:"center",marginBottom:"20px"}}> To-Do List</h1>
            </div>

            <Input
                buttonFunction={handelClick}
            />
            <div style={{paddingLeft:"20px",paddingTop:"40px"}}>
                <ul>
                    {ItemArray.map((todoitem,index)=>{
                        return(
                            <ListElemeants 
                                key={index}
                                id={index}
                                text={todoitem}
                                onChecked={deleteItam}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;