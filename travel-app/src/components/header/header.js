import React from 'react';
import Search from "../search";
import Lang from "../lang";

const Header = ({isMain}) => {
	return (
		<header className="header" >
			<div className="header__content" >
				<a href="/#" >
					<img  className="header__logo" src="/images/logo.svg"  alt="travel-app" ></img >
				</a >
				{isMain ? <Search /> : <></>}
				<Lang />
			</div >
		</header >
	)
};

export default Header;
