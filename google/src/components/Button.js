import React from "react";
import './Button.css'

const STYLES= [
    'btn--primary',
    'btn--outline'
]
const SIZEZ= [
    'btn--medium',
    'btn--large'
]
export const Button =({
    children,
    type,
    onclick,
    buttonStyle,
    ButtonSize
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const CheckButtonSize = SIZEZ.includes(ButtonSize) ? ButtonSize : SIZEZ[0]
    return(
        <button className={'btn ${checkButtonStyle} {checkButtonSize}'} onclick={onclick} type={type}>
            {children}
        </button>
    )
}