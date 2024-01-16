import { Carousel } from "@material-tailwind/react";
import SliderCard from "../Components/Mycompo/SliderCard";
import img from '../images/slider.jpg'
import img2 from '../images/slider1.jpg'
import img3 from '../images/slider2.jpg'

 
export function CarouselDefault() {
  return (
    <Carousel className=" rounded-xl">
     <SliderCard img={img} />
     <SliderCard img={img2} />
     <SliderCard img={img3} />
     <SliderCard img={img} />
     <SliderCard img={img2} />
     <SliderCard img={img3} />
     <SliderCard img={img} />
     <SliderCard img={img2} />
     <SliderCard img={img3} />
    </Carousel>
  );
}