import './Odob.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Odob from '../../../context/TextUnik/Odob';

export default function OdobPage() {
    return(
        <div className="OdobPage">
            <div className="OdobPageContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright'/>
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright'/>
                    <p>Universitet Ichki tartib qoidalari</p>
                </div>
                <div className="OdobPageText">
                    <Odob/>
                </div>
            </div>
        </div>
    )
}