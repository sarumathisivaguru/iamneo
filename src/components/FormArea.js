import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import AddIcon from '@mui/icons-material/Add';
// import { Fab, TextField } from "@material-ui/core";
import{Fab,TextField} from '@mui/material';

function FormArea({ addNote }) {

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function clickHandler(){
    if(note.content === "" && note.title === "")return;
    addNote(note);
    setNote({
      title: "",
      content: "",
    });

  let values = JSON.parse(localStorage.getItem("notes"));
  values.push(note)
  localStorage.removeItem('notes')
  localStorage.setItem('notes',JSON.stringify(values))

  }

  function changeHandler(event){
         const {name, value}=event.target
         setNote(preValues =>{
             return{
              ...preValues,[name]:value,
             };
         });
  }

return (
<Paper
style={{
     margin: "15px 20%",
     padding: "25px 50px",
     borderRadius: "6px",
     backgroundColor: " #f2f2f2",
}}
>
<form className="form">
<TextField
     onChange={changeHandler}
     name="title"
     value={note.title}
     label="Title"
     fullWidth
     autoComplete="off"
     style={{backgroundColor:"#ffff"}}
/>
<TextField
     onChange={changeHandler}
     name="content"
     value={note.content}
    style={{ marginTop: "10px", backgroundColor:"#ffff"}}
   label="Content"
  multiline
  rows={4}
  fullWidth
  autoComplete="off"
/>     

 <Fab
     onClick={clickHandler}
     style={{ marginTop: "20px", backgroundColor: "#fad7d766" }}
  > 
  <AddIcon />
  </Fab>
   </form>
   </Paper> );
}

export default FormArea;




