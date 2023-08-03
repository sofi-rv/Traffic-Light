import React, { useState, useEffect } from "react";
import "../../styles/trafficlights.css"

const TrafficLights = () => {
    const [color, setColor] = useState("red")
    const [redOn, setRedOn] = useState(false)
    const [yellowOn, setYellowOn] = useState(false)
    const [greenOn, setGreenOn] = useState(false)

    return (
        <>
            <div className="stick"></div>
            <div className="traffic-lights rounded">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col d-flex justify-content-center flex-column align-items-center column">
                        <div className={redOn == false ? "red" : "red on"} onClick={(e) => {
                            setRedOn(!redOn)
                            setYellowOn(false)
                            setGreenOn(false)
                        }}></div>
                        <div className={!yellowOn ? "yellow" : "yellow on"} onClick={(e) => {
                            setYellowOn(!yellowOn)
                            setRedOn(false)
                            setGreenOn(false)
                        }}></div>
                        <div className={!greenOn ? "green" : "green on"} onClick={(e) => {
                            setGreenOn(!greenOn)
                            setYellowOn(false)
                            setRedOn(false)
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TrafficLights;