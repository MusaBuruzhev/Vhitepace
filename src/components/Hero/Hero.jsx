import "./Hero.css"
export default function Hero(){
    return(
        <section className="hero">

            <div className="hero-container">

                <div className="hero-content">
                    <h1>Get More Done with whitepace</h1>
                    <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <button className="whitepace-free">Try Whitepace free</button>
                </div>
                
                <div className="hero-brend">
                    {/* На макете тут нет никакой информации */}
                </div>

            </div>

        </section>
    )
}