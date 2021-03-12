import React, {useState, useEffect} from 'react';
import Context from "../context";
import Header from "../header";
import Main from "../../pages/main";

const App = () => {
	const selectedLang = localStorage.getItem('lang') || 'en';
	const [lang, setLang] = useState(selectedLang);
	const saveLang = () => localStorage.setItem('lang', lang);

	useEffect(() => {
		window.addEventListener('unload', saveLang);
		return () => window.removeEventListener('unload', saveLang);
	});

	return (
		<Context.Provider value={[lang, setLang]} >
			<div className="app" >
				<Header isMain="true" />
				<Main />
			</div >
		</Context.Provider >
	)
};

export default App;
