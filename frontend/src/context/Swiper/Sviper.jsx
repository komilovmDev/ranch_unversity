import './Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Zdanie from './../../pages/Home/HomeAssets/IMG/Ranch_Zdanie.png'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Sviper() {

    const [data, setData] = useState([])
    const getBanners = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/bannerlar/`)
        setData(response.data)
    }

    useEffect(() => {
        getBanners()
    }, [])

    return (
        <div className='Sviper'>
            <div className="SwiperBarbeg">
                <div className="SviperSwiper">
                    <Swiper className="Swiper"
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {
                            data.map(item => (
                                <SwiperSlide className='bannerBox'>
                                    <div className="SliderImgBox">
                                        <img src={item.image} alt="" style={{ width: '100%' }} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
            <div className="BlankBegBox">
                <marquee className='BlankBeg' scrollamount="5"> • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! </marquee>
            </div>
        </div>
    )
}