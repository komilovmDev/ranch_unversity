import './Footer.css';
import WhiteRanch from './../../pages/Home/HomeAssets/IMG/Ranch_White.png';
import { Link } from "react-router-dom";
import facebook from '../../pages/Home/HomeAssets/IMG/facebook.svg';
import youtube from '../../pages/Home/HomeAssets/IMG/youtube.svg';
import telegram from '../../pages/Home/HomeAssets/IMG/telegram.svg';
import insta from '../../pages/Home/HomeAssets/IMG/insta.svg'

export default function Footer() {
    return (
            <div className="Footer">
                <div className="FooterContainer">
                    <div className="FooterContainerLeft">
                        <div className="FooterContainerLeftTitle">
                            <img src={WhiteRanch} alt="logo" />
                            <a href="tel:+998622277772">62 227 77 72</a>
                            <p>Urganch shahar, Xonqa ko'chasi, 26 uy</p>
                        </div>
                        <div className="FooterContainerLeftMap">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1853db4b78d4e06c7e8dcf61524e6c9d2ac02d52bcef2fd51f26e1155da4ef8&amp;source=constructor" frameborder="0"></iframe>
                        </div>
                        <div className="FooterContainerRightDuwn2">
                            <Link><div className='FooterContainerRightDuwnImg'><img src={facebook} alt="" /></div></Link>
                            <Link><div className='FooterContainerRightDuwnImg'><img src={youtube} alt="" /></div></Link>
                            <Link><div className='FooterContainerRightDuwnImg'><img src={telegram} alt="" /></div></Link>
                            <Link><div className='FooterContainerRightDuwnImg'><img src={insta} alt="" /></div></Link>
                        </div>
                    </div>
                    <div className="FooterContainerRight">
                        <div className="FooterContainerRightUp">
                        <img src={WhiteRanch} alt="logo" />
                            <div className="FooterMalumot">
                                <div className="FooterMalumotTitle">
                                    <p>Ma’lumot</p>
                                </div>
                                <div className="FooterMalumotHref">
                                    <Link to={`/universtitet-haqida/5`}><p>Universitet</p></Link>
                                    {/* <Link><p>Maqsadimiz</p></Link> */}
                                    <Link to={`/yoshlar-bilan-ishlash-va-manaviy-marifiy-faoliyat/12`}><p>Faoliyat</p></Link>
                                    <Link to={`/Kunduzgi-talim-yonalishlari/13`}><p>Abiturient</p></Link>
                                    <Link to={`/talaba/34`}><p>Talabalar</p></Link>
                                    <Link><p>Talim</p></Link>
                                    <Link to={`rektorat/24`}><p>Rektor</p></Link>
                                    {/* <Link to={`rektorat/24`}><p>Prorektorlar</p></Link> */}
                                    {/* <Link><p>Menejerlar</p></Link> */}
                                </div>
                            </div>
                            <div className="FooterQabul">
                                <div className="FooterQabulTitle">
                                    <p>QABUL</p>
                                </div>
                                <div className="FooterQabulHref">
                                    <Link><p>Ko’rsatmalar</p></Link>
                                    <Link><p>Grandlar</p></Link>
                                    <Link><p>O’qish uchun to’lov</p></Link>
                                    <Link><p>Savol-Javoblar</p></Link>
                                    <Link><p>Aloqa</p></Link>
                                </div>
                            </div>
                            <div className="FooterStudent">
                                <div className="FooterStudentTitle">
                                    <p>STUDENT</p>
                                </div>
                                <div className="FooterStudentHref">
                                    <Link><p>Laboratoriya</p></Link>
                                    <Link><p>O‘quv yili jadvali</p></Link>
                                    <Link><p>Muvaffaqiyatli</p></Link>
                                    <Link><p>Talabalar</p></Link>
                                    <Link><p>Koreyada amaliyot o’tash</p></Link>
                                    <Link><p>Kutubxona</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="FooterContainerRightDuwn">
                            <Link><div className='FooterContainerRightDuwnImg'><img src={facebook} alt="" /></div></Link>
                            <Link><div className='FooterContainerRightDuwnImg'><img src={youtube} alt="" /></div></Link>
                            <Link><div className='FooterContainerRightDuwnImg'><img src={telegram} alt="" /></div></Link>
                            <Link><div className='FooterContainerRightDuwnImg'><img src={insta} alt="" /></div></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}