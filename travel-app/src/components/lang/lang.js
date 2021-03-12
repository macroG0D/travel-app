import React, {useEffect} from 'react';

const Lang = () => {
	useEffect(() => {


		const langArray = [];
		const b = document.querySelector('.b');
		const btnSelect = document.querySelector('.btn-select');

		const elements = document.querySelectorAll('.vodiapicker option');
		Array.prototype.forEach.call(elements, (el, i) => {
			const img = el.getAttribute('data-thumbnail');
			const text = el.innerText;
			const value = el.value;
			const item = `<li><img src="${img}" alt="" value="${value}"/><span>${text}</span></li>`;
			langArray.push(item);
		});

		document.querySelector('#a').innerHTML = langArray;

		btnSelect.innerHTML = langArray[0];
		btnSelect.setAttribute('value', 'en');

		document.querySelectorAll('#a li').forEach((item) => {
			item.addEventListener('click', function () {
				const img = this.children[0].getAttribute('src');
				const value = this.children[0].getAttribute('value');
				const text = this.innerText;
				const item =
					'<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
				btnSelect.innerHTML = item;
				btnSelect.setAttribute('value', value);
				b.classList.toggle('b-hidden');
			});
		});

		btnSelect.addEventListener('click', () => {
			b.classList.toggle('b-hidden');
		});
	});

	const Option = ({ln}) => {
		const srcImg = `images/${ln}.svg`;
		const isSelected = false //(ln === lang);
		return (
			<option value={ln} data-thumbnail={srcImg} >{ln}</option>
		)
	};

	const arr = ['en', 'ru', 'de'];

	return (
		<>
			<select className="vodiapicker" >
				{arr.map((ln) => <Option ln={ln}/>)}
			</select >

			<div className="lang-select" >
				<button className="btn-select" value="" ></button >
				<div className="b b-hidden" >
					<ul id="a" ></ul >
				</div >
			</div >
		</>
	)
};

export default Lang;
