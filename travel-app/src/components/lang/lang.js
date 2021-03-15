import React, {useEffect, useContext} from 'react';
import {Context} from '../context';
import {langs} from '../../data';

const Lang = () => {
	const [lang, setLang] = useContext(Context);

	const getLangList = (elements) => {
		let langArray = '';
		let savedLang = langs[0];
		Array.prototype.forEach.call(elements, (el) => {
			const img = el.getAttribute('data-thumbnail');
			const value = el.value;
			const text = value === lang ? '' : el.innerText;
			const item = `<li><img src="${img}" alt="flag"/><span>${text}</span></li> `;
			if (value === lang) savedLang = item;
			else langArray += item;
		});

		document.querySelector('#lang__list').innerHTML = langArray;
		return savedLang;
	};

	useEffect(() => {
		const langList = document.querySelector('#lang__list');
		const btnSelect = document.querySelector('.lang__btn-select');
		const elements = document.querySelectorAll('.lang option');

		const savedLang = getLangList(elements);
		btnSelect.innerHTML = savedLang;

		function chooseLang() {
			const img = this.children[0].getAttribute('src');
			const value = this.children[0].getAttribute('value');
			const choseLang = this.innerText;
			const item = `<li><img src="${img}" alt="flag"/><span>${choseLang}</span></li> `;
			btnSelect.innerHTML = item;
			setLang(choseLang);
			btnSelect.setAttribute('value', value);
			langList.classList.toggle('hidden');
		}

		document.querySelectorAll('#lang__list li').forEach((item) => {
			item.addEventListener('click', chooseLang);
		});

		const hiddenListLang = () => {
			langList.classList.toggle('hidden');
		};

		btnSelect.addEventListener('click', hiddenListLang);

		return () => {
			document.querySelectorAll('#lang__list li').forEach((item) => {
				item.removeEventListener('click', chooseLang);
			});
			btnSelect.removeEventListener('click', hiddenListLang);
		};
	}, [lang]);

	const changeLang = (choseLang) => setLang(choseLang);

	const Option = ({ln}) => {
		const srcImg = `/images/${ln}.png`;
		return (
			<option value={ln} data-thumbnail={srcImg} >
				{ln}
			</option >
		);
	};

	return (
		<>
			<select className="lang" >
				{langs.map((ln) => (
					<Option ln={ln} key={ln} />
				))}
			</select >

			<div className="lang__btns" >
				<button className="lang__btn-select" value="" ></button >
				<div >
					<ul id="lang__list" className="hidden" ></ul >
				</div >
			</div >
		</>
	);
};

export default Lang;
