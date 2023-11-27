import './News.css';
import { Link, useParams } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import pic1 from './NewsAssets/img/pic1 1.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

export default function News() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const getNews = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/yangilik/${id}/`)
        setData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getNews()
    }, [id])

    const [newsInfo, setnewsInfo] = useState([])
    const getNewsPage = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setnewsInfo(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getNewsPage()
    }, [id])


    return (
        <div className="News">
            {
                newsInfo.map(item => (
                    <div className="NewsContainer" key={item.id}>
                        <div className="NewsTitleLine">
                            <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                            <AiOutlineRight />
                            <Link className='NewsTitleLineText' to={'/News'}>Yangiliklar</Link>
                            <AiOutlineRight />
                        </div>
                        <div className="NewsBloks">
                            {
                                data.map(item => (
                                    <Link className='newB' to={`/yanglik-toliq/${item.id}`}>
                                        <div className="NewsBlok">
                                            <div className="NewsBlokImg">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="NewsBlokText">
                                                <h4>{item.title}</h4>
                                                <p dangerouslySetInnerHTML={{ __html: item.mini_desc+"..."}}></p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}