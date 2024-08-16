
// import './App.css'
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import car from '../src/assets/car.gif';
// import { io } from 'socket.io-client';



// function App() {

//   const datas = [
//     {
//       image: car,
//       head: `Interaction Center:`,
//       para: `Seamless customer interactions across multiple channels.`
//     },
//     {
//       image: car,
//       head: `Interaction Center:`,
//       para: `Seamless customer interactions across multiple channels.`
//     },
//     {
//       image: car,
//       head: `Interaction Center:`,
//       para: `Seamless customer interactions across multiple channels.`
//     },
//     {
//       image: car,
//       head: `Interaction Center:`,
//       para: `Seamless customer interactions across multiple channels.`
//     },
//     {
//       image: car,
//       head: `Interaction Center:`,
//       para: `Seamless customer interactions across multiple channels.`
//     },
//     {
//       image: car,
//       head: `Interaction Center:`,
//       para: `Seamless customer interactions across multiple channels.`
//     },
// ]
// return (
//   <>
//     <div className='flex justify-center items-center text-[30px] p-8' >Slider</div>
//     <div>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={5}
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {datas.map((da, index) => (
//           <SwiperSlide key={index}>
//             <div className='flex  justify-center items-center container mx-auto ' style={{ paddingBottom: '40px' }}>
//               <div className='bg-[#FFDF9F] border rounded-3xl flex flex-col items-center justify-center p-5 m-3 lg:w-[380px] lg:h-[400px] md:w-[300px] md:h-[360px] cursor-pointer'> {/* Ensure consistent height and width */}
//                 <div className='h-[50%] flex justify-center items-center'>
//                   <img src={da.image} alt="" className='w-32 h-32 rotate' />
//                 </div>
//                 <div className='flex justify-center items-center h-[20%]'>
//                   <p className='text-[24px] font-bold leading-tight tracking-tighter flex justify-center items-center'>{da.head}</p>
//                 </div>
//                 <div className='h-[20%] mt-3 flex items-center'>
//                   <p className='text-[18px]'>{da.para}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   </>
// )
// }

// export default App

import './App.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import car from '../src/assets/car.gif';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function App() {
  const [datas, setDatas] = useState([
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`,
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`,
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`,
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`,
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`,
    },
    {
      image: car,
      head: `Interaction Center:`,
      para: `Seamless customer interactions across multiple channels.`,
    },
  ]);

  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('http://localhost:7006');

    // Listen for the 'newProduct' event from the server
    socket.on('newProduct', (data) => {
      console.log('New product received:', data);
      setNewProduct(data);

      // Automatically hide the popup after 5 seconds
      setTimeout(() => {
        setNewProduct(null);
      }, 9000);
    });

    // Cleanup the connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className='flex justify-center items-center text-[30px] p-8'>Slider</div>
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
              <div className='flex justify-center items-center container mx-auto' style={{ paddingBottom: '40px' }}>
                <div className='bg-[#FFDF9F] border rounded-3xl flex flex-col items-center justify-center p-5 m-3 lg:w-[380px] lg:h-[400px] md:w-[300px] md:h-[360px] cursor-pointer'>
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

      {newProduct && (
        <div className="fixed bottom-5 right-5 bg-blue-50 border border-blue-200 rounded-lg shadow-lg p-4 max-w-xs flex items-center">
          <img
            src={newProduct.image || 'default-product-image.png'}
            alt="Product"
            className="w-44 h-12 rounded-full mr-4"
          />
          <div className="text-sm">
            <p className="font-semibold">{newProduct.name}</p>
            <p className="text-gray-600">{newProduct.description}</p>
          </div>
          <button
            onClick={() => setNewProduct(null)}
            className="ml-auto text-gray-400 hover:text-gray-600"
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
}

export default App;
