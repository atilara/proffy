import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

// Usar react select posteriormente
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	label: string;
	options: Array<{
		value: string;
		label: string;
	}>;
}

// rest operator
const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
	return (
		<div className="select-block">
			<label htmlFor={name}>{label}</label>
			<select id={name} {...rest}>
				<option value="" disabled selected hidden>
					Selecione uma opção
				</option>
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
