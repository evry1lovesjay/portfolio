import "./intro.styles.scss"
import {KeyboardDoubleArrowDown} from "@mui/icons-material"
import {init} from "ityped"
import { useEffect, useRef } from 'react';





const Intro = () => {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpee: 60,
            strings: ["Web Developer", "Designer"]
        })
    }, [])

    return (  
    <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="https://cdn.pixabay.com/photo/2021/11/24/07/01/boy-6820410_960_720.png" alt="male" />
            </div>
        </div>



        <div className="right"> 
            <div className="introRwrapper">
                <h2>Hi There, I'm</h2>
                <h1>The Unknown Developer</h1>
                <h3>Freelance <span ref={textRef}></span> </h3>
            </div>
            <a href="#portfolio" className="arrowdown_wrapper">
                <KeyboardDoubleArrowDown className="arrow_down"/>
            </a>
        </div>
    </div> );
}
 
export default Intro;