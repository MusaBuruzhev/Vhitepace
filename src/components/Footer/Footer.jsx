import "./Footer.css"

export default function Footer() {
    return (
        <div className="Footer">
          <div className="footer-cont">
              <div className="footer-top">
                <h1>Try Whitepace today</h1>
                <p>Get started for free.</p>
                <p>Add your whole team as your needs grow.</p>
                <div className="footer-buttons">
                    <button className="footer-try">Try Today free →</button>
                    <span className="footer-contact">On a big team? Contact sales</span>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-middle">
                <div className="footer-info">
                    <div className="footer-brand">
                        <h3>whitepace</h3>
                        <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    
                    <div className="footer-columns">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <p>Overview</p>
                            <p>Pricing</p>
                            <p>Customer stories</p>
                        </div>
                        
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <p>Blog</p>
                            <p>Guides & tutorials</p>
                            <p>Help center</p>
                        </div>
                        
                        <div className="footer-col">
                            <h4>Company</h4>
                            <p>About us</p>
                            <p>Careers</p>
                            <p>Media kit</p>
                        </div>
                    </div>
                </div>

                <div className="footer-today">
                    <h4>Try It Today</h4>
                    <p>Get started for free. Add your whole team as your needs grow.</p>
                    <button className="footer-start">Start today →</button>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <span>© English ▼</span>
                    <span>©2021 Whitepace LLC.</span>
                    
                </div>
                <div className="footer-bottom-right">
                    <span>Terms & privacy</span>
                    <span>Security</span>
                    <span>Status</span>
                </div>
            </div>
          </div>
        </div>
    )
}