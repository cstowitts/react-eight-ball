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

    // const [msg, setMsg] = useState("think of a question");
    // const [color, setColor] = useState("black");
    const [msgAndColor, setMsgAndColor] = useState({ msg: "Think of a question", color: "black" }) ;

    //TODO: put this in css file --everything static (not background)
    const eightballStyle = {
        backgroundColor: msgAndColor.color,
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    /**
     * handle click on eightball -- 
     * set msg and color to random answer
     */
    function updateMsgAndColor() {
        const idx = getRandomIdx(answers.length);
        const answer = answers[idx];
        setMsgAndColor(answer);
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