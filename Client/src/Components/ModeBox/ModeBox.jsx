import React, { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import './index.scss'
function ModeBox() {
    const [mode, setMode] = useState(localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : false );

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
        document.body.classList.toggle('dark', mode);
    }, [mode]);

    function changeMode() {
        document.body.classList.toggle('dark');
        setMode(!mode);
    }

    return (
        <div className='modeBox'>
            <label className="ui-switch">
                <div className="slider">
                    <button className='modebutton' onClick={changeMode}>
                        {
                            mode ? <IoSunnySharp />:<IoMoon />
                        }
                    </button>
                </div>
            </label>
        </div>
    );
}

export default ModeBox;