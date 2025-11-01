import img1 from "../../../public/images/Apps.svg"
import "./Whitepace.css"
export default function Whitepace(){
    return(
        <div className="Whitepace">
            <div className="Container-Whitepace">
                <div className="container-Whitepace-left">
                    <img src={img1} alt="" />
                </div>
                <div className="container-Whitepace-right">
                    <h1>Work with Your Favorite Apps Using whitepace</h1>
                    <p> 
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                    <button className="features-free">Read more</button>
                </div>
            </div>
        </div>
        
    )
}