import { useState } from "react";

function Time(){
    let time = new Date().toLocaleTimeString();
    const [newtime, updateTime] = useState(time);
    
    function getTime() {
        let now = new Date().toLocaleTimeString();
        updateTime(now);
    }
    setInterval(getTime,1000);
    return(
        <div className="">
        <h7 style={{color:"white"}}>
        {newtime}
        </h7>
        
        </div>
    );
}

export default Time;