import React, { FC, useState } from "react";
import Decimal from 'decimal.js';
import { TOKEN } from "types";
import {ReactComponent as Plus} from "../assets/images/plus.svg"
import {ReactComponent as Minus} from "../assets/images/minus.svg"
import Button from "./Button";
import NumberInput from "./NumberInput";

export interface SpinPanelProps {
    className?: string,
    title: string,
    token1: TOKEN,
    token2: TOKEN,
    value: number | null,
    onChange: (v: number | null) => void
}

export const SpinPanel : FC<SpinPanelProps> = ({
    className='', 
    title,
    token1,
    token2,
    value,
    onChange
}) => {

    const handleClickMinus = () => {
        if(value !== null) {
            let v = new Decimal(value)
            v = v.minus(0.1)            
            onChange(v.toNumber())
        }
    }
    
    const handleClickPlus = () => {
        if(value !== null) {
            let v = new Decimal(value)
            v = v.plus(0.1)
            onChange(v.toNumber())
        }
    }

	return (
		<div className={`co-spin-panel d-flex align-items-center justify-content-between ${className}`}>
            <Button variant="primary" size="md" className="circle" onClick={handleClickMinus}>
                <Minus />
            </Button>
            <div className="text-center">
                <div className="label-md mb-1">{title}</div>
                <NumberInput variant="primary" className="text-center" placeholder="Input" value={value} onChange={onChange}/>
                <div className="token-info">{`${token2.name} / 1 ${token1.name}`}</div>
            </div>
            <Button variant="primary" size="md" className="circle" onClick={handleClickPlus}>
                <Plus />
            </Button>            
		</div>
	)
}

export default SpinPanel