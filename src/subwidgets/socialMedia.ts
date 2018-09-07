import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';
import { Config } from '../config';

const linkedInIcon = require('../img/nucleo-social-icons/svg/social-1_logo-linkedin.svg');
const instagramIcon = require('../img/nucleo-social-icons/svg/social-1_logo-instagram.svg');
const resumeIcon = require('../img/resume.svg');
const gitHubIcon = require('../img/nucleo-social-icons/svg/social-1_logo-github.svg');
const soundCloudIcon = require('../img/nucleo-social-icons/svg/social-1_logo-soundcloud.svg');

const config: Config = require('../config.json');

class SocialMediaAccount {
	constructor(name: string, iconName: string, profileUrl: string, classes?: string) {
        this.classes = classes;
		this.name = name;
		this.iconName = iconName;
		this.profileUrl = profileUrl;
	}

    name: string;
	iconName: string;
    classes?: string;
	profileUrl: string;
}

const socialMediaAccounts: SocialMediaAccount[] = [
	{ name: "LinkedIn", iconName: linkedInIcon, profileUrl: "https://www.linkedin.com/in/jordanbayles/" },
    { name: "Instagram", iconName: instagramIcon, profileUrl: "https://www.instagram.com/jophba/" },
    { name: "Resume", iconName: resumeIcon, classes: 'icon-xl', profileUrl: `${config.staticFolder}/baylesj_resume.pdf`},
	{ name: "GitHub", iconName: gitHubIcon, profileUrl: "https://github.com/baylesj" },
	{ name: "SoundCloud", iconName: soundCloudIcon, profileUrl: "https://soundcloud.com/jophba" }
];

export default function getSocialMediaLinks(): VNode {
	return v('div', { id: 'contact-me', classes: "widget-body" }, [
		v('div', { classes: 'social-media-icons container' },
			socialMediaAccounts.map(account => {
				return v('a', { href: account.profileUrl }, [
					v('img', { classes: `social-media-icon ${account.classes}`, src: account.iconName }, [ account.name ])
				]);
			})
		)
	]);
}