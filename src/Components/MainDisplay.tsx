import {useDispatch, useSelector} from "react-redux";
import {selectRootState} from "../redux/store";
import {increaseScoreAC, resetValueAC} from "../redux/counterReducer";
import {Display} from "./Display";
import {Button} from "./Button";
import React, {useCallback} from "react";

export const MainDisplay = React.memo( () => {
    let {score, maxValue, minValue, maxSettingsValue, minSettingsValue} = useSelector(selectRootState)
    const dispatch = useDispatch()

    const richNumber = useCallback( () => {
        dispatch(increaseScoreAC(score + 1))
    },[dispatch, score])

    const resetNumber = useCallback( () => {
        dispatch(resetValueAC(minValue))
    }, [dispatch, score])

    return (
        <div className={"counter"}>
            <Display count={score} maxValue={+maxValue} error={+maxSettingsValue <= +minSettingsValue}/>
            <div className={"buttons"}>
                <Button onClick={richNumber} title={"Inc"} disable={score === maxValue}/>
                <Button onClick={resetNumber} title={"Reset"} disable={score === minValue}/>
            </div>
        </div>
    )
})