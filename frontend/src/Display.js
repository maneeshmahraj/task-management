
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Display = () => {
   
    const [mydata,setMydata]=useState([]);
    const [addmore,setAddmore]=useState(false);
    const [addnew,setAddnew]=useState({});
    const [mid,setMid]=useState("");
    const loadData=()=>{
        let api="http://localhost:8000/user/display";
        axios.get(api).then((res)=>{
            setMydata(res.data)
            // console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[]);
       
    const Addmore=(id)=>{
         setAddmore(!addmore);
         setMid(id);
    }
      const ans=mydata.map((key,i)=>{
        return(
            <>
             <tr>
             <td>{key.empId.empname}</td>
       <td>{key.projectname}</td>
                <td>{key.work}</td>
               <td> <button onClick={()=>{Addmore(key.empId._id)}} className="btn">add more</button></td>
             </tr>
            </>
        )
      })
   const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setAddnew(values=>({...values,[name]:value}));
   }  
   const handleSubmit=()=>{
  let api="http://localhost:8000/user/add";
  axios.post(api,{id:mid,project:addnew.project,work:addnew.work}).then((res)=>{
    alert(res.data);
    loadData();
  })
   }
  return (
    <>
    <div className='title1'>
      
        <table>
            <tr>
                <th>Employee Name</th>
                <th>project Name</th>
                <th>Work par Day</th>
                <th>add More</th>
            </tr>
            {ans}
        </table>
       
    </div>
   {addmore?<div className='popup1'>
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
   </div>:""}
    </>
  )
}

export default Display