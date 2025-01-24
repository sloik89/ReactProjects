
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { longList } from '../Slider/data';
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
const ReactSlick = () => {
  return (
    <section className='mx-auto mt-10 w-[80vw] max-w-[800px]'>
    <Slider {...settings}>
    {longList.map((item,idx) => {
        return (
            <article key={item.id} className='grid justify-items-center gap-6'>
                <img src={item.image} alt="" className='rounded-full border-2 border-pink-600' />
                <h5 className='font-bold capitalize text-2xl text-violet-600'>{item.name}</h5>
                <p className='capitalized font-bold text-lg'>{item.title}</p>
                <p className='max-w-[300px]'>{item.quote}</p>
            </article>
        )
    })}
  </Slider>
  </section>
  )
}

export default ReactSlick