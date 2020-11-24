import React, {useEffect} from 'react';
import '../App.css';
import {SettingsDisplay} from "./SettingsDisplay";
import {useDispatch, useSelector} from "react-redux";
import {valueFromLocalStorageAC} from "../redux/counterReducer";
import {MainDisplay} from "./MainDisplay";


function AppWithRedux() {

    let min = localStorage.getItem("MinValue")
    let max = localStorage.getItem("MaxValue")

    useEffect(() => {
        dispatch(valueFromLocalStorageAC(Number(min), Number(max)))
    }, [])


    const dispatch = useDispatch()

    return (
        <div className="App">
            <MainDisplay/>
            <SettingsDisplay/>
        </div>
    );
}

export default AppWithRedux;