import React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disable: boolean

}

export const Button = React.memo( (props: ButtonPropsType) => {
    console.log("BUTTON")
    return (
        <div >
            <button className={props.disable ? "disable" : "button"} onClick={props.onClick}>{props.title}</button>
        </div>
    )
})

