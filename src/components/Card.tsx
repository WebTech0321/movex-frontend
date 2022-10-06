import React, { FC } from "react";

export interface CardProps {
    className?: string,
    title?: string
}

export const Card : FC<CardProps> = ({ className='', title='', children }) => {

	return (
		<div className={`co-card ${className}`}>
            {title !=='' &&
            <div className="co-card-header">{title}</div>
            }
           {children}
		</div>
	)
}

export default Card