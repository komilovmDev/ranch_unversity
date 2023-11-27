import React, { useState, useRef, useEffect } from "react";
import style from "./Leng.css";
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from "react-router-dom";


export default function Leng() {
    const container = useRef();
    const [dropdownState, setDropdownState] = useState({ open: false, value: "" });
    const [initialValue, setInitialValue] = useState("UZ");
    const inputRef = useRef(null);

    const handleDropdownClick = () => {
        setDropdownState({ open: !dropdownState.open });
    };

    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
            setDropdownState({ open: false });
        }
    };

    const handleItemClick = (value) => {
        setDropdownState({ value });
        if (value !== "") {
            inputRef.current.blur();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div id="LangContainer" className={style.container} ref={container}>
            <div className="ButtonChekLang">
                <button type="button" className={style.Langbutton} >
                    {dropdownState.value || initialValue}
                </button>
                <button id="duwnIconLang" onClick={handleDropdownClick}>
                    <AiOutlineDown />
                </button>
            </div>
            {dropdownState.open && (
                <div id="UlDivLang" className={style.dropdown}>
                    <ul>
                        <li onClick={() => handleItemClick("UZ")}>UZ <img src="" alt="" /><button className='ButtonChek'><AiOutlineCheck /></button></li>
                        <li onClick={() => handleItemClick("RU")}>RU<button className='ButtonChek'><AiOutlineCheck /></button></li>
                        <li onClick={() => handleItemClick("EN")}>EN<button className='ButtonChek'><AiOutlineCheck /></button></li> 
                    </ul>
                </div>
            )}
        </div>
    );
}