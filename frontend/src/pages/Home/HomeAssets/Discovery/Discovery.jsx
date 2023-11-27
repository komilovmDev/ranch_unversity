import './Discovery.css';
import zvezda from './../IMG/zvezda.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Zdanie from './../IMG/Ranch_Zdanie.png';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Discovery() {

    const [catData, setCatData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [images, setImages] = useState([]);

    const getcategoryGallary = async () => {
        try {
            const response = await axios.get(`https://utu-ranch.uz/api/all/cat/gal/`);
            setCatData(response.data);
            console.log(response.data);

            // Set the selected category to the first category by default
            if (response.data.length > 0) {
                setSelectedCategory(response.data[0].id);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    const getImages = async (categoryId) => {
        try {
            const response = await axios.get(`https://utu-ranch.uz/api/gal/${categoryId}/`);
            setImages(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    useEffect(() => {
        getcategoryGallary();
    }, []);

    useEffect(() => {
        if (selectedCategory !== null) {
            getImages(selectedCategory);
        }
    }, [selectedCategory]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    }


    return (
        <div className="Discovery">
            <div className="DiscoveryContainer">
                <div className="DiscoveryLeft">
                    <div className="DiscoveryTitle">
                        <p>Discover</p>
                    </div>
                    <div className="DiscoveryHref">
                        {catData.map(item => (
                            <Link key={item.id} onClick={() => handleCategoryClick(item.id)}>
                                <img src={zvezda} alt="" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="DiscoveryRight">
                    <div className="DiscoverySwiper">
                        <Swiper className="DiscoverySwiper"
                            slidesPerView={1}
                            spaceBetween={0}
                            centeredSlides={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1, 
                                    spaceBetween:20,
                                },
                                768: {
                                    slidesPerView: 1, 
                                    spaceBetween:40,
                                },
                                1024: {
                                    slidesPerView: 3, 
                                    spaceBetween:40,
                                }                                                                               
                            }}
                            autoplay={{
                                delay: 1000000,
                            }}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                        >
                            {images.map(item => (
                                <SwiperSlide>
                                    <div className="DiscoverySliderImgBox">
                                        <img src={item.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}