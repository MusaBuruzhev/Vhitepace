import "./Header.css"
export default function Header(){
    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src="../../public/images/Logo.svg" alt="whitepiece" />
                </div>


             <nav className="navigation">
                <a href="#">Products</a>
                <a href="#">Solutions</a>
                <a href="#">Resources</a>
                <a href="#">Pricing</a>
            </nav>

            <div className="header-buttons">
                <button className="login-btn">Login</button>
                <button className="whitepace-free">Try Whitepace free</button>
            </div>
            </div>
            
        </header>
    )
}