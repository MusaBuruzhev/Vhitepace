import "./Features.css"

export default function Features(){
    return(
        <section className="features">
            <div className="BACKGROUND"></div>
            <div className="features-container">
                
                <div className="features-content">
                    <h1>Project Management</h1>
                    <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                                    <button className="features-free">Get Started</button>
                </div>
                
                <div className="features-brend">
                    {/* На макете тут нет никакой информации */}
                </div>

            </div>

        </section>
    )
}