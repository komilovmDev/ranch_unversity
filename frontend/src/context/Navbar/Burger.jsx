import './Burger.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md"
import logo from './../../pages/University/Img/Ranch 1 copy 5.png'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { IoArrowBackSharp } from "react-icons/io5";
import Leng from '../Dropdwn/LengButton/Leng';

const Burger = () => {

    const [data, setData] = useState([]);

    const getCategory = async () => {
        try {
            const response = await axios.get('https://utu-ranch.uz/api/categories/');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    const refreshPageHome = () => {
        window.location.assign('/');
    }

    return (
        <section id='menu'>
            <article >
                <div className="menu">
                    <div className='divTuggleOb'>
                        <input id="menu--toggle" type="checkbox" />
                        <label className="menu--toggle__trigger" for="menu--toggle"></label>
                        <label className='menu--toggle__burger' for="menu--toggle"></label>
                        <ul className="menu__body">
                            <li className="menu__body-element">
                                {
                                    data.map(item => (
                                        <>
                                            <div id="wrapper">
                                                <p><a className="button" href={`#popup1${item.id}`}>{lang == 'uz' ? item.name_uz : lang == 'ru' ? item.name_ru : item.name_en}<MdKeyboardArrowRight size={'6vw'} color='#FF6400' /></a></p>
                                            </div>
                                            <div id={`popup1${item.id}`} className="overlay">
                                                {
                                                    item.children.map(chilItem => (
                                                        <div className="popup">
                                                            <a className="close" href="#*"><IoArrowBackSharp /></a>
                                                            <div className="content">
                                                                <Link onClick={() => window.location.assign(`/${chilItem.slug}/${chilItem.id}`)}>
                                                                    <p>{lang == 'uz' ? chilItem.name_uz : lang == 'ru' ? chilItem.name_ru : chilItem.name_en}</p>
                                                                </Link>
                                                            </div>
                                                            {/* {
                                                                chilItem.children.map(linkChil => (
                                                                    <div className='MapBox'>
                                                                        <Link onClick={() => window.location.assign(`/${linkChil.slug}/${linkChil.id}`)}><h4>{lang == 'uz' ? linkChil.name_uz : lang == 'ru' ? linkChil.name_ru : linkChil.name_en}</h4></Link>
                                                                    </div>
                                                                ))

                                                            } */}
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </>
                                    ))
                                }
                                <div className="LinespanBut">
                                    <div className="dropdownlang">
                                        <Leng />
                                    </div>
                                </div>
                            </li >

                        </ul>
                        <div id='logoUkm' className='logoUkm'>
                            <div className='GlavBtw'>
                                <NavLink onClick={refreshPageHome}>
                                    <img src={logo} alt='' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Burger