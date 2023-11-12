// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <div className="my-10">
    <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='relative'>
          <img src={slide1} alt="" />
          <h3 className="absolute right-0 bottom-0 left-0 transform -translate-y-1/2 md:text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src={slide2} alt="" />
          <h3 className="absolute right-0 bottom-0 left-0 transform -translate-y-1/2 md:text-4xl uppercase text-center -mt-16 text-white">pizzas</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src={slide3} alt="" />
          <h3 className="absolute right-0 bottom-0 left-0 transform -translate-y-1/2 md:text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src={slide4} alt="" />
          <h3 className="absolute right-0 bottom-0 left-0 transform -translate-y-1/2 md:text-4xl uppercase text-center -mt-16 text-white">Breads</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src={slide5} alt="" />
        <h3 className="absolute right-0 bottom-0 left-0 transform -translate-y-1/2 md:text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src={slide2} alt="" />
          <h3 className="absolute right-0 bottom-0 left-0 transform -translate-y-1/2 md:text-4xl uppercase text-center -mt-16 text-white">pizzas</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
