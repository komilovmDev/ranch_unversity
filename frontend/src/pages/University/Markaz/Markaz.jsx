import './Markaz.css';
import { Link, useParams } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

export default function Markaz() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const getInfos = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setData(response.data)
        console.log(response.data);
    }


    useEffect(() => {
        getInfos()
    }, [id])

    return (
        <div className="Markaz">
            <div className="MarkazContainer">
                {
                    data.map(item => (
                        <>
                            <div className="NewsTitleLine">
                                <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                                <AiOutlineRight className='Iconright' />
                                <Link className='NewsTitleLineText' to={'/'}>University</Link>
                                <AiOutlineRight className='Iconright' />
                                <p>{item.category[0].name}</p>
                            </div>
                            <div className="MarkazTitle">
                                <h4>{item.title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}