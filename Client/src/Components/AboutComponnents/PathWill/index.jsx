import React from 'react'
import { BsLamp } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import { LuLampWallUp } from "react-icons/lu";
import './index.scss'
const PathWill = () => {
    return (
        <>
            <section id='PathWill'>
                <div className="PathWillArea">
                    <div className="LoremPath">
                        <p>Save Power</p>
                    </div>
                    <div className="TitlePath">
                        <h1>YOUR PATH WILL BE LIT</h1>
                    </div>
                    <div className="PathWillBoxArea">
                        <div className="PathBox">
                            <div className="ImagePath">
                                <BsLamp />
                            </div>
                            <div className="TextPath">
                                <h2>GOOD ELECTRICITY</h2>
                            </div>
                            <div className="LoreminPath">
                                <p>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Magna etiam tempor orci eu.</p>
                            </div>
                        </div>
                        <div className="PathBox">
                            <div className="ImagePath">
                            <IoBulbOutline />
                            </div>
                            <div className="TextPath">
                                <h2>GOOD ELECTRICITY</h2>
                            </div>
                            <div className="LoreminPath">
                                <p>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Magna etiam tempor orci eu.</p>
                            </div>
                        </div>
                        <div className="PathBox">
                            <div className="ImagePath">
                            <LuLampWallUp />
                            </div>
                            <div className="TextPath">
                                <h2>GOOD ELECTRICITY</h2>
                            </div>
                            <div className="LoreminPath">
                                <p>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Magna etiam tempor orci eu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PathWill