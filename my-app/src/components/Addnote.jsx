import { useState } from "react";

function CreateArea(props) {
    const [newnote,updateNewnote] = useState({
        noteTitle:"",
        noteContent:""
    });
    function handelChange(event){
        const {name,value} = event.target;
        updateNewnote(preVal=>{
            if (name === "title") {
               return({ 
                ...preVal,
                noteTitle: value,
                })
            } else {
                return({
                    ...preVal,
                    noteContent:value
                })
            }
        });        
    }
    function submitNote(event) {  
        props.fillNote(newnote);
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <input onChange={handelChange} name = "title" placeholder="Title" />
        <textarea onChange={handelChange} name = "content" placeholder = "Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
