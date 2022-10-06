import React, { ForwardRefRenderFunction, forwardRef, ReactNode } from 'react';
import type {TYPE_SIZE, VARIANT} from "types"

/*
    Button Props
    - circle : 
    - size: xs, sm, md, lg
    - onClick
    
    button types (variant)
        primary, secondary, default

    ...
*/
export interface ButtonProps {
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
    variant?: VARIANT,
    circle?: boolean,
    size?: TYPE_SIZE,
    children?: ReactNode,
}

const Button : ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({
    variant = "default",
    className='',
    size = "md",
    disabled = false, 
    circle=false, 
    onClick,
    children
}, ref) => {
    
    return (
        <button 
            ref={ref}
            className={`co-button d-flex align-items-center justify-content-center ${variant} ${className} ${circle ? " circle" : ""} btn-size-${size}`} 
            onClick={(_e) => {
                if( disabled ) return;
                if( onClick ) onClick()
            }}
            disabled={disabled}
        >
            <span className="text-nowrap">{children}</span>            
        </button>
    );
}

export default forwardRef(Button);
