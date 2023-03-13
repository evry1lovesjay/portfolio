import "./testimonials.styles.scss"
import { YouTube, ArrowForwardIos } from "@mui/icons-material";



const Testimonials = () => {

    const data =[
        {
            id:1,
            name: "Alex Arnold",
            title: "CEO of HalfwayDev",
            img: "https://images.unsplash.com/photo-1518674547767-209670dad123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            icon: <YouTube className="right"/>,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio tempora praesentium libero iste aliquam."
        },
        {
            id:1,
            name: "Alex Arnold",
            title: "CEO of ALBI",
            img: "https://images.unsplash.com/photo-1518674547767-209670dad123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            icon: <YouTube className="right"/>,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio tempora praesentium libero iste aliquam.",
            featured: true,
        },
        {
            id:1,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.unsplash.com/photo-1518674547767-209670dad123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            icon: <YouTube className="right"/>,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio tempora praesentium libero iste aliquam."
        },
    ]


    return (  
    <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
            <div className="container">
                {data.map(data=>(
                <div className={data.featured ? "card featured" : "card"}>
                    <div className="top">
                        <ArrowForwardIos className="left" />
                        <img className="user" src={data.img} alt="" />
                        {data.icon}
                    </div>
                    <div className="center">
                        {data.desc}
                    </div>
                    <div className="bottom">
                        <h3>{data.name}</h3>
                        <h4>{data.title}</h4>
                    </div>
                </div>
                ))}
          </div>
    </div> );
}
 
export default Testimonials;