import { useContext } from "react";
import Logo from "../assets/img/foodLogo.png"
import UserContext from "../utils/UserContext";


const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="" srcset=""  className="header__logo"/>
      </div>
      <div className="header__nav">
        <ul className="nav__items">
          <li className="nav__item" >Home</li>
          <li className="nav__item" >About</li>
          <li className="nav__item" >Contact</li>
          <li className="nav__item" >Cart</li>
          <li className="nav__item" >{user}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;