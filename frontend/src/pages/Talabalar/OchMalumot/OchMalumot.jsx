import './OchMalumot.css';
import { Link, useParams } from "react-router-dom";
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import img from './../Talimg/seminar-1024x576 1.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function OchMalumot() {

    const { id } = useParams()
    const [allInfo, setAllInfo] = useState([])
    const getAllInfo = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setAllInfo(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getAllInfo()
    }, [id])




    const [data, setData] = useState([])
    const getMalumot = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/ochiq/malumot/`)
        console.log(response.data);
        setData(response.data)
    }

    useEffect(() => {
        getMalumot()
    }, [id])



    return (
        <div className="OchMalumot">
            {
                allInfo.map(info => (
                    <div key={info.id} className="OchMalumotContainer">
                        <div className="NewsTitleLine">
                            <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                            <AiOutlineRight className='Iconright' />
                            <Link className='NewsTitleLineText' to={'/'}>University</Link>
                            <AiOutlineRight className='Iconright' />
                            <p>Ochiq Ma’lumotlar</p>
                        </div>
                        <div className="OchMalumotContent">
                            <div className="OMCTitle">
                                <p>
                                    Soha hodimlarining huquqiy ongi va madaniyatini yuksaltirish bo’yicha seminarlar
                                </p>
                            </div>

                            <div className="OMCBoxObsh">
                                {
                                    data.map(item => (
                                        <div className="OMCBox">
                                            <div className="imgBoxOMC">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="TextBoxOMC">
                                                <h4>{item.title}</h4>
                                                <p>{item.mini_desc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}