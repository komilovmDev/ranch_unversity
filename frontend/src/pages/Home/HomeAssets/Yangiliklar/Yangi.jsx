
import { Link } from "react-router-dom";
import './Yangi.css';
import risone from './../image/pic1 1.png';
import risotwo from './../image/pic1 1.png';
import risthree from './../image/pic1 1.png';
import risfour from './../image/pic1 1.png';
import { useState, useEffect } from "react";
import { LuMoveRight } from 'react-icons/lu';
import axios from "axios";
import DOMPurify from 'dompurify';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Yangiliklar() {


    const [data, setData] = useState([])
    const getNews = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/yangilik/43`)
        setData(response.data.slice(0, 8));
        console.log(response.data.slice(0, 8));
    }

    useEffect(() => {
        getNews()
    }, [])


    return (
        <div className="Yangilik">
            <div className="YangiliklarContainer">
                <div className="YangilikTitleBox">
                    <div className="YangilikTitle"><p>Yangiliklar</p></div>
                    <div className="YangilikTitleButton"><h5>To‘liq</h5> <Link> <LuMoveRight /> </Link></div>
                </div>
                <div className="YangilikSwiper">
                    <Swiper
                        className='YangiliklarCards'
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                    >
                        {
                            data.map(item => (

                                <SwiperSlide key={item.id} className="YangilikCard">
                                    <div className="CardImgbox">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="Ebeyshiy">
                                        <div className="Cardtext">
                                            <h4>{item.mini_title}...</h4>
                                            <p dangerouslySetInnerHTML={{ __html: item.mini_desc }}></p>
                                        </div>
                                        <div className="Cardbutton">
                                            <Link to={`yanglik-toliq/${item.id}`}><button>Batafsil...</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}