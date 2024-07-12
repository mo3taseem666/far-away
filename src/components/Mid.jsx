import React from 'react'
import Foorm from './Foorm';

function Mid({a,b}) {
    return (
      <>
        <div className="flex justify-center items-center bg-[#e5771f] p-5">
          <p className="text-xl font-medium">What do you need for your trip ?</p>
          <Foorm a={a} b={b} />
        </div>
        
      </>
    );
  }

export default Mid ;