// import React from 'react'
// // import React from 'react'

// import {Swiper, SwiperSlide} from "swiper/react"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "swiper/css/navigation";
// // import { Autoplay,FreeMode,Navigation, Pagination,Mousewheel, Keyboard}  from 'swiper'
// // import  "swiper/css/autoplay" ;
// // import   "swiper/css/keyboard";
// // import "swiper/css/mousewheel"
// // import "swiper/css/navigation"
// // import "swiper/css/pagination"

// // import { Autoplay,Mousewheel, Keyboard}  from 'swiper'
// // import img from "../../."

// const ProductItems = () => {
//   return (

//     <div>
//         <Swiper
//                  mousewheel={
//                       {
//                           enabled: true,
//                           forceToAxis: true,
//                       }
//                  }
//                  keyboard={
//                       {
//                           enabled: true,
//                           onlyInViewport: true,
//                       }
//                  }
//                  allowSlidePrev={true}
//                     slidesPerView={1}
//                     loop={true}
//                     spaceBetween={20}
//                     pagination={false}
//                     // modules={[Mousewheel,Keyboard, Autoplay]}
//                     className="mySwiper md:pt-5"
//                     autoplay={{
//                     delay: 2000,
//                     disableOnInteraction: false,
//                     }}
//                     style={{
//                         "--swiper-navigation-size": "20px",
//                       }}
//                     // freeMode={false}
//                     rewind={false}
//                     centeredSlides={true}
//                     navigation={false}
//                     direction="vertical"
//                     // navigation={
//                     //     {
//                     //         nextEl: ".swiper-button-next",
//                     //         prevEl: ".swiper-button-prev",
//                     //     }
//                     // }
//                     breakpoints={{
//                         300:{slidesPerView:1.1,spaceBetween:10,},
//                         640:{slidesPerView:2.2,},
//                         1024:{slidesPerView:3.1,}
//                     }}

//                 >

//                             <SwiperSlide >
//                                 <div className='flex flex-col gap-3 min-h-[150px] bg-richblack-800 p-3 text-[14px] text-richblack-25'>
//                                     <div className='flex items-center gap-4'>
//                                         {/* <img src={"https://reactjs.org/logo-og.png"} alt="user" className='h-9 w-9 rounded-full object-cover' /> */}
//                                         <div className='flex flex-col'>
//                                             <h3 className='font-semibold text-richblack-5'>Lrod kird</h3>
//                                             <p className='text-[12px] font-medium text-richblack-500'>somehthing</p>
//                                         </div>
//                                     </div>
//                                     <div className='font-medium text-richblack-25'>okkkkkk...</div>

//                                 </div>

//                             </SwiperSlide>
//                             <SwiperSlide >
//                                 <div className='flex flex-col gap-3 min-h-[150px] bg-richblack-800 p-3 text-[14px] text-richblack-25'>
//                                     <div className='flex items-center gap-4'>
//                                         {/* <img src={"https://reactjs.org/logo-og.png"} alt="user" className='h-9 w-9 rounded-full object-cover' /> */}
//                                         <div className='flex flex-col'>
//                                             <h3 className='font-semibold text-richblack-5'>Lrod kird</h3>
//                                             <p className='text-[12px] font-medium text-richblack-500'>llllllllllllllllllllll</p>
//                                         </div>
//                                     </div>
//                                     <div className='font-medium text-richblack-25'>ppppppppppppppp...</div>

//                                 </div>

//                             </SwiperSlide>

//                     {/* <div className='swiper-button-next'></div> */}
//                     {/* <div className='swiper-button-prev'></div> */}
//                 </Swiper>
//     </div>

//   )
// }
// // {review?.review.slice(0,70)}
// export default ProductItems

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Stack, StackDivider } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { Button, ButtonGroup, Image, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addToCart} from "../../../slices/cartSlice"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";





const ProductItems = ({ inProdu }) => {
  // const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleAddToCart = (product) =>{
    if(token){
      dispatch(addToCart(product));
      // console.log("handelAddToCart -> courseId", courseDetail._id)
      }
      else{
          navigate('/login');
      }
  }
  


  return (
    <>
      {inProdu.length}
      {inProdu.map((product, index) => (
        <Card maxW="sm" key={product._id}>
          <CardBody>
            <Image
              src={product.thumbnail}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.courseName}</Heading>
              <Text>{product.courseDescription}</Text>
              <Text color="blue.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue" onClick={()=>{handleAddToCart(product)} }>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ProductItems;
