import {LiaDotCircleSolid} from "react-icons/lia"
import {FaPhoneAlt} from "react-icons/fa"
import {HiOutlineMailOpen} from "react-icons/hi"

export const FooterData = {
    impLinks: {
    heading: "Important Links",
    links: [{
      link: "Contact Us",
      to: "/contact-us"
    },{
      link: "Team",
      to: "/team"
    },{
      link: "Services",
      to: "/services"
    }],
    icon: <LiaDotCircleSolid/>,
    footer: "Disclaimer"
  },
  contact: {
    phone:{
      heading: "Call Us Now",
      details: ["+91-85911-24486","+91-85917-52018"],
      icon: <FaPhoneAlt />
    },
    email:{
      heading: "E-mail",
      details: ["pestsolutions@gmail.com"],
      icon: <HiOutlineMailOpen />
    }
  },
  copyright:{
    text: "Copyright © pestsolution.com 2023. All rights reserved."
  },
}
