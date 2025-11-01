import img1 from "../../../public/images/WorkTogether.svg"
import "./Together.css"
export default function Together(){
    return(
        <div className="Together">
            <div className="Container-Together">
                <div className="container-Together-left">
                    <img src={img1} alt="" />
                </div>
                <div className="container-Together-right">
                    <h1>Work together</h1>
                    <p> 
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                    </p>
                    <button className="features-free">Try it now</button>
                </div>
            </div>
        </div>
        
    )
}