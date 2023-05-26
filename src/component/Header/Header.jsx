import Logo from "../Logo/Logo"
import Navlist from "../Navlist/Navlist";
import Icon from "../icon/icon";
function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    
                    <Logo />
                    <Navlist/>
                    <Icon />
                </div>
            </div>
        </header>
    )
}
export default Header;