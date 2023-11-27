import './Galereya.css';
import { Link, useParams } from "react-router-dom";
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import zvezda from '../../pages/Home/HomeAssets/IMG/zvezda.png';
import './Modal.scss'

export default function Galereya() {
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

    const { id } = useParams()
    const [gallaryData, setGallaryData] = useState([])
    const getGallary = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setGallaryData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getGallary()
    }, [id])

    return (
        <div className="Galereya">
            {
                gallaryData.map(data => (
                    <div className="GalereyaContainer" key={data.id}>
                        <div className="NewsTitleLine">
                            <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                            <AiOutlineRight className='Iconright' />
                            <Link className='NewsTitleLineText' to={'/'}>University</Link>
                            <AiOutlineRight className='Iconright' />
                            <p>Imkoniyatlar</p>
                        </div>
                        <div className="GalereyaContant">
                            <aside>
                                <p className='TitleAside'>Discover</p>
                                <div className="AsideLink">
                                    {catData.map(item => (
                                        <Link key={item.id} onClick={() => handleCategoryClick(item.id)}>
                                            <img src={zvezda} alt="" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </aside>
                            <div className="GalereyaCont">
                                <div className="GalleryContImgBox">
                                    {images.map(item => (
                                        <div key={item.id} className="imgBox">
                                            <img src={item.image} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
