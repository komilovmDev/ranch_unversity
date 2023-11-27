import './Home.css'  
import Sviper from '../../context/Swiper/Sviper';
import Yangiliklar from './HomeAssets/Yangiliklar/Yangi';
import Discovery from './HomeAssets/Discovery/Discovery'; 
import Count from './HomeAssets/Count/Count';
import Hamkor from './HomeAssets/Hamkor/Hamkor';

export default function Home() {
    return (
        <div className='Home'>
            <div className="HomeSviper">
                <Sviper />
            </div>
            <div className="HomeYang">
                <Yangiliklar />
            </div>
            <div className="Discovery">
                <Discovery/>
            </div>
            <div className="Count">
                <Count/>
            </div>
            <div className="Hamkor">
                <Hamkor/>
            </div>
        </div>
    )
}