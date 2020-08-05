import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

// rest operator
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
	return (
		<div className="input-block">
			<label htmlFor={name}>{label}</label>
			{/* Atributos do input sendo repassados pelo rest */}
			<input type="text" id={name} {...rest} />
		</div>
	);
};

export default Input;
