import React, {ChangeEvent, useCallback} from "react";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {enterSettingsAC, setMaxSettingsValueAC, setMinSettingsValueAC} from "../redux/counterReducer";
import {selectRootState} from "../redux/store";
import {SetSettingsInput} from "./SetSettingsInput";

export const SettingsDisplay = React.memo( () => {

    let {maxSettingsValue, minSettingsValue} = useSelector(selectRootState)
    const dispatch = useDispatch()

    const setValue = useCallback( () => {
        dispatch(enterSettingsAC())
        localStorage.setItem("MinValue", String(minSettingsValue))
        localStorage.setItem("MaxValue", String(maxSettingsValue))
    }, [dispatch])

    const onChangeSettingsValue = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        let valueFromInput = e.currentTarget.valueAsNumber

        if (e.currentTarget.dataset.value === "max") {
            if (valueFromInput >= 0) {
                dispatch(setMaxSettingsValueAC(Number(valueFromInput)))
            }
        }else {
            if (valueFromInput >= 0) {
                dispatch(setMinSettingsValueAC(Number(valueFromInput)))
            }
        }
    },[dispatch])

    return (
        <div className={"counter"}>
            <div className={"selectNumber"}>
                <SetSettingsInput
                    maxSettingsValue={maxSettingsValue}
                    minSettingsValue={minSettingsValue}
                    dataValue={"max"}
                    value={maxSettingsValue}
                    title={"MaxValue"}
                    onChangeSettingsValue={onChangeSettingsValue}
                />
                <SetSettingsInput
                    maxSettingsValue={maxSettingsValue}
                    minSettingsValue={minSettingsValue}
                    dataValue={"min"}
                    value={minSettingsValue}
                    title={"MinValue"}
                    onChangeSettingsValue={onChangeSettingsValue}
                />
            </div>
                <Button onClick={setValue} title={"Set"} disable={maxSettingsValue <= minSettingsValue}/>
        </div>
    )
})

