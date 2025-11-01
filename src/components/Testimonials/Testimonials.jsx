import img1 from "../../../public/images/Element.svg"
import img2 from "../../../public/images/sponsors.svg"
import "./Testimonials.css"
export default function Testimonials(){
    return(
        <div className="Testimonials">
            <div className="Container-Testimonials">
                
                <div className="container-Testimonials-right">
                    <h1>100% your data</h1>
                    <p> 
                        The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                    </p>
                    <button className="features-free">Read more</button>
                </div>

                <div className="container-Testimonials-left">
                    <img src={img1} alt="" />
                </div>

            </div>

            <div className="sponsors">
                <h1>Our sponsors</h1>
                <div className="sponsors-cont">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    )
}