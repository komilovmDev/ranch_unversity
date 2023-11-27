import './Kunduzgi.css';
import { Link, useParams } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Kunduzgi() {


    const { id } = useParams()
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setData(response.data)
    }

    useEffect(() => {
        getData()
    }, [id])


    return (
        <div className="Kunduzgi">
            <div className="KunduzgiContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Kunduzgi ta’lim yo’nalishlari</p>
                </div>
                <div className="KunduzgiContant">
                    <div className="KundizgiTitle">
                        <p>KUNDUZGI TA’LIM YO’NALISHLARI</p>
                    </div>
                    <div className="KunduzgiTable">
                        <table className='OneTableBoardTable'>
                            <tr className='OneTableBoard'>
                                <td className='PervoeNach'>Yo’nalish <br /> &nbsp;&nbsp;&nbsp; ko‘di</td>
                                <td className='Vtoroe'>Kunduzgi ta’lim yo’nalishlari nomi (o’quv muddati 4 yil)</td>
                                <td className='Tretie'>Shartnoma <br /> miqdori</td>
                            </tr>
                        </table>
                        {
                            data.map(item => (
                                <table>
                                    <tr className='TableName'>
                                        <td className='Pervoe'>60310100</td>
                                        <td className='Vtoroe'>{item.nomi}</td>
                                        <td className='Tretie'>17 002 750</td>
                                    </tr>
                                </table>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}