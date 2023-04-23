function Note(nitin){
    return(
        <div className="note">
        <h1>{nitin.title}</h1>
        <p>{nitin.content}</p>
        <button onClick={()=>{
           return nitin.deleteNote(nitin.id)
        }}>DELETE</button>
        </div>
    );
}

export default Note;