import './Nizom.css'
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import pic1 from './../Img/nizom 1.png';
import pic2 from './../Img/nizom2 1.png';

export default function Nizom() {
    return (
        <div className="Nizom">
            <div className="NizomContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight  className='Iconright'/>
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright'/>
                    <p>Nizom</p>
                </div>
                <div className="NizomImgBox">
                    <div className="NizomImg">
                        <img src={pic1} alt="img" />
                    </div>
                    <div className="NizomImg">
                        <img src={pic2} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}