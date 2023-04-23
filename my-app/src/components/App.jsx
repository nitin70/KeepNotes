import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './Addnote';
import { useState } from 'react';
//import note from '../note';

// function createNote(noteElemeant){
//     return(
//         <Note
//             key = {noteElemeant.id}
//             title = {noteElemeant.heading}
//             content = {noteElemeant.content}
//         />
//     );
// }
//{note.map(createNote)}


function App() {
    
    const [note,addNote] = useState([]);
    
    function handelNote(noteitem){
     addNote(preval=>{
       return [...preval,noteitem];
    });
    }

    function deleteNote(id){
        addNote(previousAddedItems=>{
            return  previousAddedItems.filter(
                  (item,index)=>{
                  return index !== id;
              });
          })
    }

    return (
        <div>
        <Header/>
        <CreateArea
            fillNote={handelNote}
        />
        {note.map((newnoteitem,index) => {
           return <Note key={index} id={index} title={newnoteitem.noteTitle} content={newnoteitem.noteContent} deleteNote={deleteNote}/>;
        })}
        <Footer/>
        </div>
    );
  }
  
  export default App;