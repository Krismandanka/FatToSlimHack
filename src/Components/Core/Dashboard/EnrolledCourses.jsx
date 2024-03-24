import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {getUserCourses as getUserEnrolledCourses}  from '../../../services/operations/productAPI';
import ProgressBar from '@ramonak/react-progress-bar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const EnrolledCourses = () => {
    const dispatch=useDispatch();

    const {token}  = useSelector((state) => state.auth);

    const [enrolledCourses, setEnrolledCourses] = useState(undefined);
    const [progressData, setProgressData] = useState(undefined);
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const getEnrolledCourses = async() => {
        setLoading(true);
            const response = await getUserEnrolledCourses(token,dispatch);
            console.log("getEnrolledCourses -> response", response.courses[0]._id);
            setLoading(false);
            setEnrolledCourses(response?.courses);
            setProgressData(response?.courseProgress);

    }

    const totalNoOfLectures = (course) => {
        let total = 0;
        course.courseContent.forEach((section) => {
            total += section.subSection.length;
        });
        return total;
    }

    useEffect(()=> {
        getEnrolledCourses();
    },[]);

    if(Loading) {
        return (
            <div className='flex h-[calc(100vh)] w-full justify-center items-center'>
                <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-richblack-500'></div>
            </div>
        )
    }


  return (
    <div className='mx-auto w-11/12 max-w-[1000px] py-10'>

        <div className='text-3xl text-richblack-50'>Enrolled Courses</div>
        {
            !enrolledCourses ? (<div>
                Loading...
            </div>)
            : !enrolledCourses.length ? (<p className='grid h-[10vh] w-full place-content-center text-richblack-5'>You have not enrolled in any course yet</p>)
            : (
                <div className='my-8 text-richblack-5'>
                    <div className='flex rounded-t-lg bg-richblack-500 '>
                        <p className='w-[45%] px-5 py-3'>Course Name</p>
                        <p className='w-1/4 px-2 py-3'></p>
                        <p className='flex-1 px-2 py-3'>Progress</p>
                    </div>
                    {/* Cards shure hote h ab */}
                    {
                        enrolledCourses.map((course,index)=> (
                            <div key={index} onClick={()=>{
                                navigate(`/courses/${course._id}`)}}
                                 className='flex items-center border border-richblack-700 rounded-none'>
                                <div className='flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3'>
                                    <img className='h-14 w-14 rounded-lg object-cover'  src={course.thumbnail}/>
                                    <div className='flex max-w-xs flex-col gap-2'>
                                        <p className='font-semibold'>{course.courseName}</p>
                                        <p className='text-xs text-richblack-300 hidden md:block'>{
                                            //description with max 50 characters
                                            course.courseDescription.length > 50 ? course.courseDescription.slice(0,50) + '....' : course.courseDescription
                                        }</p>
                                    </div>
                                </div>

                                <div className='w-1/4 px-2 py-3'>
                                    {course?.totalDuration}
                                </div>

                                <div className='flex w-1/5 flex-col gap-2 px- py-3'>
                                    {
                                        progressData?.map((progress,index)=> {
                                            //show 0 progress if no progress data is available
                                            if(progress?.courseID === course?._id) {
                                                return (
                                                    <div key={index}>
                                                        <p>Completed: {progress?.completedVideos?.length} / {totalNoOfLectures(course)}</p>
                                                        <ProgressBar
                                                            completed={progress?.completedVideos?.length/totalNoOfLectures(course)*100}
                                                            total={progress?.total}
                                                            height='8px'
                                                            isLabelVisible={false}
                                                            />
                                                    </div>
                                                )
                                            }
                                            return null;
                                        }
                                        )
                                    }
                                    </div> 
                            </div>
                        ))
                    }
                </div>
            )
        }
      
    </div>
  )
}

export default EnrolledCourses

// function amj(){
//     return (
//         <div>
//             {
//                         enrolledCourses.map((course,index)=> (
//                             <div key={index} onClick={()=>{
//                                 navigate(`/courses/${course._id}`)}}
//                                  className='flex items-center border border-richblack-700 rounded-none'>
//                                 <div className='flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3'>
//                                     <img className='h-14 w-14 rounded-lg object-cover'  src={course.thumbnail}/>
//                                     <div className='flex max-w-xs flex-col gap-2'>
//                                         <p className='font-semibold'>{course.courseName}</p>
//                                         <p className='text-xs text-richblack-300 hidden md:block'>{
//                                             //description with max 50 characters
//                                             course.courseDescription.length > 50 ? course.courseDescription.slice(0,50) + '....' : course.courseDescription
//                                         }</p>
//                                     </div>
//                                 </div>

//                                 <div className='w-1/4 px-2 py-3'>
//                                     {course?.totalDuration}
//                                 </div>

//                                 <div className='flex w-1/5 flex-col gap-2 px- py-3'>
//                                     {
//                                         progressData?.map((progress,index)=> {
//                                             //show 0 progress if no progress data is available
//                                             if(progress?.courseID === course?._id) {
//                                                 return (
//                                                     <div key={index}>
//                                                         <p>Completed: {progress?.completedVideos?.length} / {totalNoOfLectures(course)}</p>
//                                                         <ProgressBar
//                                                             completed={progress?.completedVideos?.length/totalNoOfLectures(course)*100}
//                                                             total={progress?.total}
//                                                             height='8px'
//                                                             isLabelVisible={false}
//                                                             />
//                                                     </div>
//                                                 )
//                                             }
//                                             return null;
//                                         }
//                                         )
//                                     }
//                                     </div> 
//                             </div>
//                         ))
//                     }
            

//         <div class="w-full px-4 md:w-1/2 xl:w-1/3" key={index} onClick={()=>{
//                                 navigate(`/courses/${course._id}`)}}>
//             <div
//                class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
//                >
//                <img
//                   src={course.thumbnail}
//                   alt="image"
//                   class="w-full"
//                   />
//                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
//                   <h3>
//                      <a
//                         href="javascript:void(0)"
//                         class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
//                         >
//                      {course.courseName}
//                      </a>
//                   </h3>
//                   <p class="text-base leading-relaxed text-body-color mb-7">
//                   {
//                                             //description with max 50 characters
//                                             course.courseDescription.length > 50 ? course.courseDescription.slice(0,50) + '....' : course.courseDescription
//                                         }
//                   </p>
//                   <a
//                      href="javascript:void(0)"
//                      class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
//                      >
//                   View Details
//                   </a>
//                </div>
//             </div>
//          </div>
//         </div>

//     )
// }