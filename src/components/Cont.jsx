import Bot from "./Bot";
import Mid from "./Mid";
import SoBot from "./SoBot";
import Top from "./Top";
import React from "react";

function Cont({a,b}) {
    return (
      <div className="h-screen bg-[#5a3e2b]">
        <Top />
        <Mid a={a} b ={b} />
        <Bot a={a} b={b} />
        <SoBot a={a} />
      </div>
    );
  }

  export default Cont ;