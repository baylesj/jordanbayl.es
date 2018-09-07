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

export class Home extends WidgetBase {
	protected render() {
		return v('div', { classes: 'widget' }, [
			getIntroHeader(),
			getProfilePhoto(),
			getSocialMediaLinks()
		]);
	}
}

export default Home;
