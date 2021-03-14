import React from 'react';
import Search from "../search";
import Lang from "../lang";

const Header = ({isMain, updateFilter}) => {
	return (
		<header className="header" >
			<div className="header__content" >
				<a href="/#" >
					<img  className="header__logo" src="/images/logo.svg"  alt="travel-app" ></img >
				</a >
				{isMain ? <Search updateFilter={updateFilter}/> : <></>}
				<Lang />
			</div >
		</header >
	)
};

export default Header;
