import React from 'react';
import Search from "../search";
import Lang from "../lang";

const Header = ({isMain}) => {
	return (
		<header className="header" >
			<div className="header__content" >
				<a className="header__logo" href="#" >
					<img src="/images/icon-travel.png" alt="travel-app" ></img >
					<span >travelapp</span >
				</a >
				{isMain ? <Search /> : <></>}
				<Lang />
			</div >
		</header >
	)
};

export default Header;
