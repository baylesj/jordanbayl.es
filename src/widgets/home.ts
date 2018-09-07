import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

import getProfilePhoto from '../subwidgets/profilePhoto';
import getSocialMediaLinks from '../subwidgets/socialMedia';

function getIntroHeader(): VNode {
	return v('div', {} , [
		v('h1', { classes: 'fancy' }, ["Hello, I'm Jordan!"]),
		v('p', { classes: 'subtitle' }, [
		    "I'm an experienced full-stack",
			v('br', {}),
			"software engineer based in Seattle"
		])
	]);
}

function getSummary(): VNode {
	return v('div', { classes: "text-widget" }, [
		v('h2', { classes: 'docs-header' }, ["Summary"]),
		v('p', {}, [
			"DIY-er. Audiophile. Urbanite. Hiker. Planner. Aspiring guitar player.",
			v('br'),
			v('br'),
			"Currently based out of ",
			v("a", { href: "https://www.seattle.gov/"}, ["Seattle"]),
			", via Oregon, Indiana, and California. Alumnus of ",
			v("a", { href: "https://oregonstate.edu/"}, [ "Oregon State University"]),
			".",
			v('br'),
			v('br'),
			"Currently prioritizing travelling, photography, expanding my tastes, reinforcing friendships, and trying new things.",
			v('br'),
			v('br'),
			"My biggest goal is striving to always have a growth mentality--to take feedback ",
			"when it is given, push myself out of my comfort zone, and be receptive to new ",
			"challenges and opportunities.",
			v('br'),
			v('br'),
			"Hit me up on Twitter: ",
			v('a', { href: 'https://twitter.com/jophba' }, [ '@jophba' ])
		])
	])
}
export class Home extends WidgetBase {
	protected render() {
		return v('div', { classes: 'widget' }, [
			getIntroHeader(),
			getProfilePhoto(),
			getSocialMediaLinks(),
			getSummary()
		]);
	}
}

export default Home;
