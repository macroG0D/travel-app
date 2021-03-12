import React, {useEffect, useContext} from 'react';
import Context from "../context";

const Lang = () => {
	const [lang, setLang] = useContext(Context);

	useEffect(() => {

		const langArray = [];
		const langList = document.querySelector('#lang__list');
		const btnSelect = document.querySelector('.lang__btn-select');
		const elements = document.querySelectorAll('.lang option');

		Array.prototype.forEach.call(elements, (el, i) => {
			const img = el.getAttribute('data-thumbnail');
			const text = el.innerText;
			const value = el.value;
			const item = `<li><img src="${img}" alt="" value="${value}"/><span>${text}</span></li>`;
			langArray.push(item);
		});

		document.querySelector('#lang__list').innerHTML = langArray;

		btnSelect.innerHTML = langArray[0];
		btnSelect.setAttribute('value', 'en');

		document.querySelectorAll('#lang__list li').forEach((item) => {
			item.addEventListener('click', function () {
				const img = this.children[0].getAttribute('src');
				const value = this.children[0].getAttribute('value');
				const choseLang = this.innerText;
				const item =
					'<li><img src="' + img + '" alt="" /><span>' + choseLang + '</span></li>';
				btnSelect.innerHTML = item;
				changeLang(choseLang);
				btnSelect.setAttribute('value', value);
				langList.classList.toggle('hidden');
			});
		});

		btnSelect.addEventListener('click', () => {
			langList.classList.toggle('hidden');
		});
	}, []);


	const changeLang = (choseLang) => setLang(choseLang);

	const Option = ({ln}) => {
		const srcImg = `images/${ln}.svg`;
		return (
			<option value={ln} data-thumbnail={srcImg}>{ln}</option>
		)
	};

	const arr = ['en', 'ru', 'de'];


	return (
		<>
			<select className="lang" >
				{arr.map((ln) => <Option ln={ln}/>)}
			</select >

			<div className="lang__btns">
				<button className="lang__btn-select" value={lang} ></button >
				<div >
					<ul id="lang__list"  className="hidden" ></ul >
				</div >
			</div >
		</>
	)
};

export default Lang;
