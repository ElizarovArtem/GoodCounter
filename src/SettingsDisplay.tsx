import React, {ChangeEvent} from "react";
import {Button} from "./Button";

type SettingsDisplayPropsType = {
    invisibleMaxValue: number
    invisibleMinValue: number
    setScore: (value: number) => void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setInvisibleMinValue: (value: number) => void
    setInvisibleMaxValue: (value: number) => void
}

export function SettingsDisplay(props: SettingsDisplayPropsType) {

    /*function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }*/

    function setValue() {
        if (props.invisibleMaxValue > props.invisibleMinValue) {
            props.setMinValue(props.invisibleMinValue)
            props.setMaxValue(props.invisibleMaxValue)
            props.setScore(props.invisibleMinValue)
            localStorage.setItem("MinValue", String(props.invisibleMinValue))
            localStorage.setItem("MaxValue", String(props.invisibleMaxValue))
            /*saveState("MinValue", props.invisibleMinValue)
            saveState("MaxValue", props.invisibleMaxValue)*/
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInvisibleMaxValue(+e.currentTarget.value)
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInvisibleMinValue(+e.currentTarget.value)
    }

    return (
        <div className={"counter"}>
            <div className={"selectNumber"}>
                <div><label>MaxValue: <input
                    className={props.invisibleMaxValue <= props.invisibleMinValue ? "errorInput" : "originInput"}
                    value={props.invisibleMaxValue}
                    onChange={onChangeMaxValue}
                    type={"number"}/></label></div>
                <div><label>MinValue: <input
                    className={props.invisibleMaxValue <= props.invisibleMinValue ? "errorInput" : "originInput"}
                    type={"number"}
                    value={props.invisibleMinValue}
                    onChange={onChangeMinValue}/></label></div>
            </div>
            <div>
                <Button onClick={setValue} title={"Set"} disable={props.invisibleMaxValue <= props.invisibleMinValue}/>
            </div>
        </div>
    )
}