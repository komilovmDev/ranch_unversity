// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import style from "./Dropdwn.css";
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from "react-router-dom";


export default function Dropdown() {
    const container = useRef();
    const [dropdownState, setDropdownState] = useState({ open: false, value: "" });
    const [initialValue, setInitialValue] = useState("Buxgalteriya hisobi va audit (tarmoqlar va sohalar bo'yicha)");
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
        <div id="DivContainer" className={style.container} ref={container}>
            <div className="ButtonChekInt">
                <button type="button" className={style.button} >
                    {dropdownState.value || initialValue}
                </button>
                <button id="duwnIcon" onClick={handleDropdownClick}>
                    <AiOutlineDown />
                </button>
            </div>
            {dropdownState.open && (
                <div id="UlDiv" className={style.dropdown}>
                    <ul>
                        <li onClick={() => handleItemClick("Iqtisodiyot (tarmoqlar va sohalar bo'yicha)")}>Iqtisodiyot (tarmoqlar va sohalar bo'yicha)<button className='ButtonChek'><AiOutlineCheck /></button></li>
                        <li onClick={() => handleItemClick("Buxgalteriya hisobi va audit (tarmoqlar va sohalar bo'yicha)")}>Buxgalteriya hisobi va audit (tarmoqlar va sohalar bo'yicha)<button className='ButtonChek'><AiOutlineCheck /></button></li>
                        <li onClick={() => handleItemClick("Menejment (tarmoqlar va sohalar bo'yicha)")}>Menejment (tarmoqlar va sohalar bo'yicha)<button className='ButtonChek'><AiOutlineCheck /></button></li>
                        <li onClick={() => handleItemClick("Marketing (tarmoqlar va sohalar bo'yicha)")}>Marketing (tarmoqlar va sohalar bo'yicha)<button className='ButtonChek'><AiOutlineCheck /></button></li>
                    </ul>
                </div>
            )}
        </div>
    );
}