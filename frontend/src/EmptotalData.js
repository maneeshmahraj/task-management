

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmptotalData = () => {
   
    const [total,setTotal]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8000/user/totalrecord";
        axios.get(api).then((res)=>{
                   setTotal(res.data); 
        })
    }
    useEffect(()=>{
        loadData();
    },[])
          const ans=total.map((key)=>{
            return(
                <>
                <tr>
                    <td>{key.empname}</td>
                    <td>
                    <ol className='item'>
                       { key.project.map((key1)=>{
                        return(
                            <>
                           
                                <li>{key1.projectname},<b>Work{'->'}{key1.work} hours</b></li>
                           
                            </>
                        )
                       })}
                        </ol>
                    </td>
                </tr>
                </>
            )
          })
  return (
   <>
   <div className='title1'>
      
      <table>
          <tr>
              <th>Employee Name</th>
              <th>project Name</th>
              
          </tr>
          {ans}
      </table>
     
  </div>
   </>
  )
}

export default EmptotalData;