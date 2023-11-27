import './NewsPage.css';
import { Link, useParams } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Pic1 from './../News/NewsAssets/img/pic1 1.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

export default function NewsPage() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getNews = async () => {
        try {
            const response = await axios.get(`https://utu-ranch.uz/api/yangiliklar/${id}/`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching news:", error);
            // Handle the error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="NewsPage">
            <div className="NewsPageContainer" key={data.id}>
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/News'}>Yangiliklar</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>/ ichki</p>
                </div>

                <div className="NewsPageContant">
                    <div className="NewsPageContantTitle">
                        <p>{data.title}</p>
                    </div>

                    <div className="NewsPageContantBox">
                        <div className="NewsPageContantBoxImg">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="NewsPageContantBoxText">
                            <p dangerouslySetInnerHTML={{ __html: data.desc}}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
