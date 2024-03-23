import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Link
} from "@chakra-ui/react";
// import Link from "@babel/core"
import logo from "../../assets/Logo/logo-removebg.png"

import { Link as Liik, matchPath } from 'react-router-dom'


export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <div className="flex flex-col w-full mt-32">


    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
          className="font-epilogue"
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to="/healthPlan">
          <Button borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
            <Liik to="login">
              Create your account now

            </Liik>
            
          </Button>
        </Link>
        
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
      

    </Flex>
    {/* <!-- component --> */}
{/* <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
  </div>
  <div>
    <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
    <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
    <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
  </div>
</nav> */}


    {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}

<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-4">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
          <img className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="" />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
          <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" ></div>
          </div>
          <figure className="relative isolate">
            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20">
              <path id="0ef284b8-28c2-426e-9442-8655d393522e" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
              <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
            </svg>
            <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
              <p>“"What happens is not as important as how you react to what happens." "The journey of a thousand miles begins with one step." "The only true wisdom is in knowing you know nothing." "Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind..”</p>
            </blockquote>
            <figcaption className="mt-6 text-sm leading-6 text-gray-300"><strong className="font-semibold text-white">Shehab Najib,</strong> ceo of ISREN</figcaption>
          </figure>
        </div>
      </div>
      <div>
        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-yellow-400">wisdom values</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shikha Aggarwal</h1>
          <div className="max-w-xl">
            <p className="mt-6">
Fat To Slim Shikha Aggarwal Sharma is all about ‘Eat, Sleep, No Exercise, Loose. Shikha Aggarwal Sharma is a Celebrity Dietitian and Nutritionist , She specializes in Indian based diet, Her diet is more about Indian food and not at all about Brown Bread, Brown Rice or those fancy Salads.</p>
            <p className="mt-8">She is Running her Venture in the Name of “Fat to Slim”. In a short period, she has 30000+ clients across India & abroad and that she has achieved only by the word of mouth from her existing clients. </p>
            {/* <p className="mt-8">She uses indian home based diet to fix different health issues as well.In fact she gives so much to eat that sometimes her clients ask her to skip meals from the diet program.</p> */}
          </div>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
          <div>Founder
            <dt className="text-sm font-semibold leading-6 text-gray-600">Name</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">Shikha Agarwal</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold leading-6 text-gray-600">Employees</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">uncounted</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold leading-6 text-gray-600">Courses</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">7</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold leading-6 text-gray-600">Customers</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">4003</dd>
          </div>
        </dl>
        <div class="mt-10 flex">
          <a href="#" className="text-base font-semibold leading-7 text-yellow-500">Learn more about our company <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
</div>



    {/* reviewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

<section class="bg-gray-2 dark:bg-dark pt-20  lg:pt-[120px] lg:pb-20 p-10">
   <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                  alt="image"
                  class="w-full"
                  />
                  <h1 className="text-center mt-4 font-bold font-epilogue">Name</h1>
               <div class="text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     50+ Best creative website themes & templates
                     </a>
                  </h3>
                  <p
                     class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7"
                     >
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     The ultimate UX and UI guide to card design
                     </a>
                  </h3>
                  <p class="text-base leading-relaxed text-body-color mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <img
               
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     Creative Card Component designs graphic elements
                     </a>
                  </h3>
                  <p class="text-base leading-relaxed text-body-color mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>





    {/* %%%%%%%%%%%%%%%%% fooooooooooooooooooter*/}
<footer class="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-8">
        <img class="h-20" src={logo} alt="Company name" />
        <p class="text-sm leading-6 text-gray-600">Making football look better to the world and a more respecful game.</p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-yellow-500 hover:text-gray-500">
            <span class="sr-only">the team is on fire</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M8.074.945A4.993 4.993 0 0 0 6 5v.032c.004.6.114 1.176.311 1.709.16.428-.204.91-.61.7a5.023 5.023 0 0 1-1.868-1.677c-.202-.304-.648-.363-.848-.058a6 6 0 1 0 8.017-1.901l-.004-.007a4.98 4.98 0 0 1-2.18-2.574c-.116-.31-.477-.472-.744-.28Zm.78 6.178a3.001 3.001 0 1 1-3.473 4.341c-.205-.365.215-.694.62-.59a4.008 4.008 0 0 0 1.873.03c.288-.065.413-.386.321-.666A3.997 3.997 0 0 1 8 8.999c0-.585.126-1.14.351-1.641a.42.42 0 0 1 .503-.235Z" clip-rule="evenodd" />
</svg>

          </a>
          <a href="#" class="text-gray-400 hover:text-blue-4      00">
            <span class="sr-only">X</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
  <path d="M2.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0v-2.624l.33-.083A6.044 6.044 0 0 1 8 11c1.29.645 2.77.807 4.17.457l1.48-.37a.462.462 0 0 0 .35-.448V3.56a.438.438 0 0 0-.544-.425l-1.287.322C10.77 3.808 9.291 3.646 8 3a6.045 6.045 0 0 0-4.17-.457l-.34.085A.75.75 0 0 0 2.75 2Z" />
</svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">YouTube</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Insights</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">API Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p class="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>



    

    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Hero.defaultProps = {
  title: "Fat to slim",
  subtitle:
    "Watch Our Latest & Most Popular Videos With The Unique Concept",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup"
};
