import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { pdfjs } from 'react-pdf';
import { useEffect, useState } from 'react';
import Review from '../Components/review';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const Home = () => {

  const [reviews, setReviews] =useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  return (
        <div>
          <Navbar></Navbar>

          <div className="min-h-screen max-w-7xl mx-auto my-20">
          <div className="carousel ">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/9VjMWPk/Untitled-Export-ZLebldtxs-1.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/RQ9mKSh/image.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/ccSXd29/image.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

          </div>

          {/* FAQ */}

          <div className='mb-10 max-h-30'>
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" "
      >
        <div className='flex flex-col ' >
        {
            reviews.map(review =><SwiperSlide className='' key={review.id} ><Review  review={review}></Review></SwiperSlide>)
        }
        </div>
        
        
      </Swiper>
          </div>

          <div className=" bottom-0 w-full">
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Home;