import React from 'react';
import {githubMembers} from "../../data/CONSTANTS";
import ItemGithubMembers from "./itemGithubMembers";

const Footer = () => {
	return (
		<footer className="footer" >
			<div className="footer__content" >
				<span >
					<a target='_blank' rel="noreferrer" href="https://rs.school/js/" >
					<img className="footer__content__img__rs"
							 src="/images/rs.svg"
							 alt="rs-school" />
				</a >
					</span >
				<div className="footer__content__github-members" >
					{githubMembers.map(({nameEn, endLink}) =>
						<ItemGithubMembers
							name={nameEn}
							endLink={endLink}
						/>)}

				</div >
				<span >React js travel-app 2021</span >
			</div >
		</footer >
	)
};

export default Footer;
