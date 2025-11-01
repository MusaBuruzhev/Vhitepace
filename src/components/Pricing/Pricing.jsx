import "./Pricing.css"

export default function Pricing(){
    return(
        <div className="Pricing">
            <h1 className="pricing-h1">Choose Your Plan</h1>
            <p className="Pricing-p">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
            <div className="Pricing-container">
                <div className="pricing-cont-left">
                    <h3>Free</h3>
                    <h1>$0</h1>
                    <p>Capture ideas and find them quickly</p>
                    <h4>Sync unlimited devices</h4>
                    <h4>10 GB monthly uploads</h4>
                    <h4>200 MB max. note size</h4>
                    <h4>Customize Home dashboard and access extra widgets</h4>
                    <h4>Connect primary Google Calendar account</h4>
                    <h4>Add due dates, reminders, and notifications to your tasks</h4>
                    <button className="pricing-free">Get Started</button>
                </div>
                <div className="pricing-cont-center">
                    <h3>Personal</h3>
                    <h1>$11.99</h1>
                    <p>Keep home and family on track</p>
                    <h4>Sync unlimited devices</h4>
                    <h4>10 GB monthly uploads</h4>
                    <h4>200 MB max. note size</h4>
                    <h4>Customize Home dashboard and access extra widgets</h4>
                    <h4>Connect primary Google Calendar account</h4>
                    <h4>Add due dates, reminders, and notifications to your tasks</h4>
                    <button className="pricing-free">Get Started</button>
                </div>
                <div className="pricing-cont-right">
                    <h3>Organization</h3>
                    <h1>$49.99</h1>
                    <p>Capture ideas and find them quickly</p>
                    <h4>Sync unlimited devices</h4>
                    <h4>10 GB monthly uploads</h4>
                    <h4>200 MB max. note size</h4>
                    <h4>Customize Home dashboard and access extra widgets</h4>
                    <h4>Connect primary Google Calendar account</h4>
                    <h4>Add due dates, reminders, and notifications to your tasks</h4>
                    <button className="pricing-free">Get Started</button> 
                </div>
            </div>
        </div>
    )
}