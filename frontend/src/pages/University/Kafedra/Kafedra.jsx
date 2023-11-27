import './Kafedra.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';

export default function Kafedra() {
    return (
        <div className="Kafedra">
            <div className="KafedraContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright'/>
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright'/>
                    <p>Kafedra</p>
                </div>
                <div className="KafedraTitle">
                    <h4>Bu sahifa yangilanmoqda</h4>
                    <p>Iltimos, keyinroq tekshiring</p>
                </div>
            </div>
        </div>
    )
}