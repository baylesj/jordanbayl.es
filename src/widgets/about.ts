import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

export class About extends WidgetBase {
	protected render() {
		return v('div', { classes: 'widget' }, ["I am about stuff"]);
	}
}

export default About;
