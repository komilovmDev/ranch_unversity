import './Zayavka.css';
import { Link, useParams } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Dropdown from '../../../context/Dropdwn/Dropdwn';
import BasicTable from '../../../context/Table/BasicTable';
import axios from 'axios'
import { useEffect, useState } from 'react';


export default function Zayavka() {


    const { id } = useParams();
    const [data, setData] = useState([]);

    const getZyafka = async () => {
        try {
            const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getZyafka();
    }, [id]);



    return (
        <div className="Zayavka">
            <div className="ZayavkaContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>{""}</p>
                </div>
                {
                    data.map(item => (
                        <div className="ZayavkaСontant">
                            <div className="ZayavkaOne">
                                <div className="ZayavkaOneContainer">
                                    <div className="ZOCName">
                                        <form>
                                            <label htmlFor="name">Familiya</label>
                                            <input type="text" id="familiya" name="familiya" />
                                        </form>
                                        <form>
                                            <label htmlFor="name">Ismi</label>
                                            <input type="name" minLength="4" maxLength="20" size="10" />
                                        </form>
                                        <form>
                                            <label htmlFor="name">Sharifi</label>
                                            <input type="name" minLength="4" maxLength="20" size="10" />
                                        </form>
                                    </div>
                                    <div className="ZOCPhone">
                                        <form>
                                            <label htmlFor="tel">Telefon</label>
                                            <input type="tel" placeholder='+998999999999' minLength="4" maxLength="11" size="10" />
                                        </form>
                                        <form>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" minLength="7" size="100" />
                                        </form>
                                    </div>
                                    <div className="ZOCDok">
                                        <form>
                                            <label htmlFor="text">Pasport seriya</label>
                                            <input type="text" minLength="2" maxLength="2" size="10" />
                                        </form>
                                        <form>
                                            <label htmlFor="number">Pasport raqami</label>
                                            <input type="number" minLength="4" maxLength="7" size="10" />
                                        </form>
                                        <form>
                                            <label htmlFor="date">Tugilgan Yilingiz</label>
                                            <input type="date" size="10" />
                                        </form>
                                    </div>
                                    <div className="ZOCvibor">
                                        <p>Jinsi</p>
                                        <form>
                                            <div>
                                                <label htmlFor="raz">Erkak</label>
                                                <input type="radio" checked name="raz" />
                                            </div>
                                            <div>
                                                <label htmlFor="raz">Ayol</label>
                                                <input type="radio" name="raz" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="ZOCVibor">
                                        <label htmlFor="vibor">Yo‘nalishlar</label>
                                        <Dropdown />
                                    </div>
                                    <div className="ZOCManzil">
                                        <label htmlFor="text">Manzil</label>
                                        <input type="text" minLength="4" />
                                    </div>
                                    <div className="ZOCFail">
                                        <form method="post">
                                            <p>Passport fayli</p>
                                            <label className="input-file">
                                                <input type="file" name='file' />
                                                <span>Fayl yuklash</span>
                                            </label>
                                        </form>
                                        <form method="post">
                                            <p>Attestat fayli</p>
                                            <label className="input-file">
                                                <input type="file" name='file' />
                                                <span>Fayl yuklash</span>
                                            </label>
                                        </form>
                                    </div>
                                    <div className="ZOCtable">
                                        <BasicTable />
                                    </div>
                                    <div className="ZOCFail">
                                        <form method="post">
                                            <p>Sertifikat fayl</p>
                                            <label className="input-file">
                                                <input type="file" name='file' />
                                                <span>Fayl yuklash</span>
                                            </label>
                                        </form>
                                    </div>
                                    <div className="ZOCtable">
                                        <div className="BasicTable">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>To‘plagan bali</th>
                                                        <th>Talim tili</th>
                                                        <th>Imtiyoz</th>
                                                        <th>Izoh</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>179 – 189 ball</td>
                                                        <td>O‘zbek</td>
                                                        <td>Grant</td>
                                                        <td>Universitet tomonidan stipendiya tayinlanadi</td>
                                                    </tr>
                                                    <tr>
                                                        <td>169 – 189 ball</td>
                                                        <td>Rus</td>
                                                        <td>Grant</td>
                                                        <td>Universitet tomonidan stipendiya tayinlanadi</td>
                                                    </tr>
                                                    <tr>
                                                        <td>169-178 ball</td>
                                                        <td>O‘zbek</td>
                                                        <td>50% lik grant</td>
                                                        <td>Talaba to‘lov-shartnoma miqdorining yarimini to‘laydi</td>
                                                    </tr>
                                                    <tr>
                                                        <td>159-168 ball</td>
                                                        <td>Rus</td>
                                                        <td>50% lik grant</td>
                                                        <td>Talaba to‘lov-shartnoma miqdorining yarimini to‘laydi</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="ZOCFail">
                                        <form method="post">
                                            <p> Davlan universitetida to‘plagan bali</p>
                                            <label className="input-file">
                                                <input type="file" name='file' />
                                                <span>Fayl yuklash</span>
                                            </label>
                                        </form>
                                    </div>
                                    <div className="ZOCJonatish">
                                        <form>
                                            <label type="submit" className="submit-button"><p>Jonatish</p><input type="submit" /></label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}