
import './App.css'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import car from '../src/assets/car.gif'


function App() {

  const datas = [
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`
    },
]
return (
  <>
    <div className='flex justify-center items-center text-[30px] p-8' >Slider</div>
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {datas.map((da, index) => (
          <SwiperSlide key={index}>
            <div className='flex  justify-center items-center container mx-auto ' style={{ paddingBottom: '40px' }}>
              <div className='bg-[#FFDF9F] border rounded-3xl flex flex-col items-center justify-center p-5 m-3 lg:w-[380px] lg:h-[400px] md:w-[300px] md:h-[360px] cursor-pointer'> {/* Ensure consistent height and width */}
                <div className='h-[50%] flex justify-center items-center'>
                  <img src={da.image} alt="" className='w-32 h-32 rotate' />
                </div>
                <div className='flex justify-center items-center h-[20%]'>
                  <p className='text-[24px] font-bold leading-tight tracking-tighter flex justify-center items-center'>{da.head}</p>
                </div>
                <div className='h-[20%] mt-3 flex items-center'>
                  <p className='text-[18px]'>{da.para}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
)
}

export default App
