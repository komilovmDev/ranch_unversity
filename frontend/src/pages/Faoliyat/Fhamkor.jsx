import './Fhamkor.css';
import { Link, useParams } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Fpic1 from './Fimg/pic1 1.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Fhamkor() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const getHamkors = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setData(response.data)
    }

    useEffect(() => {
        getHamkors()
    }, [])

    return (
        <div className='Fhamkor'>
            <div className="FhamkorContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Xalqaro hamkor tashkilotlar</p>
                </div>
                <div className="FhamkorContantGlav">
                    <div className="FhamkorContant">
                        {
                            data.map(item => (
                                <Link>
                                    <div className="FhamkorContantBox">
                                        <div className="FhamkorBoxImg">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="FhamkorBoxTitle">
                                            <p>
                                               {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}