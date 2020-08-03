import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars1.githubusercontent.com/u/45675035?s=460&u=e8277ab9d3eb18151613a2699e1fbb6572a3dcc4&v=4"
					alt="Átila Rodrigues"
				/>
				<div>
					<strong>Átila Rodrigues</strong>
					<span>Física</span>
				</div>
			</header>
			<p>
				Entusiasta pelas melhores tecnologias de física avançada
				<br />
				<br />
				Apaixonado por explodir coisas em demonstrações e por mudar a
				vida das pessoas através de experiências.
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ 50,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;
