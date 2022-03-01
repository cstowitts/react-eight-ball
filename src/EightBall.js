import React, { useState } from "react"; //react is default export, {} is other stuff exports

/** Creates magic 8 ball, changes answer and color on click
 * 
 * Props:
 * - answers (an array of answer objs, each with a msg and color property)
 *  + [{ msg: "It is certain.", color: "green" }, ...]
 * 
 * State:
 * - mg: str
 * - color: str
 * 
 * Render order:
 * App -> EightBall 
 */

function EightBall({ answers }){
    //prop is an obj, so {answers} destructures it so we can use its values more easily

    const [msg, setMsg] = useState("think of a question");
    const [color, setColor] = useState("black");

    
    function updateMsgAndColor(){
        const idx = getRandomIdx(answers.length);
        const answer = answers[idx];
        setMsg(answer.msg);
        setColor(answer.color);
    }


    return (
        <div className="EightBall" onClick={updateMsgAndColor}>
            { msg }
        </div>
    )


    
  
}


  function getRandomIdx(max) {
       const randomIdx = Math.floor(Math.random() * max);
       return randomIdx;
    }