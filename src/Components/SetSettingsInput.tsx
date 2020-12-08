import React, {ChangeEvent} from "react";

type SetSettingsInputPropsType = {
    maxSettingsValue: number
    minSettingsValue: number
    dataValue: string
    value: number
    title: string
    onChangeSettingsValue: (e: ChangeEvent<HTMLInputElement>) => void
}
export const SetSettingsInput = React.memo( (props: SetSettingsInputPropsType) => {
    return (
        <div>
            <label>{props.title} :
                <input
                    className={props.maxSettingsValue <= props.minSettingsValue ? "errorInput" : "originInput"}
                    type={"number"}
                    data-value={props.dataValue}
                    value={props.value}
                    onChange={props.onChangeSettingsValue}/>
            </label>
        </div>
    )
})