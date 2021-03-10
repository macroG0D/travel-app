import React from 'react';
import {githubSrc} from "../../data/CONSTANTS";

const ItemGithubMembers = ({name, endLink}) => {
	const src = `${githubSrc}${endLink}`;

	return (
		<div className="footer__content__github-members__item" >
			<a target='_blank' rel="noreferrer" href={src} >
				<img className="footer__content__img__git"
						 src="/images/github.svg"
						 alt="github" />
				<span className="aa" >{name}</span >
			</a >
		</div >
	)
}

export default ItemGithubMembers;