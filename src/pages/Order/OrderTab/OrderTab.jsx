import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';

const OrderTab = ({ items }) => {

    const [page, setPage] = useState(1);
    const limit = 6;


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div className='w-11/12 mx-auto'>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                     <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> 
1
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;