

import React, { useState } from 'react'
import axios from 'axios';
const Insert = () => {
    
    const [empdata,setEmpdata]=useState({});

    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setEmpdata(values=>({...values,[name]:value}))
    }
    const handleSubmit=()=>{
         let api="http://localhost:8000/user/insert";
         axios.post(api,empdata).then((res)=>{
            alert(res.data);
         })
    }
  return (
   <>
   <div className='title'>
       <div className='popup'>
        <h1>Task Project</h1>
        <div className='form-eliment'>
            <label>Imployee Name:</label>
           <input type='text' name='empname' onChange={handleInput} />
        </div>
        <div className='form-eliment'>
            <label>Projects :</label>
           <input type='text' name='project' onChange={handleInput}/>
        </div>
        <div className='form-eliment'>
            <label>Work per Day:</label>
           <input type='text' name='work' onChange={handleInput} />
        </div>
        <div className='form-eliment'>
           <button onClick={handleSubmit}>Save</button>
        </div>
       </div>
   </div>
   </>
  )
}

export default Insert