import React from "react";

function SoBot({a}) {
    function test(a) {
      return a.filter(e=>e.packed=== true).length
    }
    return (
      <>
         
        <div className="bg-[#76c7ad] absolute bottom-0 w-full flex justify-center p-5">
          {a.length === 0 ? 'Start Adding Your Items!' : a.length === test(a) ?  `You are READY to GO (${`${( (test(a)/a.length)*100 )}%`})` : `You have ${a.length} items on your list, and you already packed ${test(a)} (${`${( (test(a)/a.length)*100 )}%`})`}
        </div>
      </>
    );
  }

  export default SoBot ;