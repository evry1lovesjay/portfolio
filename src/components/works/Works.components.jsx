import "./works.styles.scss"
import { PhoneIphoneOutlined, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from 'react';


const Works = () => {

    const [currentSlide, setCurrentSlide]  = useState(0)

    const data = [
    {
        id: "1",
        icon: <PhoneIphoneOutlined className="iphoneImg"/>,
        title: "Web Design",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://images.unsplash.com/photo-1620030537215-9ef4d9c0d3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",

    },
    {
        id: "2",
        icon: <PhoneIphoneOutlined className="iphoneImg"/>,
        title: "Mobile Application",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://images.unsplash.com/photo-1532959922950-eaf7bda52a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",

    },
    {
        id: "3",
        icon: <PhoneIphoneOutlined className="iphoneImg"/>,
        title: "Branding",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://images.unsplash.com/photo-1532959604812-c2909578fae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",

    },
]


    const handleClick =(direction)=>{
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? (currentSlide - 1) : 2) : setCurrentSlide(currentSlide === 2 ? 0 : (currentSlide + 1))
    }

    return (  
    <div className="works" id="works">
        <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {data.map((item)=> 
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                {item.icon}
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}  </p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="https://images.unsplash.com/photo-1620030537215-9ef4d9c0d3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" alt="" />
                    </div>
                </div>
            </div>)}
        </div>

        <ArrowBackIos className="arrow left" onClick={()=> handleClick("left")}/>
        <ArrowForwardIos className="arrow right" onClick={()=>handleClick()}/>

    </div> );
}
 
export default Works;