import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";
import {SettingsDisplay} from "./SettingsDisplay";


function App() {

    /*function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }*/

    let min = localStorage.getItem("MinValue")
    let max = localStorage.getItem("MaxValue")

    let [score, setScore] = useState(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)
    let [invisibleMinValue, setInvisibleMinValue] = useState<number>(Number(min))
    let [invisibleMaxValue, setInvisibleMaxValue] = useState<number>(Number(max))

    function richNumber() {
        if (score < maxValue) {
            setScore(score + 1);
        }
    }

    function resetNumber() {
        setScore(minValue)
    }



    /*useEffect(() => {
        const max = restoreState('MaxValue', invisibleMaxValue)
        const min = restoreState('MinValue', invisibleMinValue)
        setInvisibleMaxValue(Number(max))
        setInvisibleMinValue(Number(min))
    }, [])*/

    return (
        <div className="App">
            <div className={"counter"}>
                <Display count={score} maxValue={+maxValue} error={+invisibleMaxValue <= +invisibleMinValue}/>
                <div className={"buttons"}>
                    <Button onClick={richNumber} title={"Inc"} disable={score === maxValue}/>
                    <Button onClick={resetNumber} title={"Reset"} disable={score === minValue}/>
                </div>
            </div>
            <SettingsDisplay invisibleMaxValue={+invisibleMaxValue}
                             invisibleMinValue={+invisibleMinValue}
                             setInvisibleMinValue={setInvisibleMinValue}
                             setInvisibleMaxValue={setInvisibleMaxValue}
                             setMinValue={setMinValue} setMaxValue={setMaxValue} setScore={setScore} />
        </div>
    );
}

export default App;
