import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
        
 const [isExpanded,setExpanded]=useState(false);

 const [textInput,setInput]=useState({
         title : "",
         content :""
 });

 function handleChange(event){
         const {value,name} = event.target;
        setInput(preinp => {
                return( {
                ...preinp,
                [name]:value}
                )
        })
 }
 function handleClick(event){
         event.preventDefault();
         props.onAdd(textInput)
         setInput({title : "",
         content :""})

 }

function expand(){
        setExpanded(true);
}



  return (
    <div>
      <form className="create-note" >
        {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={textInput.title} />) }
        <textarea onClick={expand} value={textInput.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded? 3:1} />
        <Fab onClick={handleClick}> <AddIcon/> </Fab> 
      </form>
    </div>
  );
}

export default CreateArea;
