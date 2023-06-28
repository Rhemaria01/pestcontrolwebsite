//Hero Image
import HeroImg from "../assets/hero.png"
import HeroSmall from "../assets/hero-small.png"

//About Us Image
import AboutImg from "../assets/AboutUs.jpeg"
import AboutSmall from "../assets/aboutUs-small.jpeg"

//Services Images
import Cockroach from "../assets/Cockroach.jpeg"
import CockroachSmall from "../assets/cockroach-small.jpeg"
import Mold from "../assets/Mold.jpeg"
import MoldSmall from "../assets/mold-small.jpeg"
import Termite from "../assets/Termite.jpeg"
import TermiteSmall from "../assets/termite-small.jpeg"
import BedBug from "../assets/BedBug.jpeg"
import BedBugSmall from "../assets/bedbug-small.jpeg"
import Mosquito from "../assets/Mosquito.jpeg"
import MosquitoSmall from "../assets/mosquito-small.jpeg"
import Ant from "../assets/Ant.jpeg"
import AntSmall from "../assets/ant-small.jpeg"
import Rodent from "../assets/Rodent.jpeg"
import RodentSmall from "../assets/rodent-small.jpeg"
import Bee from "../assets/Bee.jpeg"
import BeeSmall from "../assets/bee-small.jpeg"
import Bird from "../assets/Bird.jpeg"
import BirdSmall from "../assets/bird-small.jpeg"
import Flea from "../assets/Flea.jpeg"
import FleaSmall from "../assets/flea-small.jpeg"
import Spider from "../assets/Spider.jpeg"
import SpiderSmall from "../assets/spider-small.jpeg"
import Weed from "../assets/Weed.jpeg"
import WeedSmall from "../assets/weed-small.jpeg"

//Areas We Serve Images
import Commercial from "../assets/commercial.jpeg"
import CommercialSmall from "../assets/commercial-small.jpeg"
import Industry from "../assets/Industry.jpeg"
import IndustrySmall from "../assets/industry-small.jpeg"
import Residential from "../assets/Residential.jpeg"
import ResidentialSmall from "../assets/residential-small.jpeg"

