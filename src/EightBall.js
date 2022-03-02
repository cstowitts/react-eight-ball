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

function EightBall({ answers }) {
    //prop is an obj, so {answers} destructures it so we can use its values more easily

    // original answer: 
    // const [msg, setMsg] = useState("think of a question");
    // const [color, setColor] = useState("black");

    // but msg and color are always together and never change independently of each other
    // so we can have them as a single state using an object 
    // bascially the setter fn (setMsgAndColor) is like a db, 
    // looks up the variables msg and color
    // and updates them with the value of whatever we pass in (in this case, {answer})
    const [msgAndColor, setMsgAndColor] = useState({ msg: "Think of a question", color: "black" }) ;

    // moved static styles to EightBall.css
    // only include styling that is DYNAMIC    
    const eightballStyle = {
        backgroundColor: msgAndColor.color,
    }
    // the color is now the color property on our new state obj (msgAndColor)


    /**
     * handle click on eightball -- 
     * set msg and color to random answer
     */
    function updateMsgAndColor() {
        const idx = getRandomIdx(answers.length);
        const answer = answers[idx];
        setMsgAndColor(answer);

        // original answer: 
        // setMsg(answer.msg);
        // setColor(answer.color);
    }

    //style = {} will add to css, rather than replace

    return (
        <div className="EightBall"
            onClick={updateMsgAndColor}
            style={eightballStyle}>
            {msgAndColor.msg}
        </div>
    )




}

/**
 * Generates a random integer between 0 and max
 */
function getRandomIdx(max) {
    const randomIdx = Math.floor(Math.random() * max);
    return randomIdx;
}

export default EightBall;