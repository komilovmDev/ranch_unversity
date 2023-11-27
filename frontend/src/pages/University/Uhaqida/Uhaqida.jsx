import './Uhaqida.css';
import lit1 from './img/Lit1.png';
import lit2 from './img/Lit2.png';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';



export default function Uhaqida() {
    return (
        <div className="Uhaqida">
            <div className="UhaqidaContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Universtitet haqida</p>
                </div>
                <div className="UhaqidaContantBox">
                    <div className="UhaqidaContantText">
                        <h4>RANCH texnologiya universiteti (Rektorning murojaatnomasi)</h4>
                        <p>Urganch shahrida yangi “RANCH texnologiya universiteti” oʼz faoliyatini boshlaganligi haqidagi maʼlumotni sizlarga yetkazishimizdan xursandmiz! Universitet faoliyati respublika va xususan, Xorazm viloyatining mashinasozlik sanoati va unga turdosh sohalarini jadal rivojlantirish va ular uchun yuqori malakali mutaxassislarni tayyorlashni nazarda tutadi. Bizning, bu intilishlarimiz "Qishloq xoʼjaligi mashinasozligi" ma'nosini anglatuvchi universitetning “RANCH” nomida ham oʼz aksini topgan. Endi Xorazm yoshlari uzoqqa ketmasdan, oʼz yurtida texnik va iqtisodiy-texnik taʼlim olish imkoniyatiga ega boʼldilar! Biz albatta boshqa viloyatlar va davlatlar yoshlarini oʼqitishga ham tayyormiz!Universitet faoliyatining birinchi bosqichida "Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishini jihozlash va avtomatlashtirish", "Iqtisodiyot va ishlab chiqarishni tashkil qilish" bakalavriat taʼlim yoʼnalishlariga va "Mashinasozlik texnologiyasi va jihozlari (mashinasozlikda)" magistratura mutaxassisligiga talabalar qabul qilinadi. Ikkinchi bosqichda bir qator boshqa turdosh taʼlim yoʼnalishlari va mutaxassisliklariga kunduzgi va sirtqi taʼlim yoʼnalishi boʼyicha qabul tashkil etiladi. RANCH texnologiya Universitetining faoliyati Belarus-Rossiya universiteti, Urganch davlat universiteti, Germaniyaning mashhur mashinasozlik korxonalari va boshqa muassasalar bilan tuzilgan hamkorlik shartnomalari asosida yuritiladi. Jumladan, Belarus-Rossiya universiteti tomonidan universitetimizga barcha zarur oʼquv metodik hujjatlar va katta elektron kutubxona ajratib berilgan. Universitet oʼquv dasturlari ilgʼor xorijiy tajribalarga asoslanib tayyorlangan.RANCH texnologiya Universitetida oʼqitish jarayoni yuqori malakali mahalliy va xorijiy mutaxassislar tomonidan amalga oshiriladi. Universitet taʼlim faoliyatida muntazam ravishda qatnashish haqida respublikamizning ilgʼor OTMlaridan tashqari Belarus, Rossiya, Turkiya va Ukraina universitetlarining bir qator professor-oʼqituvchilari bilan kelishuvlarga erishilgan.Taʼlim va tadqiqot faoliyati bilan bir qatorda, talabalar turli ijtimoiy loyihalarda ishtirok etish orqali oʼzlarining ijodiy va sport qobiliyatlarini rivojlantirish imkoniyatiga ega boʼladilar. Eshiklarimiz siz uchun doim ochiq!</p>
                    </div>

                    <div className="UhaqidaContantImg">
                        <div className="UhaqidaContantImgBox">
                            <img src={lit1} alt="" />
                        </div>
                        <div className="UhaqidaContantImgBox">
                            <img src={lit2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}