import React from 'react'
import Slider from './Slider'
// import SwiperBox from './SwiperBox'
// import {Swiper} from "swiper/react"
import ProductItems from './ProductItems'
import { getAllProducts } from '../../../services/operations/productAPI'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { setLoading } from '../../../slices/authSlice'
import { Button } from '@chakra-ui/react'
const categories = [
  "10Days",
  "Self Diet",
  "Expert Diet",
  "Advance Diet"
  
];


const ProductsPage = () => {
  const [category, setCategory] = useState("");
  const [produ,setProdu] = useState(null);
  const [load,setLoad] = useState(true);

  const [inProdu,setInprodu] = useState(null);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.profile);


  // const dataFetch = async ()=>{
  //   // setLoading(true);
  //   const results = await getAllProducts(dispatch);

  //   // setLoading(false);
    
  //   setProdu(results)
  //   console.log("lolllll",results);
  //   setLoad(false);
  //   console.log("loadind",load);
  //         console.log("kol",produ);

  // }
  // const dataFetch = async () => {
  //   try {
  //     // Set loading to true before fetching data
  //     setLoad(true);
  
  //     // Fetch data
  //     const results = await getAllProducts(dispatch);
  
  //     // Use the state updater function to ensure the latest state
  //     setProdu((prevProdu) => {
  //       console.log("lolllll", results);
  //       return results;
  //     });
  
  //     // Set loading to false after data is fetched
  //     setLoad(false);
  
  //     console.log("loadind", load);
  //     console.log("kol", produ);
  //   } catch (error) {
  //     // Handle errors appropriately
  //     console.error("Error fetching data:", error);
  
  //     // Set loading to false in case of an error
  //     setLoad(false);
  //   }
  // };
  

  useEffect(() => {
    const fetchData = async () => {
      try {

        console.log("fffffffffff")

        

        if (category === "") {
          // Set loading to true before fetching data

          setLoad(true);
  
          // Fetch data
          const results = await getAllProducts(dispatch);
          


  
          // Use the state updater function to ensure the latest state
          setProdu((prevProdu) => results);
          setInprodu((prevProdu)=>results)
          // Set loading to false after data is fetched
          setLoad(false);
  
          console.log("Data fetched successfully:", results);
          console.log("loading",load)
          console.log("kol", produ);
        } else {
          // Handle category-specific logic if needed


          


        }
      } catch (error) {
        // Handle errors appropriately
        console.error("Error fetching data:", error);

        
  
        // Set loading to false in case of an error
        setLoad(false);
      }
    };
  
    fetchData(); // Call the fetchData function
  
    // Add any dependencies if needed (e.g., category)
  }, []);


  
  
  const  categoryData = (cat) =>{
    const temp=  produ.filter((item)=>item.category=== cat);
    setInprodu((prevProdu)=>temp)
  }
  
  




  return (
  
    load ?(<div>loading..</div>):(
      <div className='grid grid-cols-12 relative  space-x-3 p-4 mt-24 mx-32 h-fit-content'>
    <div className=' col-span-3 col-start-1 '>
    <ul className="p-0">
              {categories.map((category) => (
                <Button
                  className="list-none text-[rgba(0, 0, 0, 0.61)] m-1"
                  key={category}
                  onClick={() => categoryData(category)}
                >
                  {category}
                </Button>
              ))}
            </ul>
    </div>
    <div className='col-span-9 col-start-4 flex flex-col  '>
      
        {/* <SwiperBox /> */}
        <Slider />
        
        
      <div className='flex w-[100%] items-center justify-around ' >
        <div className='w-[55%] border-r-4  border-l-4 p-4 '>
          <main className=" flex flex-row h-screen">

           
            <div className=" w-[100%] bg-gray-50 max-h-screen overflow-y-auto">
              <ProductItems inProdu={inProdu} />
            </div>

          </main>
        </div>
        <div className='w-[35%]'>
           
        </div>
      </div>
      
      
    </div>
    
  </div>
    )
  

  )
}

export default ProductsPage







