import {lazy,Suspense} from "react";
import { TestinomialsData } from "../data/Home"
import Loader from "./Loader";
import { ReviewCard } from "./ReviewCard"
const Slider =  lazy(() => import("react-slick"));
const Testinomials = () => {
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300,
    }
  return (
    <div className="container review-section">
        <h3 className="text-underline">{TestinomialsData.title}</h3>
        <h2>{TestinomialsData.heading}</h2>
        <div className="review-slider">
        <Suspense fallback={<Loader />}>
        <Slider {...settings}>
        {TestinomialsData.reviews.map((review,index)=>{
                return <ReviewCard review={review} key={index}/>
        })}
        </Slider>
        </Suspense>
        </div>
    </div>
  )
}

export default Testinomials