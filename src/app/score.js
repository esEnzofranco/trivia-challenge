import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import '../css/score.css';


const Score = () => {

    const score = useSelector(state=>state.scoreReducer.score)

    return(
            <div className='score-container'>
                {score.map((element, index) => (
                element == true ? <div className="tick" key={index}><img src="/icons/correct.png" className="icon"/></div>  : <div className="tick" key={index}><img src="/icons/incorrect.png" className="icon"/></div>
                ))}
            </div>
    )
} 

export default Score;