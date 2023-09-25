import React from 'react'
import { ButtonProps } from '../../../types'

function Button({ buttonParams }: ButtonProps) {

    let background_color: string = ''

    let text_color: string = '#000000'

    let visibility: string = 'block'

    if(buttonParams.background_color) {
        background_color = buttonParams.background_color
    }

    if(buttonParams.text_color) {
        text_color = buttonParams.text_color
    }    
    
    if (buttonParams.visible === false) {
        visibility = 'none'
    }

    let style: React.CSSProperties = {backgroundColor:background_color, color: text_color, display: visibility}

    
    const trigger = () => {
        if (buttonParams.onClickFunction) {
            buttonParams.onClickFunction()
        }
    }

    return (
        <button type='submit' className="btn" style={style} onClick={() => trigger()} aria-label={buttonParams.ariaLabel}>
                {buttonParams.content}
        </button>
    )
}

export default Button