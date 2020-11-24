import React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disable: boolean

}

export function Button(props: ButtonPropsType) {
    return (
        <div >
            <button className={props.disable ? "disable" : "button"} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

