import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {enterSettingsAC, setMaxSettingsValueAC, setMinSettingsValueAC} from "../redux/counterReducer";
import {selectRootState} from "../redux/store";

export function SettingsDisplay() {

    let {maxSettingsValue, minSettingsValue} = useSelector(selectRootState)
    const dispatch = useDispatch()

    function setValue() {
        dispatch(enterSettingsAC())
        localStorage.setItem("MinValue", String(minSettingsValue))
        localStorage.setItem("MaxValue", String(maxSettingsValue))
    }

    const onChangeSettingsValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.dataset.value === "max") {
            if (+e.currentTarget.value >= 0) {
                dispatch(setMaxSettingsValueAC(Number(e.currentTarget.value)))
            }
        }else {
            if (+e.currentTarget.value >= 0) {
                dispatch(setMinSettingsValueAC(Number(e.currentTarget.value)))
            }
        }
    }

    return (
        <div className={"counter"}>
            <div className={"selectNumber"}>
                <div>
                    <label>MaxValue:
                        <input
                            className={maxSettingsValue <= minSettingsValue ? "errorInput" : "originInput"}
                            value={maxSettingsValue}
                            data-value={"max"}
                            onChange={onChangeSettingsValue}
                            type={"number"}/>
                    </label>
                </div>
                <div>
                    <label>MinValue:
                        <input
                            className={maxSettingsValue <= minSettingsValue ? "errorInput" : "originInput"}
                            type={"number"}
                            data-value={"min"}
                            value={minSettingsValue}
                            onChange={onChangeSettingsValue}/>
                    </label>
                </div>
            </div>
            <div>
                <Button onClick={setValue} title={"Set"} disable={maxSettingsValue <= minSettingsValue}/>
            </div>
        </div>
    )
}