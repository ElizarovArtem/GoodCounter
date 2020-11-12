import React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    score: number

}

export function ResetButton(props: ButtonPropsType) {
    return (
        <div className={props.score === 0 ? "disable" : "button"}>
            <div onClick={props.onClick}>
                {props.title}
            </div>
        </div>
    )
}

