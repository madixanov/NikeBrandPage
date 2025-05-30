import brand_logo from "../assets/brand_logo.png"

export default function Header() {
    return (
        <header>
            <img src={brand_logo} alt="nike-logo" />
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button>Login</button>
        </header>
    )
}