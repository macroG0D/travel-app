import React from 'react';
import {githubMembers} from "../../data/CONSTANTS";
import ItemGithubMember from "./itemGithubMember";

const Footer = () => {
	return (
		<footer className="footer" >
			<div className="footer__content" >
				<span >
					<a target='_blank' rel="noreferrer" href="https://rs.school/js/" >
					<img className="footer__img--rs"
							 src="/images/rs.svg"
							 alt="rs-school" />
				</a >
					</span >
				<div className="footer__github-members" >
					{githubMembers.map(({nameEn, endLink}) =>
						<ItemGithubMember
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
