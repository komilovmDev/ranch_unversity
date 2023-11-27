import './App.css'
import Footer from './context/Footer/Footer.jsx'
import Navbar from './context/Navbar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import News from './pages/News/News.jsx';
import NewsPage from './pages/NewsPage/NewsPage.jsx';
import Markaz from './pages/University/Markaz/Markaz.jsx';
import Kafedra from './pages/University/Kafedra/Kafedra.jsx';
import Koidaich from './pages/University/KoidaIch/Koidaich.jsx';
import OdobPage from './pages/University/Odob/OdobPAge.jsx';
import Nizom from './pages/University/Nizom/Nizom.jsx';
import Uhaqida from './pages/University/Uhaqida/Uhaqida.jsx';
import Fhamkor from './pages/Faoliyat/Fhamkor.jsx';
import Yoshlar from './pages/Faoliyat/Yoshlar/Yoshlar.jsx';
import Kunduzgi from './pages/Abiturient/Kunduzgi/Kunduzgi.jsx';
import Zayavka from './pages/Abiturient/Zayafka/Zayavka.jsx';
import Galereya from './pages/Galereya/Galereya.jsx';
import OchMalumot from './pages/Talabalar/OchMalumot/OchMalumot.jsx';
import Talabalarga from './pages/Talabalar/Talabalar/Talabalar.jsx';
import Burger from './context/Navbar/Burger.jsx';
import Rektorat from './pages/University/Rektorat/Rektorat.jsx';
import Qabultugadi from './pages/Abiturient/Zayafka/Qabultugadi/Qabultugadi.jsx';

function App() {

  return (
    <>
      <div className="AppContainer">
        <Router>
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="Burger">
            <Burger />
          </div>
          <div className="Routes">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/ommaviy-tadbirlar/:id' element={<News />} />
              <Route path='/universitet33/:id' element={<News />} />
              <Route path='/xalqoro-aloqalar/:id' element={<News />} />
              <Route path='/yanglik-toliq/:id' element={<NewsPage />} />
              <Route path='/:slug/:id' element={<Markaz />} />
              <Route path='/:slug/:id' element={<Kafedra />} />
              <Route path='/IchqiTartib' element={<Koidaich />} />
              <Route path='/Odob' element={<OdobPage />} />
              <Route path='/University/Nizom' element={<Nizom />} />
              <Route path='/University/Universitet_haqida' element={<Uhaqida />} />
              <Route path='/Faoliyat/Hamkor' element={<Fhamkor />} />
              <Route path='/Faoliyat/Yoshlar' element={<Yoshlar />} />
              <Route path='/Kunduzgi-talim-yonalishlari/:id' element={<Kunduzgi />} />
              <Route path='/ikkinchi-mutaxassislik/:id' element={<Kunduzgi />} />
              <Route path='/sirtqi-talim-yonalishlari/:id' element={<Kunduzgi />} />
              <Route path='/magistratura-yonalishlari-va-qabul-kvotasi/:id' element={<Kunduzgi />} />
              <Route path='/Abiturient/Qochirish' element={<Kunduzgi />} />
              <Route path='/online-hujjat-topshirish/:id' element={<Qabultugadi/>} />
              <Route path='/galireryalar/:id' element={<Galereya />} />
              <Route path='/ochiq-malumot/:id' element={<OchMalumot />} />
              <Route path='/talaba/:id' element={<Talabalarga />} />
              <Route path='/ochiq-malumot/:id' element={<OchMalumot />} />
              <Route path='/talaba/:id' element={<Talabalarga />} />
              <Route path='/rektorat/:id' element={<Rektorat />} />
              <Route path='/xalqaro-hamkor-tashkilotlar/:id' element={<Fhamkor />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div >
    </>
  )
}

export default App
