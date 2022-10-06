import React, { FC, useState } from "react";
import { TOKEN } from "types";
import {ReactComponent as ChevronDown} from "../assets/images/chev-down.svg"
import Button from "./Button";
import NumberInput from "./NumberInput";

export interface TokenPanelProps {
    className?: string,
    token: TOKEN,
    balance: number,
    priceInUSD: number,
    value: number | null,
    onChange: (v: number | null) => void
}

export const TokenPanel : FC<TokenPanelProps> = ({
    className='', 
    token,
    balance,
    priceInUSD,
    value,
    onChange
}) => {
    const handleClickMax = () => {
        onChange(balance)
    }

	return (
		<div className={`co-token-panel ${className}`}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="co-token-selector d-flex align-items-center">
                    {token.icon}
                    <div className="ms-1 me-auto">{token.name}</div>
                    <ChevronDown className="me-2"/>
                </div>
                <NumberInput className="text-end" value={value} onChange={onChange} placeholder="Input"/>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-1">
                <div className="co-text-details">
                    Balance: {balance}
                </div>
                <div className="d-flex">
                    <Button variant="secondary" size="sm" onClick={handleClickMax}>max</Button>
                    <div className="co-text-details ms-1">
                        ${value ? value * priceInUSD : 0}
                    </div>
                </div>
            </div>
		</div>
	)
}

export default TokenPanel