import './Hamkor.css';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import ris from './../HamkorImg/ris1 (1).png'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Hamkor() {

    const [data, setData] = useState([])
    const getHamkor = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/hamkorlar/`);
        setData(response.data);
    }

    useEffect(() => {
        getHamkor()
    }, [])

    return (
        <div className="Hamkor">
            <div className="HamkorTitleBox">
                <div className="HamkorTitle">
                    <p>Hamkorlarimiz</p>
                </div>
            </div>
            <div className="HamkorImgBox">
                <div className="HamkorSwiperBox">
                    <Swiper className="HamkorSwiper"
                        slidesPerView={3}
                        spaceBetween={0}
                        centeredSlides={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3, 
                                spaceBetween:20,
                            },
                            768: {
                                slidesPerView: 3, 
                                spaceBetween:40,
                            },
                            1024: {
                                slidesPerView: 8, 
                                spaceBetween:40,
                            }                                                                                                  
                        }}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {
                            data.map(item => (
                                <SwiperSlide><div className="HamkorSliderImgBox"><Link to={item.url_link}><img src={item.image} alt="" /></Link></div></SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}