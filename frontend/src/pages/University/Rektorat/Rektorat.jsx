import "./Rektorat.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';


export default function Rektorat() {

    // const [data, setData] = useState([])
    // const getData = async () => {
    //     const response = await axios.get(`https://utu-ranch.uz/api/rektorat/`)
    //     setData(response.data)
    //     console.log(response.data);
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    const { id } = useParams()
    const [alldata, setallData] = useState([])
    const RetallData = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setallData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        RetallData()
    }, [id])

    return (
        <div className="Rektorat">
            <div className="RektoratContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Rektorat</p>
                </div>
                <div className="RektoratContant">
                    {
                        alldata.map(item => (
                            <div key={item.id} className="RektoratContContainer ">
                                {/* {
                                data.map(info => ( */}
                                <div className="RektoratContantObsh">
                                    <div className="RektoratBox">
                                        <div className="RektoratImg">
                                            <img src={item.rektorimage} alt="" />
                                        </div>
                                        <div className="RektoratText">
                                            <h4>{item.lavozim}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ))
                            } */}

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}