import { useState,React } from "react"

function Foorm({a,b}) {
  

    function prevnt(e) {
      e.preventDefault()
      if (!describ) {return ''}
      const xx = {describ,quantity,id:Date.now(),packed:false}
      setDescrib('')
      setQuantity(1)
      b([...a ,xx])
      return a
  
    }
  
    const [describ,setDescrib] = useState('')
    const [quantity,setQuantity] = useState(1)
  
    return <form onSubmit={prevnt}>
      <select value={quantity} onChange={e=>setQuantity(e.target.value)} className="ml-5 px-2 py-1 rounded-lg bg-[#ffebb3] ">
      {Array.from({ length: 20 }, (_, i) => i + 1).map(function(e) {return <option key={e} value={e}>{e}</option>})}
      </select>
      <input value={describ} onChange={(e)=>setDescrib(e.target.value)} className="mx-5 bg-[#ffebb3] p-1 rounded-lg" type="text"></input>
      <button className="bg-[#76c7ad] font-semibold px-5 py-1 rounded-xl" type="submit">ADD</button>
    </form>
  }

  export default Foorm ;