// import React from 'react'
// import Slider from './Slider'
// // import SwiperBox from './SwiperBox'
// // import {Swiper} from "swiper/react"
// import ProductItems from './ProductItems'
// import { getAllProducts } from '../../../services/operations/productAPI'
// import { useState,useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
// import { setLoading } from '../../../slices/authSlice'
// const categories = [
//   "Laptop",
//   "Footwear",
//   "Bottom",
//   "Tops",
//   "Attire",
//   "Camera",
//   "SmartPhones",
// ];


// const ProductsPage = () => {
//   const [category, setCategory] = useState("");
//   const [produ,setProdu] = useState(null);
//   const [load,setLoad] = useState(true);

//   const [inProdu,setInprodu] = useState(null);

//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.profile);


//   // const dataFetch = async ()=>{
//   //   // setLoading(true);
//   //   const results = await getAllProducts(dispatch);

//   //   // setLoading(false);
    
//   //   setProdu(results)
//   //   console.log("lolllll",results);
//   //   setLoad(false);
//   //   console.log("loadind",load);
//   //         console.log("kol",produ);

//   // }
//   // const dataFetch = async () => {
//   //   try {
//   //     // Set loading to true before fetching data
//   //     setLoad(true);
  
//   //     // Fetch data
//   //     const results = await getAllProducts(dispatch);
  
//   //     // Use the state updater function to ensure the latest state
//   //     setProdu((prevProdu) => {
//   //       console.log("lolllll", results);
//   //       return results;
//   //     });
  
//   //     // Set loading to false after data is fetched
//   //     setLoad(false);
  
//   //     console.log("loadind", load);
//   //     console.log("kol", produ);
//   //   } catch (error) {
//   //     // Handle errors appropriately
//   //     console.error("Error fetching data:", error);
  
//   //     // Set loading to false in case of an error
//   //     setLoad(false);
//   //   }
//   // };
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {


        

//         if (category === "") {
//           // Set loading to true before fetching data

//           setLoad(true);
  
//           // Fetch data
//           const results = await getAllProducts(dispatch);
          
  
//           // Use the state updater function to ensure the latest state
//           setProdu((prevProdu) => results);
//           setInprodu((prevProdu)=>produ)
//           // Set loading to false after data is fetched
//           setLoad(false);
  
//           console.log("Data fetched successfully:", results);
//           console.log("loading",load)
//           console.log("kol", produ);
//         } else {
//           // Handle category-specific logic if needed


          


//         }
//       } catch (error) {
//         // Handle errors appropriately
//         console.error("Error fetching data:", error);
  
//         // Set loading to false in case of an error
//         setLoad(false);
//       }
//     };
  
//     fetchData(); // Call the fetchData function
  
//     // Add any dependencies if needed (e.g., category)
//   }, [category]);


  
  
//   const  categoryData = () =>{

//   }
  
  




//   return (
  
//     load ?(<div>loading..</div>):(
//       <div className='grid grid-cols-12 relative  space-x-3 p-4 mt-24 mx-32 h-fit-content'>
//     <div className=' col-span-3 col-start-1 '>
//     <ul className="p-0">
//               {categories.map((category) => (
//                 <li
//                   className="list-none text-[rgba(0, 0, 0, 0.61)] m-1"
//                   key={category}
//                   onClick={() => setsCategory(category)}
//                 >
//                   {category}
//                 </li>
//               ))}
//             </ul>
//     </div>
//     <div className='col-span-9 col-start-4 flex flex-col  '>
      
//         {/* <SwiperBox /> */}
//         <Slider />
        
        
//       <div className='flex w-[100%] items-center justify-around ' >
//         <div className='w-[55%] border-r-4  border-l-4 p-4 '>
//           <main className=" flex flex-row h-screen">

           
//             <div className=" w-[100%] bg-gray-50 max-h-screen overflow-y-auto">
//               <ProductItems produ={produ} />
//             </div>

//           </main>
//         </div>
//         <div className='w-[35%]'>
//            2
//         </div>
//       </div>
      
      
//     </div>
    
//   </div>
//     )
  

//   )
// }

// export default ProductsPage