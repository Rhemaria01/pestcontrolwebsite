import {AiOutlineHome} from "react-icons/ai"
import {GrServices} from "react-icons/gr"
import {RiCustomerService2Fill} from "react-icons/ri"
import {GrLocation} from "react-icons/gr"
import Logo from "../assets/logo192.jpeg"
import LogoSmall from "../assets/logo192-small.png"
export const NavData = {
    logo: Logo,
    logoSmall: LogoSmall,
    links: [
        {
            title: "Home",
            to: "/",
            icon: <AiOutlineHome />,
        },{
            title: "Services",
            to: "/services",
            icon: <GrServices />,
        },{
            title: "Contact Us",
            to: "/contact-us",
            icon: <RiCustomerService2Fill />,
        },{
            title: "Locations",
            to: "/location",
            icon: <GrLocation />,
        }
    ]
}