//avatars
import Avatar1 from "../assets/avatar1.jpeg"
import AvatarSmall1 from "../assets/avatar1-small.jpeg"
import Avatar2 from "../assets/avatar2.jpeg"
import AvatarSmall2 from "../assets/avatar2-small.jpeg"
import Avatar3 from "../assets/avatar3.jpeg"
import AvatarSmall3 from "../assets/avatar3-small.jpeg"
import Avatar4 from "../assets/avatar4.jpeg"
import AvatarSmall4 from "../assets/avatar4-small.jpeg"

    export const Hero= {
        title: ["Truly the Safest and", "Reliable Choice", "For Your"],
        title1: "Family and Business",
        image: HeroImg,
        imageSmall: HeroSmall
    }
    
    export const CallToAction = {
        title: "Find Your Pest Control Service",
        fields : [{
            placeholder: "Type of Service",
            type: "text",
        },{
            placeholder: "Name",
            type: "text",
            error: "Please Enter a Valid Name"
        },{
            placeholder: "Phone",
            type: "tel",
            error: "Please Enter a Valid Phone Number"
        },{
            placeholder: "Email",
            type: "email",
            error: "Please Enter a Valid Email Address"
        },{
            placeholder: "",
            type: "button",
        }],
        successMessage: "Received your contact info, We will get back to you very soon!",

    }

    export const AboutUS = {
        title: "About Us",
        heading: "Welcome to Pest Solutions, your trusted partner in pest control solutions!",
        text: "At Pest Solutions, we understand the importance of maintaining a clean and pest-free environment."
        +" With years of experience in the industry, we have built a reputation for providing reliable and effective"
        +"pest control services to homes and businesses.Our mission is to protect your property and the well-being "
        +"of your loved ones by offering comprehensive pest management solutions. We believe that everyone deserves to"
        +"live and work in a safe and comfortable environment, free from the nuisance and health risks associated with pests.",
        checkmarks: ["Trusted Technicians","Affordable Cost","24/7 Pest Control Support"],
        image: AboutImg,
        imageSmall: AboutSmall,
        expYears: "20",
        expText: "Years of Experience"
    }
    
    export const Services = {
        title: "Services",
        btn: "More Services",
        services: [
              {
                "name": "Cockroach Control",
                "image": Cockroach,
                "imageSmall": CockroachSmall,
                "price": {
                  "1BHK or Smaller": "₹700 or less",
                  "2BHK": "₹1100",
                  "3BHK or Bigger": "₹1500 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Mold Remediation",
                "image": Mold,
                "imageSmall": MoldSmall,
                "price": {
                  "1BHK or Smaller": "₹800 or less",
                  "2BHK": "₹1200",
                  "3BHK or Bigger": "₹1600 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Termite Control",
                "image": Termite,
                "imageSmall": TermiteSmall,
                "price": {
                  "1BHK or Smaller": "₹1000 or less",
                  "2BHK": "₹1500",
                  "3BHK or Bigger": "₹2000 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Bed Bug Control",
                "image": BedBug,
                "imageSmall": BedBugSmall,
                "price": {
                  "1BHK or Smaller": "₹900 or less",
                  "2BHK": "₹1300",
                  "3BHK or Bigger": "₹1700 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Mosquito Control",
                "image": Mosquito,
                "imageSmall": MosquitoSmall,
                "price": {
                  "1BHK or Smaller": "₹600 or less",
                  "2BHK": "₹1000",
                  "3BHK or Bigger": "₹1400 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Ant Control",
                "image": Ant,
                "imageSmall": AntSmall,
                "price": {
                  "1BHK or Smaller": "₹500 or less",
                  "2BHK": "₹900",
                  "3BHK or Bigger": "₹1300 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Rodent Control",
                "image": Rodent,
                "imageSmall": RodentSmall,
                "price": {
                  "1BHK or Smaller": "₹700 or less",
                  "2BHK": "₹1100",
                  "3BHK or Bigger": "₹1500 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Bee Control",
                "image": Bee,
                "imageSmall": BeeSmall,
                "price": {
                  "1BHK or Smaller": "₹600 or less",
                  "2BHK": "₹1000",
                  "3BHK or Bigger": "₹1400 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Bird Control",
                "image": Bird,
                "imageSmall": BirdSmall,
                "price": {
                  "1BHK or Smaller": "₹800 or less",
                  "2BHK": "₹1200",
                  "3BHK or Bigger": "₹1600 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Flea Control",
                "image": Flea,
                "imageSmall": FleaSmall,
                "price": {
                  "1BHK or Smaller": "₹600 or less",
                  "2BHK": "₹1000",
                  "3BHK or Bigger": "₹1400 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Spider Control",
                "image": Spider,
                "imageSmall": SpiderSmall,
                "price": {
                  "1BHK or Smaller": "₹500 or less",
                  "2BHK": "₹900",
                  "3BHK or Bigger": "₹1300 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              },
              {
                "name": "Weed Control",
                "image": Weed,
                "imageSmall": WeedSmall,
                "price": {
                  "1BHK or Smaller": "₹700 or less",
                  "2BHK": "₹1100",
                  "3BHK or Bigger": "₹1500 or higher",
                  "Industrial": "As per Area",
                  "Commercial": "As per Area"
                }
              }
            ]
          
    } 

    export const AWSData = {
      title: "Areas We Serve",
      areas: [
        {
          title: "Commercial",
          image: Commercial,
          imageSmall: CommercialSmall,
        },
        {
          title: "Industrial",
          image: Industry,
          imageSmall: IndustrySmall,
        },
        {
          title: "Residential",
          image: Residential,
          imageSmall: ResidentialSmall,
        },
      ]
    }

    export const TestinomialsData = {
      title: "Testinomials",
      heading: "Customer Reviews",
      "reviews": [
        {
        "avatar": Avatar1,
        "avatarSmall": AvatarSmall1,
        "name": "John Doe",
        "review": "I recently hired Pest Solutions for pest control services, and I couldn't be happier with the results. Their prompt response, professionalism, and effective treatment eliminated the pests from my home. I highly recommend Pest Solutions for their reliable and efficient service."
        },
        {
        "avatar": Avatar2,
        "avatarSmall": AvatarSmall2,
        "name": "Mike Johnson",
        "review": "I had a severe pest problem in my business premises, and I decided to contact Pest Solutions for help. Their team was incredibly knowledgeable and provided me with a customized pest control plan. They worked diligently, and within a short time, my business was free from pests. I'm grateful for their expertise and would definitely choose them again in the future."
        },
        {
        "avatar": Avatar3,
        "avatarSmall": AvatarSmall3,
        "name": "Jane Smith",
        "review": "After struggling with a persistent termite infestation, I reached out to Pest Solutions for assistance. They responded promptly and conducted a thorough inspection. The technicians were professional, and their treatment plan was effective. Since then, I haven't seen any signs of termites. I'm impressed with their service and would recommend them to anyone dealing with a similar issue."
        },
        {
        "avatar": Avatar4,
        "avatarSmall": AvatarSmall4,
        "name": "Emily Wilson",
        "review": "I recently moved into a new apartment and discovered a bed bug problem. It was distressing, but thanks to Pest Solutions, the issue was resolved efficiently. Their team was courteous and understanding, providing me with detailed information about the treatment process. The bed bugs were eradicated completely, and I can now sleep peacefully. I'm grateful for their expertise and would highly recommend their services."
        }
        ]
    }