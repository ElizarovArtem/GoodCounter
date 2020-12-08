import React, {useState} from 'react';

type DisplayPropsType = {
    count: number
    maxValue: number
    error: boolean
}

export const Display = React.memo( (props: DisplayPropsType) => {
    const count = props.maxValue === 0 ? <span className={"errorSpan"}>Set value</span> : props.count

    return (
        <div>
            <div className={props.count === props.maxValue ? "highNumber" : "display"}>
                {props.error ? <span className={"errorMessage"}>Incorrect values</span> : count}
            </div>
        </div>
    )
})



