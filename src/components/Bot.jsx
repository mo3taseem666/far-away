import React, { useState } from "react";

function Bot({a,b}) {


    const [sSort , setSsort] = useState(1)
    let x;
  
    if(sSort ===1 ) {x=a}
    if(sSort ===2 ) {x=a.slice().sort((a,b)=>a.describ.localeCompare(b.describ))} ;
    if(sSort ===3 ) {x=a.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))} ;
  
  
  
  
  
  
  
  function handleCheck(id) {
    b(el=>el.map(e=>e.id === id ? {...e , packed : !e.packed } : e))
  }
  
    function handleDelete(id) {
      b(a.filter(el=>el.id !== id))
    }
  
    return (
      <div className="">
        <div className=" flex justify-center flex-wrap gap-10 p-5">
          {x.map(function (el) {
            return (
              <div key ={el.id} className=" text-white font-semibold font-font1 tracking-wider text-lg">
                <div>
                <input onChange={()=>handleCheck(el.id)} value={el.packed} className={`mr-2`} type='checkbox' ></input>
                <span>{el.quantity} </span>
                <span className ={`${el.packed ? 'line-through' : ''} `}>{el.describ}</span>
                <button onClick={()=>handleDelete(el.id)} className='ml-2 text-red-400'>X</button>
                </div>
  
              </div>
            );
          })}
        </div>
        <div className="text-white absolute bottom-24 flex gap-10 justify-center w-full ">
          <form className="text-black">
            <select value={sSort} onChange={(e)=>setSsort(+(e.target.value))} className="bg-orange-200 rounded-xl p-2 text-lg font-medium">
              <option value={1}>Search by Input order</option>
              <option value={2}>Search by Description</option>
              <option value={3}>Search by Packed Status</option>
            </select>
          </form>
          <button onClick={()=>b([])} className="bg-orange-200 rounded-xl py-1 px-5 text-lg font-medium text-black">CLEAR LIST</button>
        </div>
      </div>
    );
  }

  export default Bot ;