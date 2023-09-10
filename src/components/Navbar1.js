import logo from "../assets/icons/logo.png";
import facebook from"../assets/icons/facebook.png";
import ig from"../assets/icons/ig.png";
import twitter from"../assets/icons/twitter.png";

const Navbar1 =() =>{
    return(
        <div className="flex justify-between items-center">
                <img src={logo} alt="logo" width={50}/>

            <ul className = "hidden md:flex" >
            
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="blank">
                        <img src={facebook} alt="facebook" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://twitter.com/" target="blank">
                        <img src={twitter} alt="twitter" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="blank">
                        <img src={ig} alt="ig" width={30} />
                    </a>
                </li>

            </ul>
        </div>
    );

}
export default Navbar1;