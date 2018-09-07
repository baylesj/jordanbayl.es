import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

const linkedInIcon = require('../img/nucleo-social-icons/svg/social-1_logo-linkedin.svg');
const instagramIcon = require('../img/nucleo-social-icons/svg/social-1_logo-instagram.svg');
const gitHubIcon = require('../img/nucleo-social-icons/svg/social-1_logo-github.svg');
//const fiveHundredPxIcon = require('../img/nucleo-social-icons/svg/social-1_logo-500px.svg');
const soundCloudIcon = require('../img/nucleo-social-icons/svg/social-1_logo-soundcloud.svg');

class SocialMediaAccount {
	constructor(name: string, iconName: string, profileUrl: string) {
		this.name = name;
		this.iconName = iconName;
		this.profileUrl = profileUrl;
	}

	name: string;
	iconName: string;
	profileUrl: string;
}

const socialMediaAccounts: SocialMediaAccount[] = [
	{ name: "LinkedIn", iconName: linkedInIcon, profileUrl: "https://www.linkedin.com/in/jordanbayles/" },
	{ name: "Instagram", iconName: instagramIcon, profileUrl: "https://www.instagram.com/jophba/" },
	{ name: "GitHub", iconName: gitHubIcon, profileUrl: "https://github.com/baylesj" },
	//{ name: "500px", iconName: fiveHundredPxIcon, profileUrl: "" },
	{ name: "SoundCloud", iconName: soundCloudIcon, profileUrl: "https://soundcloud.com/jophba" }
];

export default function getSocialMediaLinks(): VNode {
	return v('div', { id: 'contact-me', classes: "widget-body" }, [
		v('div', { classes: 'social-media-icons container' },
			socialMediaAccounts.map(account => {
				return v('a', { href: account.profileUrl }, [
					v('img', { classes: 'social-media-icon', src: account.iconName }, [ account.name ])
				]);
			})
		)
	]);
}