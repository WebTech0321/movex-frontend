import React, {
    useState, 
    useRef, 
    useEffect, 
    ForwardRefRenderFunction, 
    forwardRef,
    ChangeEvent
} from 'react';
import { VARIANT } from "../types"
import { numberWithCommas, parseCommas } from 'helpers/utils';

/*
    Input Props
*/

export interface NumberInputProps {
    value: number | null,
    variant?: VARIANT,
    placeholder?: string,
    className?: string,
    onChange?: (val: number | null) => void,
}

const NumberInput : ForwardRefRenderFunction<HTMLInputElement, NumberInputProps> = ({
    value,
    placeholder, 
    variant='default',
    className='', 
    onChange,
}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if(inputRef.current && value !== null) {
            inputRef.current.value = numberWithCommas(value);
        }
    }, [value])

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            if( event.target.value.length > 0 ) 
                onChange(parseCommas(event.target.value))  
            else 
                onChange(null)
        } 
    }

    return (
        <input 
            type="text"
            ref={inputRef}
            className={`co-field-num w-100 
                        ${className}
                        ${variant}`}
            placeholder={placeholder}
            onChange={handleChangeInput}
        />
    );
}

export default forwardRef(NumberInput);
