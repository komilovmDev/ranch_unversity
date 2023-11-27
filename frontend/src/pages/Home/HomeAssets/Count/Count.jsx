import Counter from "./Counter";
import './Count.css';
import ris1 from './../CountImg/Vector (1).svg';
import ris2 from './../CountImg/Vector (2).svg';
import ris3 from './../CountImg/Vector (3).svg';
import ris4 from './../CountImg/Vector.svg';

export default function Count() {
    return (
        <div className="Count">
            <div className="CountContainer">
                <div className="CounterContainerBox">
                    <div className="CountBox">
                        <div className="ImgContbox">
                            <img src={ris1} alt="" />
                        </div>
                        <div className="CounterBox">
                            <Counter number={80} />
                        </div>
                        <p>O‘qituvchilar</p>
                    </div>
                    <div className="CountBox">
                        <div className="ImgContbox">
                            <img src={ris2} alt="" />
                        </div>
                        <div className="CounterBox">
                            <Counter className="Counter" number={14} />
                        </div>
                        <p>Yonalish</p>
                    </div>
                    <div className="CountBox">
                        <div className="ImgContbox">
                            <img src={ris3} alt="" />
                        </div>
                        <div className="CounterBox">
                            <Counter number={4000} />
                        </div>
                        <p>Talabalar</p>
                    </div>
                    <div className="CountBox">
                        <div className="ImgContbox">
                            <img src={ris4} alt="" />
                        </div>
                        <div className="CounterBox">
                            <Counter number={10} />
                        </div>
                        <p>Hamkor</p>
                    </div>
                </div>
            </div>
        </div>
    );
}